import Image from "next/image";
import Link from "next/link";
import styles from "./course.module.css";
import type { RoadmapCourse } from "@/types/roadmap";

type Props = RoadmapCourse & {
  variant?: "default" | "explore";
};

const fallbackCover = "/images/algorithms.png";

export default function Course({
  title,
  desc,
  progress,
  xp,
  imageSrc,
  href,
  variant = "default",
}: Props) {
  if (variant === "explore") {
    return (
      <li className={styles.courseItem}>
        <Link className={`${styles.course} ${styles.courseExplore}`} href={href}>
          <div className={styles.info}>
            <p className={styles.eyebrow}>Course</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
            <p className={styles.xpExplore}>+{xp} XP</p>
            <p className={styles.rangeTag}>Beginner to Advanced</p>
          </div>

          <div className={styles.exploreFooter}>
            <div className={styles.footerProgress}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
              </div>

              <div className={styles.progressInfo}>
                <p className={styles.percentage}>{progress}% Completed</p>
              </div>
            </div>

            <span className={styles.exploreAction}>Enroll</span>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.courseItem}>
      <Link className={styles.course} href={href}>
        <div className={styles.cover}>
          <Image
            className={styles.coverImage}
            src={imageSrc}
            alt={title}
            width={640}
            height={360}
            unoptimized
            onError={(event) => {
              const target = event.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = fallbackCover;
            }}
          />
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
        </div>

        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>

          <div className={styles.progressInfo}>
            <p className={styles.percentage}>{progress}% Completed</p>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.xp}>+{xp} XP</p>
        </div>
      </Link>
    </li>
  );
}
