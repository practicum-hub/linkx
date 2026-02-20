"use client";

import CodePanel from "@/components/Lesson/CodePanel/CodePanel";
import { algorithmsRoadmap, getTopicById, getUnitById, type UnitExercise } from "@/data/courses/algorithms/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

type LessonMode = "theory" | "practice";

const fallbackExercise: UnitExercise = {
  id: "fallback",
  title: "Algorithm Exercise",
  theory: {
    intro: "Learn the concept, run a dry trace, and then apply it in code.",
    sections: [
      {
        title: "Core Idea",
        text: "Understand the model first, then map constraints to an implementation.",
      },
    ],
    tips: ["Understand concept", "Trace examples", "Implement correctly"],
    visualization: {
      title: "Concept Flow",
      nodes: ["Concept", "Trace", "Implement", "Validate"],
    },
  },
  practice: {
    taskTitle: "Practice Task",
    task: "Solve the task using the code editor and validate with test cases.",
    input: "example input",
    output: "example output",
    requirements: ["Read constraints", "Handle edge cases", "Submit passing solution"],
    cases: [{ input: "example input", output: "example output" }],
  },
};

export default function Learn() {
  const searchParams = useSearchParams();
  const topicFromQuery = searchParams.get("topic") ?? "foundations";
  const unitFromQuery = searchParams.get("unit") ?? "f-u1";
  const currentStep = Number(searchParams.get("step") ?? "1");

  const selectedTopic = getTopicById(topicFromQuery) ?? algorithmsRoadmap[0];
  const selectedUnit = getUnitById(selectedTopic.id, unitFromQuery) ?? selectedTopic.units[0];

  const exercises = selectedUnit?.exercises ?? [fallbackExercise];
  const total = Math.max(2, exercises.length * 2);
  const safeStep = Number.isFinite(currentStep) ? Math.min(Math.max(currentStep, 1), total) : 1;
  const exerciseIndex = Math.floor((safeStep - 1) / 2);
  const lesson = exercises[exerciseIndex] ?? fallbackExercise;

  const modeFromQuery = searchParams.get("mode");
  const computedMode: LessonMode = safeStep % 2 === 0 ? "practice" : "theory";
  const initialMode: LessonMode =
    modeFromQuery === "theory" || modeFromQuery === "practice" ? modeFromQuery : computedMode;
  const [isChecked, setIsChecked] = useState(false);
  const mode = initialMode;

  const progress = Math.min(100, Math.round((safeStep / total) * 100));
  const nextStep = Math.min(total, safeStep + 1);
  const prevStep = Math.max(1, safeStep - 1);
  const nextMode: LessonMode = nextStep % 2 === 0 ? "practice" : "theory";
  const prevMode: LessonMode = prevStep % 2 === 0 ? "practice" : "theory";
  const nextHref = `/learn?topic=${selectedTopic.id}&unit=${selectedUnit.id}&step=${nextStep}&total=${total}&mode=${nextMode}`;
  const prevHref = `/learn?topic=${selectedTopic.id}&unit=${selectedUnit.id}&step=${prevStep}&total=${total}&mode=${prevMode}`;

  return (
    <div className={styles.page}>
      <header className={styles.learnHeader}>
        <Link href="/practice?roadmap=algorithms-zero-to-hero" className={styles.exitBtn}>
          Exit
        </Link>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        <div className={styles.counter}>
          {safeStep}/{total}
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.lessonHeading}>
          <p className={styles.meta}>
            {selectedTopic.title} / {selectedUnit.title} / Exercise {exerciseIndex + 1}
          </p>
          <h1 className={styles.title}>{lesson.title}</h1>
          <p className={styles.modeTag}>{mode === "theory" ? "Theory Exercise" : "Practice Exercise"}</p>
        </div>

        {mode === "theory" ? (
          <section className={styles.theoryLayout}>
            <article className={styles.theoryText}>
              <p className={styles.theoryIntro}>{lesson.theory.intro}</p>
              <div className={styles.theorySections}>
                {lesson.theory.sections.map((section) => (
                  <section key={section.title} className={styles.sectionBlock}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    <p className={styles.sectionText}>{section.text}</p>
                  </section>
                ))}
              </div>

              <div className={styles.tipBlock}>
                <h3 className={styles.tipTitle}>Quick Checklist</h3>
                <ul className={styles.tipList}>
                  {lesson.theory.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            </article>

            {lesson.theory.visualization ? (
              <aside className={styles.visualCard}>
                <h2 className={styles.visualTitle}>{lesson.theory.visualization.title}</h2>
                <div className={styles.visualFlow}>
                  {lesson.theory.visualization.nodes.map((node, index) => (
                    <div key={node} className={styles.visualRow}>
                      <span className={styles.visualIndex}>0{index + 1}</span>
                      <span className={styles.visualNode}>{node}</span>
                    </div>
                  ))}
                </div>
              </aside>
            ) : null}
          </section>
        ) : (
          <section className={styles.practiceLayout}>
            <article className={styles.practiceTask}>
              <h2 className={styles.practiceTitle}>{lesson.practice.taskTitle}</h2>
              <p className={styles.practiceText}>{lesson.practice.task}</p>

              <div className={styles.ioGrid}>
                <div className={styles.ioCard}>
                  <p className={styles.ioLabel}>Input</p>
                  <p className={styles.ioValue}>{lesson.practice.input}</p>
                </div>
                <div className={styles.ioCard}>
                  <p className={styles.ioLabel}>Output</p>
                  <p className={styles.ioValue}>{lesson.practice.output}</p>
                </div>
              </div>

              <h3 className={styles.practiceBlockTitle}>Requirements</h3>
              <ul className={styles.practiceList}>
                {lesson.practice.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className={styles.practiceBlockTitle}>Test Cases</h3>
              <div className={styles.cases}>
                {lesson.practice.cases.map((example) => (
                  <div key={`${example.input}-${example.output}`} className={styles.caseCard}>
                    <p>
                      <strong>Input:</strong> {example.input}
                    </p>
                    <p>
                      <strong>Output:</strong> {example.output}
                    </p>
                    {example.note ? <p className={styles.caseNote}>{example.note}</p> : null}
                  </div>
                ))}
              </div>
            </article>

            <div className={styles.codePanelWrap}>
              <CodePanel className={styles.embeddedCodePanel} style={{ width: "100%" }} />
            </div>
          </section>
        )}

        <div className={styles.footerNav}>
          <Link
            href={prevHref}
            className={`${styles.navBtn} ${safeStep === 1 ? styles.navBtnDisabled : ""}`}
            aria-disabled={safeStep === 1}
            tabIndex={safeStep === 1 ? -1 : undefined}
          >
            Previous
          </Link>

          {mode === "practice" ? (
            <button className={styles.checkBtn} onClick={() => setIsChecked(true)}>
              Check
            </button>
          ) : null}

          <Link
            href={nextHref}
            className={`${styles.navBtnPrimary} ${
              mode === "practice" && !isChecked ? styles.navBtnDisabled : ""
            }`}
            aria-disabled={mode === "practice" && !isChecked}
            tabIndex={mode === "practice" && !isChecked ? -1 : undefined}
          >
            {safeStep === total ? "Finish" : "Continue"}
          </Link>
        </div>

        <div className={styles.exerciseRail}>
          {Array.from({ length: total }, (_, i) => i + 1).map((index) => (
            <div
              key={index}
              className={`${styles.exerciseDot} ${index <= safeStep ? styles.exerciseDotActive : ""}`}
            >
              {index}
            </div>
          ))}
        </div>

        {mode === "practice" && isChecked ? (
          <p className={styles.checkStatus}>
            Checks passed. You can continue to the next exercise.
          </p>
        ) : null}
      </main>
    </div>
  );
}
