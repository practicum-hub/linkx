"use client";

import styles from "./codePanelHeader.module.css";

export default function CodePanelHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.windowActions} aria-hidden="true">
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
      </div>

      <div className={styles.tabs}>
        <div className={styles.tabActive}>main.py</div>
      </div>
    </header>
  );
}
