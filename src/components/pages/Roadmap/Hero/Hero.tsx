import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Personalized Learning Journey</p>
        <h1 className={styles.title}>Level Up Your Skills With Focused Daily Missions</h1>
        <p className={styles.desc}>
          Pick your track, keep the streak alive, and move from fundamentals to
          advanced practice with clear milestones.
        </p>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.actions}>
          <button className={styles.primaryBtn}>Continue Journey</button>
          <button className={styles.secondaryBtn}>Explore New Path</button>
        </div>

        <div className={styles.accentBox}>
          <p className={styles.accentTitle}>Today Focus</p>
          <p className={styles.accentText}>2 algorithm tasks + 1 system design lesson</p>
        </div>
      </div>
    </section>
  );
}
