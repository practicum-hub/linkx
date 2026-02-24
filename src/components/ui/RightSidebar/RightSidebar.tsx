"use client";

import styles from "./rightSidebar.module.css";

export default function RightSidebar() {
  return (
    <aside className={styles.sidebar}>
      <section className={`${styles.adCard} ${styles.adPrimary}`}>
        <p className={styles.adTag}>Sponsored</p>
        <h3 className={styles.adTitle}>Frontend Interview Pack</h3>
        <p className={styles.adText}>120 задач с разбором и mock-интервью в реальном формате.</p>
        <button className={styles.adButton} type="button">
          Start Trial
        </button>
      </section>

      <section className={styles.adCard}>
        <p className={styles.adTag}>Ad</p>
        <h3 className={styles.adTitle}>Algorithms Booster</h3>
        <p className={styles.adText}>Прокачай DSA за 4 недели с ежедневным планом.</p>
        <button className={styles.adButtonSecondary} type="button">
          Learn More
        </button>
      </section>

      <section className={styles.adCard}>
        <p className={styles.adTag}>Partner</p>
        <h3 className={styles.adTitle}>CV Review by Mentors</h3>
        <p className={styles.adText}>Получи фидбек по резюме и LinkedIn за 24 часа.</p>
        <button className={styles.adButtonSecondary} type="button">
          Book Review
        </button>
      </section>

      <section className={styles.adCard}>
        <div className={styles.adInline}>
          <div>
            <p className={styles.adTag}>Deal</p>
            <h3 className={styles.adTitleSmall}>Pro Plan -40%</h3>
            <p className={styles.adTextSmall}>Только до конца недели.</p>
          </div>
          <button className={styles.adButtonSmall} type="button">
            Claim
          </button>
        </div>
      </section>
    </aside>
  );
}
