import Image from "next/image";
import Link from "next/link";
import styles from "./careerCard.module.css";
import type { CareerPath } from "@/types/roadmap";

type Props = CareerPath;
type VariantProps = {
  variant?: "default" | "explore";
};

const coverMap: Record<string, string> = {
  "AI Engineer": "/images/algorithms.png",
  "Frontend Engineer": "/images/javascript.png",
  "Backend Engineer": "/images/python.png",
  "ML Engineer": "/images/algorithms.png",
  "DevOps Engineer": "/images/nextjs.webp",
  "Data Engineer": "/images/sql.png",
  "Robotics Engineer": "/images/algorithms.png",
  "Embedded Systems Engineer": "/images/c++.png",
  "Electrical Engineer": "/images/java.jpg",
  "Energy Systems Engineer": "/images/algorithms.png",
  "Aerospace Engineer": "/images/nextjs.webp",
  "Industrial Automation Engineer": "/images/javascript.png",
  "CAD / Mechanical Design Engineer": "/images/java.jpg",
  "Supply Chain & Logistics Engineer": "/images/sql.png",
  "Smart Agriculture Engineer": "/images/python.png",
  "Climate Tech Engineer": "/images/algorithms.png",
};

const fallbackCover = "/images/algorithms.png";
const progressByTitle: Record<string, number> = {
  "AI Engineer": 24,
  "Frontend Engineer": 61,
  "Backend Engineer": 38,
  "ML Engineer": 12,
  "DevOps Engineer": 47,
  "Data Engineer": 33,
  "Robotics Engineer": 8,
  "Embedded Systems Engineer": 19,
  "Electrical Engineer": 0,
  "Energy Systems Engineer": 14,
  "Aerospace Engineer": 5,
  "Industrial Automation Engineer": 22,
  "CAD / Mechanical Design Engineer": 41,
  "Supply Chain & Logistics Engineer": 29,
  "Smart Agriculture Engineer": 3,
  "Climate Tech Engineer": 11,
};

export default function CareerCard({
  title,
  desc,
  duration,
  courses,
  salary,
  demand,
  href,
  variant = "default",
}: Props & VariantProps) {
  if (variant === "explore") {
    const progress = progressByTitle[title] ?? 0;

    return (
      <li className={styles.cardItem}>
        <Link className={`${styles.card} ${styles.cardExplore}`} href={href}>
          <div className={styles.exploreCardContent}>
            <p className={styles.eyebrow}>Career</p>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.metaRow}>
              <span className={styles.metaIcon} aria-hidden="true" />
              <p className={styles.metaText}>{duration}</p>
            </div>

            <p className={styles.desc}>{desc}</p>
            <p className={styles.exploreMetaSummary}>
              {courses} | {salary} | {demand}
            </p>
          </div>

          <div className={styles.exploreFooter}>
            <div className={styles.exploreFooterProgress}>
              <div className={styles.exploreProgressTrack}>
                <div className={styles.exploreProgressFill} style={{ width: `${progress}%` }} />
              </div>
              <span className={styles.explorePercent}>{progress}% matched</span>
            </div>

            <span className={styles.linkLabel}>{progress > 0 ? "Continue path" : "Explore path"}</span>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.cardItem}>
      <Link className={styles.card} href={href}>
        <div className={styles.cover}>
          <Image
            className={styles.coverImage}
            src={coverMap[title] ?? fallbackCover}
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

        <div className={styles.content}>
          <div className={styles.topRow}>
            <p className={styles.eyebrow}>Career path</p>
            <div className={styles.chips}>
              <p className={styles.chip}>{courses}</p>
              <p className={styles.chip}>{duration}</p>
            </div>
          </div>

          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>

          <div className={styles.stats}>
            <p className={styles.stat}>{salary}</p>
            <p className={styles.stat}>{demand}</p>
          </div>

          <p className={styles.linkLabel}>View path</p>
        </div>
      </Link>
    </li>
  );
}
