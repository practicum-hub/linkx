import CodePanel from "@/components/Lesson/CodePanel/CodePanel";
import type { PracticeExercise } from "@/types/algorithms";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  lesson: PracticeExercise;
  isDark: boolean;
};

export default function PracticeView({ lesson, isDark }: Props) {
  return (
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
        <CodePanel
          className={styles.embeddedCodePanel}
          style={{ width: "100%" }}
          isDark={isDark}
          lessonId={lesson.id}
          starterCode={lesson.practice.starterCode}
          terminalCases={lesson.practice.terminal?.cases}
          terminalNote={lesson.practice.terminal?.note}
        />
      </div>
    </section>
  );
}
