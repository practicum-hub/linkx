"use client";

import styles from "./rightSidebar.module.css";
import { getRoadmapSidebarContent } from "@/core/data/roadmapContext";
import { usePathname, useSearchParams } from "next/navigation";

export default function RightSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    snapshotTitle,
    stats,
    metricsTitle,
    highlights,
    statusTitle,
    statusItems,
    quickActions,
  } = getRoadmapSidebarContent(pathname, searchParams.get("roadmap"));

  return (
    <aside className={styles.sidebar}>
      <section className={styles.panel}>
        <h2 className={styles.title}>{snapshotTitle}</h2>

        <ul className={styles.statsGrid}>
          {stats.map((stat) => (
            <li key={stat.id} className={styles.statCard}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.panel}>
        <h2 className={styles.title}>{metricsTitle}</h2>

        <ul className={styles.colorList}>
          {highlights.map((item) => (
            <li key={item.id} className={`${styles.colorCard} ${styles[item.tone]}`}>
              <p className={styles.colorTitle}>{item.title}</p>
              <p className={styles.colorValue}>{item.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.panel}>
        <h2 className={styles.title}>{statusTitle}</h2>
        <div className={styles.statusGrid}>
          {statusItems.map((item) => (
            <div key={item.label} className={styles.statusItem}>
              <p className={styles.statusLabel}>{item.label}</p>
              <p className={styles.statusValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.panel} ${styles.bottomPanel}`}>
        <div className={styles.quickRow}>
          <button className={styles.ghostBtn}>{quickActions[0]}</button>
          <button className={styles.ghostBtn}>{quickActions[1]}</button>
        </div>
      </section>
    </aside>
  );
}
