"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { algorithmsRoadmap } from "@/data/mocks/courses/algorithmsRoadmap";
import { buildLayouts, edgePath, nodePosition } from "@/lib/practice/roadmapGraph";
import { useRoadmapCamera } from "@/lib/practice/useRoadmapCamera";
import { useAppTheme } from "@/components/providers/ThemeProvider";
import styles from "./page.module.css";

export default function Practice() {
  const { isDark } = useAppTheme();
  const { canvasWidth, canvasHeight, layouts } = useMemo(() => buildLayouts(algorithmsRoadmap), []);
  const centeredOnceRef = useRef(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorModeRef = useRef<"idle" | "active">("idle");
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<"idle" | "active">("idle");
  const {
    camera,
    isDragging,
    viewportRef,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
    handleClickCapture,
    centerContent,
  } = useRoadmapCamera();

  const updateCursor = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isFinePointer || !cursorRef.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;

    const target = event.target as HTMLElement;
    const nextMode = target.closest('[data-cursor="active"]') ? "active" : "idle";
    if (cursorModeRef.current !== nextMode) {
      cursorModeRef.current = nextMode;
      setCursorMode(nextMode);
    }
  };

  useEffect(() => {
    if (centeredOnceRef.current) {
      return;
    }

    centerContent(canvasWidth, canvasHeight);
    centeredOnceRef.current = true;
  }, [canvasWidth, canvasHeight, centerContent]);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setIsFinePointer(media.matches);
    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  return (
    <div className={styles.page}>
      <section
        ref={viewportRef}
        className={`${styles.roadmapViewport} ${isDragging ? styles.roadmapViewportDragging : ""} ${isFinePointer ? styles.customCursorViewport : ""}`}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={(event) => {
          handlePointerMove(event);
          updateCursor(event);
        }}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClickCapture={handleClickCapture}
        onPointerEnter={(event) => {
          if (!isFinePointer) {
            return;
          }

          setIsCursorVisible(true);
          updateCursor(event);
        }}
        onPointerLeave={() => {
          setIsCursorVisible(false);
          cursorModeRef.current = "idle";
          setCursorMode("idle");
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {isFinePointer ? (
          <div
            ref={cursorRef}
            aria-hidden="true"
            className={`${styles.gameCursor} ${isCursorVisible ? styles.gameCursorVisible : ""} ${cursorMode === "active" ? styles.gameCursorActive : ""} ${isDragging ? styles.gameCursorDragging : ""}`}
          >
            <span className={styles.cursorCore} />
            <span className={styles.cursorRing} />
          </div>
        ) : null}

        <div
          className={styles.roadmapCamera}
          style={{ transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale})` }}
        >
          <div className={styles.roadmapCanvas} style={{ width: canvasWidth, height: canvasHeight }}>
            <div className={styles.canvasGrid} aria-hidden="true" />
            {layouts.map((layout) => {
              const { topic, index, topicLocked, graphWidth, graphHeight, headerTop, graphTop, graphLeft } = layout;

              return (
                <article key={topic.id} className={styles.topicLayer}>
                  <div className={styles.topicHeader} style={{ top: headerTop, width: canvasWidth }}>
                    <p className={styles.topicIndex}>
                      Topic {index + 1}
                      {topicLocked ? (
                        <span className={styles.topicLockedTag}>
                          <span className={styles.lockIcon} aria-hidden="true">
                            {"\u{1F512}"}
                          </span>
                          Locked
                        </span>
                      ) : null}
                    </p>
                    <h2 className={`${styles.topicTitle} ${topicLocked ? styles.topicTitleLocked : ""}`}>
                      {topic.title}
                    </h2>
                    <p className={styles.topicDesc}>{topic.desc}</p>
                  </div>

                  <div
                    className={styles.graphCanvas}
                    style={{ top: graphTop, left: graphLeft, width: graphWidth, height: graphHeight }}
                  >
                    <svg
                      className={styles.edges}
                      viewBox={`0 0 ${graphWidth} ${graphHeight}`}
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <marker
                          id={`${topic.id}-arrow`}
                          markerWidth="10"
                          markerHeight="10"
                          refX="8.5"
                          refY="5"
                          orient="auto"
                        >
                          <path d="M1 1 Q2.4 5 1 9 L9 5 Z" fill={isDark ? "#5f7ba6" : "#9fb5d8"} />
                        </marker>
                      </defs>

                      {layout.edges.map(([fromId, toId]) => {
                        const from = layout.unitMap.get(fromId);
                        const to = layout.unitMap.get(toId);
                        if (!from || !to) {
                          return null;
                        }

                        const active = !topicLocked && topic.completed.includes(fromId);

                        return (
                          <path
                            key={`${fromId}-${toId}`}
                            d={edgePath(from, to)}
                            stroke={active ? (isDark ? "#69adff" : "#4f8eff") : isDark ? "#4c607f" : "#b8c8df"}
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            markerEnd={`url(#${topic.id}-arrow)`}
                            opacity={active ? "1" : "0.65"}
                          />
                        );
                      })}
                    </svg>

                    {topic.units.map((unit) => {
                      const completed = topic.completed.includes(unit.id);
                      const unlockedByDeps =
                        unit.requires.length === 0 ||
                        unit.requires.every((requiredUnitId) => topic.completed.includes(requiredUnitId));
                      const unlocked = !topicLocked && unlockedByDeps;
                      const locked = !completed && !unlocked;
                      const pos = nodePosition(unit);
                      const totalSteps = Math.max(2, unit.exercises.length * 2);
                      const href = `/learn?topic=${topic.id}&unit=${unit.id}&step=1&total=${totalSteps}`;

                      if (locked) {
                        return (
                          <button
                            key={unit.id}
                            className={`${styles.unitNode} ${styles.locked}`}
                            style={{ left: pos.x, top: pos.y }}
                            disabled
                          >
                            <span className={styles.unitType}>{unit.type}</span>
                            <span className={styles.unitTitle}>{unit.title}</span>
                            <span className={styles.unitStatus}>
                              <span className={styles.lockIcon} aria-hidden="true">
                                {"\u{1F512}"}
                              </span>{" "}
                              Locked
                            </span>
                          </button>
                        );
                      }

                      return (
                        <Link
                          key={unit.id}
                          href={href}
                          data-cursor="active"
                          className={`${styles.unitNode} ${completed ? styles.done : ""}`}
                          style={{ left: pos.x, top: pos.y }}
                        >
                          <span className={styles.unitType}>{unit.type}</span>
                          <span className={styles.unitTitle}>{unit.title}</span>
                          <span className={styles.unitStatus}>{completed ? "Completed" : "Start"}</span>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
