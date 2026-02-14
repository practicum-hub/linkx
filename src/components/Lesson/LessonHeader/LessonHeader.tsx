import Link from "next/link";
import styles from "./lessonHeader.module.css";

export default function LessonHeader() {
  return (
    <header className={styles.header}>
      <Link href="/learn">Exit</Link>
      <div className={styles.progressBar} />
      <div className={styles.hearts}>❤️</div>
    </header>
  );
}
