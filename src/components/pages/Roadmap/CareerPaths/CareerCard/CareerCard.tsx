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
  return (
    <li className={styles.cardItem}>
      <Link
        className={`${styles.card} ${variant === "explore" ? styles.cardExplore : ""}`}
        href={href}
      >
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
