import Link from "next/link";
import styles from "./course.module.css";
import type { RoadmapCourse } from "@/types/roadmap";

type Props = RoadmapCourse;

export default function Course({
  title,
  desc,
  level,
  duration,
  progress,
  unitsDone,
  totalUnits,
  xp,
  imageSrc,
  href,
}: Props) {
  return (
    <li className={styles.courseItem}>
      <Link className={styles.course} href={href}>
        <div className={styles.cover}>
          <img className={styles.coverImage} src={imageSrc} alt={title} />
        </div>

        <div className={styles.topRow}>
          <p className={styles.level}>{level}</p>
          <p className={styles.duration}>{duration}</p>
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
            <p className={styles.units}>
              {unitsDone}/{totalUnits} Units
            </p>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.xp}>+{xp} XP</p>
          <p className={styles.linkLabel}>Open Course</p>
        </div>
      </Link>
    </li>
  );
}
