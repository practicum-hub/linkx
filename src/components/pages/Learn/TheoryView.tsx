import type { UnitExercise } from "@/types/algorithms";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  lesson: UnitExercise;
};

export default function TheoryView({ lesson }: Props) {
  return (
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
  );
}
