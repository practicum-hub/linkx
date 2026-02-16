import styles from "./lessonHeader.module.css";

export default function LessonHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>eLEARNING</div>

      <div className={styles.progressBar} />

      <div className={styles.info}>
        <p className={styles.streak}>12</p>
        <p className={styles.userIcon}>A</p>
      </div>
    </header>
  );
}
