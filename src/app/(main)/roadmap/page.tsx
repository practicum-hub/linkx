import { mockLevels } from "@/core/data/mock";
import styles from "./page.module.css";
import Level from "@/components/Level/Level";

export default function Roadmap() {
  return (
    <div className={styles.page}>
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Mathematics Learning Roadmap</h1>
        <p className={styles.subTitle}>
          Your comprehensive journey from fundamentals to advanced mathematics
        </p>
      </div>

      <ul className={styles.levels}>
        {mockLevels.map((level) => (
          <Level key={level.name} level={level} />
        ))}
      </ul>
    </div>
  );
}
