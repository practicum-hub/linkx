import Link from "next/link";
import { FaMobileScreenButton } from "react-icons/fa6";
import type { TheoryExercise } from "@/types/algorithms";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  lesson: TheoryExercise;
  nextHref: string;
};

export default function TheoryView({ lesson, nextHref }: Props) {
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
      </article>

      <aside className={styles.visualCard}>
        <div className={styles.videoFrame} aria-hidden="true">
          <span className={styles.videoPlayIcon} />
        </div>
        <div className={styles.videoFooter}>
          <p className={styles.videoFooterNote}>
            <FaMobileScreenButton aria-hidden="true" />
            <span>
              This course is also available on the mobile app. <a href="#">Continue learning on mobile.</a>
            </span>
          </p>
          <Link href={nextHref} className={styles.videoFooterBtn}>
            Got It!
          </Link>
        </div>
      </aside>
    </section>
  );
}
