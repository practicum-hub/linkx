"use client";

import styles from "./rightSidebar.module.css";
import { getRoadmapSidebarContent } from "@/core/data/roadmapContext";
import { usePathname, useSearchParams } from "next/navigation";
import SocialFooter from "@/components/ui/SocialFooter/SocialFooter";

function parsePercent(value: string): number | null {
  const match = value.match(/(\d{1,3})\s*%/);
  if (!match) {
    return null;
  }

  const parsed = Number(match[1]);
  if (Number.isNaN(parsed)) {
    return null;
  }

  return Math.max(0, Math.min(100, parsed));
}

export default function RightSidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { stats, highlights, statusItems } = getRoadmapSidebarContent(
    pathname,
    searchParams.get("roadmap"),
  );

  const getStatValue = (keywords: string[], fallback: string) => {
    const match = stats.find((stat) => {
      const label = stat.label.toLowerCase();
      return keywords.some((keyword) => label.includes(keyword));
    });

    return match?.value ?? fallback;
  };

  const dailyStreak = getStatValue(["streak"], "3");
  const totalXp = getStatValue(["xp"], stats[0]?.value ?? "2460");
  const profileCompleted =
    highlights.find((item) => item.value.includes("%"))?.value ?? "82%";
  const profileProgress = parsePercent(profileCompleted) ?? 82;

  const leaderboardValue = highlights[1]
    ? `${highlights[1].title}: ${highlights[1].value}`
    : "Top 15% this week";

  const achievementsValue =
    statusItems[1]?.value ?? `${Math.max(2, statusItems.length)} unlocked`;

  return (
    <aside className={styles.sidebar}>
      <section className={styles.welcomeCard}>
        <div className={styles.welcomeTop}>
          <div className={styles.avatar} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className={styles.avatarIcon}>
              <circle
                cx="12"
                cy="8"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M5 19c.7-3.1 3.1-4.7 7-4.7s6.3 1.6 7 4.7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <p className={styles.hello}>Welcome back</p>
            <p className={styles.subtle}>Your weekly learning snapshot.</p>
          </div>
        </div>

        <div className={styles.progressHeader}>
          <p className={styles.progressLabel}>Profile completed</p>
          <p className={styles.progressValue}>{profileCompleted}</p>
        </div>
        <div className={styles.progressTrack}>
          <span
            className={styles.progressFill}
            style={{ width: `${profileProgress}%` }}
          />
        </div>
      </section>

      <section className={styles.metricsGrid}>
        <article className={styles.metricCard}>
          <p className={styles.metricLabel}>Daily streak</p>
          <p className={styles.metricValue}>{dailyStreak}</p>
        </article>

        <article className={styles.metricCard}>
          <p className={styles.metricLabel}>Total XP</p>
          <p className={styles.metricValue}>{totalXp}</p>
        </article>
      </section>

      <section className={styles.featureCard}>
        <p className={styles.featureTitle}>Leaderboard</p>
        <p className={styles.featureValue}>{leaderboardValue}</p>
      </section>

      <section className={styles.featureCard}>
        <p className={styles.featureTitle}>Achievements</p>
        <p className={styles.featureValue}>{achievementsValue}</p>
      </section>

      <div className={styles.socialWrap}>
        <SocialFooter />
      </div>
    </aside>
  );
}
