import type { TheoryExercise } from "@/types/algorithms";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  lesson: TheoryExercise;
};

export default function TheoryView({ lesson }: Props) {
  const hasVisualization = Boolean(lesson.theory.visualization);

  return (
    <section className={`${styles.theoryLayout} ${!hasVisualization ? styles.theoryLayoutSingle : ""}`}>
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
      </article>

      {hasVisualization ? (
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
