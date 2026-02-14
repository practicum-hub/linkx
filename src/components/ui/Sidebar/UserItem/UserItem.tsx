import styles from "./userItem.module.css";

export default function UserItem() {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <p className={styles.icon}>JD</p>

        <div className={styles.textBlock}>
          <p className={styles.name}>Anton Deulia</p>
          <p className={styles.stats}>Level 12 | 2,450 XP</p>
        </div>
      </div>

      <p className={styles.dots}>:</p>
    </div>
  );
}
