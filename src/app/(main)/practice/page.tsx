"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { algorithmsRoadmap } from "@/data/mocks/courses/algorithmsRoadmap";
import { buildLayouts, edgePath, nodePosition } from "@/lib/practice/roadmapGraph";
import { useRoadmapCamera } from "@/lib/practice/useRoadmapCamera";
import styles from "./page.module.css";

export default function Practice() {
  const { canvasWidth, canvasHeight, layouts } = useMemo(() => buildLayouts(algorithmsRoadmap), []);
  const centeredOnceRef = useRef(false);
  const {
    camera,
    viewportRef,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
    handleClickCapture,
    centerContent,
  } = useRoadmapCamera();

  useEffect(() => {
    if (centeredOnceRef.current) {
      return;
    }

    centerContent(canvasWidth, canvasHeight);
    centeredOnceRef.current = true;
  }, [canvasWidth, canvasHeight, centerContent]);

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
        className={styles.roadmapViewport}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onClickCapture={handleClickCapture}
        onDragStart={(event) => event.preventDefault()}
      >
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
                      {layout.edges.map(([fromId, toId]) => {
                        const from = layout.unitMap.get(fromId);
                        const to = layout.unitMap.get(toId);
                        if (!from || !to) {
                          return null;
                        }

                        const active = !topicLocked && topic.completed.includes(fromId);
                        const edgeClass = topicLocked
                          ? styles.edgeLocked
                          : active
                            ? styles.edgeActive
                            : styles.edgeInactive;

                        return (
                          <path
                            key={`${fromId}-${toId}`}
                            d={edgePath(from, to)}
                            className={`${styles.edge} ${edgeClass}`}
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
                      const href = `/learn/${topic.id}/${unit.id}/1`;

                      if (locked) {
                        return (
                          <button
                            key={unit.id}
                            className={`${styles.unitNode} ${styles.locked}`}
                            style={{ left: pos.x, top: pos.y }}
                            disabled
                          >
                            <span className={styles.unitTitle}>{unit.title}</span>
                            <span className={styles.unitTopic}>Theme: {topic.title}</span>
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
                          className={`${styles.unitNode} ${completed ? styles.done : styles.available}`}
                          style={{ left: pos.x, top: pos.y }}
                        >
                          <span className={styles.unitTitle}>{unit.title}</span>
                          <span className={styles.unitTopic}>Theme: {topic.title}</span>
                          <span className={styles.unitStatus}>{completed ? "Completed" : "Available"}</span>
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
