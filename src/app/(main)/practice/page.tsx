import Link from "next/link";
import styles from "./page.module.css";
import { algorithmsRoadmap } from "@/data/courses/algorithms/data";

type UnitType = "Lesson" | "Quiz" | "Practice" | "Checkpoint";

type GraphUnit = {
  id: string;
  title: string;
  type: UnitType;
  level: number;
  lane: number;
  requires: string[];
  exercises: { id: string }[];
};

type GraphTopic = {
  id: string;
  title: string;
  desc: string;
  units: GraphUnit[];
  completed: string[];
};

const NODE_W = 190;
const NODE_H = 96;
const H_GAP = 42;
const V_GAP = 88;
const PAD = 24;

const roadmap: GraphTopic[] = algorithmsRoadmap;

function nodePosition(node: GraphUnit) {
  return {
    x: PAD + node.lane * (NODE_W + H_GAP),
    y: PAD + node.level * (NODE_H + V_GAP),
  };
}

function edgePath(from: GraphUnit, to: GraphUnit) {
  const p1 = nodePosition(from);
  const p2 = nodePosition(to);

  const startX = p1.x + NODE_W / 2;
  const startY = p1.y + NODE_H;
  const endX = p2.x + NODE_W / 2;
  const endY = p2.y;
  const c1Y = startY + 34;
  const c2Y = endY - 34;

  return `M ${startX} ${startY} C ${startX} ${c1Y}, ${endX} ${c2Y}, ${endX} ${endY}`;
}

export default function Practice() {
  return (
    <div className={styles.page}>
      <section className={styles.courseIntro}>
        <div className={styles.introTop}>
          <div className={styles.introText}>
            <h1 className={styles.title}>Algorithms Zero to Hero Course</h1>
          </div>

          <div className={styles.controls}>
            <div className={styles.selectWrap}>
              <span className={styles.langIcon} aria-hidden="true" />
              <select
                id="language"
                className={styles.select}
                defaultValue="javascript"
                suppressHydrationWarning
              >
                <option value="javascript">JS - JavaScript</option>
                <option value="typescript">TS - TypeScript</option>
                <option value="python">PY - Python</option>
                <option value="cpp">C++ - C Plus Plus</option>
                <option value="java">JV - Java</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.roadmap}>
        {roadmap.map((topic, index) => {
          const prevTopic = index > 0 ? roadmap[index - 1] : null;
          const prevTopicCompleted = prevTopic
            ? prevTopic.units.every((unit) => prevTopic.completed.includes(unit.id))
            : true;
          const topicLocked = !prevTopicCompleted;

          const maxLevel = Math.max(...topic.units.map((u) => u.level));
          const maxLane = Math.max(...topic.units.map((u) => u.lane));
          const width = PAD * 2 + (maxLane + 1) * NODE_W + maxLane * H_GAP;
          const height = PAD * 2 + (maxLevel + 1) * NODE_H + maxLevel * V_GAP;

          const unitMap = new Map(topic.units.map((u) => [u.id, u]));
          const edges = topic.units.flatMap((u) =>
            u.requires.map((req) => [req, u.id] as const),
          );

          return (
            <article key={topic.id} className={styles.topicBlock}>
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

              <div className={styles.graphScroll}>
                <div className={styles.graphCanvas} style={{ width, height }}>
                  <svg
                    className={styles.edges}
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <marker
                        id={`${topic.id}-arrow`}
                        markerWidth="8"
                        markerHeight="8"
                        refX="4"
                        refY="7"
                        orient="auto"
                      >
                        <path d="M0,0 L8,0 L4,8 Z" fill="#89a4cd" />
                      </marker>
                    </defs>

                    {edges.map(([fromId, toId]) => {
                      const from = unitMap.get(fromId);
                      const to = unitMap.get(toId);
                      if (!from || !to) return null;

                      const active = !topicLocked && topic.completed.includes(fromId);

                      return (
                        <path
                          key={`${fromId}-${toId}`}
                          d={edgePath(from, to)}
                          stroke={active ? "#4f8eff" : "#b8c8df"}
                          strokeWidth="2"
                          fill="none"
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
                      unit.requires.every((id) => topic.completed.includes(id));
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
                        className={`${styles.unitNode} ${completed ? styles.done : ""}`}
                        style={{ left: pos.x, top: pos.y }}
                      >
                        <span className={styles.unitType}>{unit.type}</span>
                        <span className={styles.unitTitle}>{unit.title}</span>
                        <span className={styles.unitStatus}>
                          {completed ? "Completed" : "Start"}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
