import Link from "next/link";
import CareerPaths from "@/components/pages/Roadmap/CareerPaths/CareerPaths";
import Courses from "@/components/pages/Roadmap/Courses/Courses";
import styles from "../roadmap/page.module.css";

const adGoals = [
  { icon: "->", label: "Start my career" },
  { icon: "<>", label: "Change my career" },
  { icon: "^", label: "Grow in my current role" },
  { icon: "o", label: "Explore topics outside of work" },
];

export default function ExplorePage() {
  return (
    <div className={`${styles.page} ${styles.explorePage}`}>
      <div className={`${styles.content} ${styles.exploreContent}`}>
        <section className={styles.exploreHero} aria-label="Featured learning journey">
          <div className={styles.exploreHeroPrimary}>
            <p className={styles.exploreHeroEyebrow}>Course</p>
            <h1 className={styles.exploreHeroTitle}>Prompt Engineering with the OpenAI API</h1>

            <div className={styles.exploreHeroProgressRow}>
              <div className={styles.exploreHeroProgressTrack}>
                <div className={styles.exploreHeroProgressFill} style={{ width: "15%" }} />
              </div>
              <span className={styles.exploreHeroProgressValue}>15%</span>
              <span className={styles.exploreHeroMeta}>3 hr 24 min</span>
            </div>

            <div className={styles.exploreHeroActions}>
              <button type="button" className={styles.exploreHeroPractice}>
                Practice
              </button>
              <button type="button" className={styles.exploreHeroContinue}>
                Continue
              </button>
            </div>
          </div>

          <aside className={styles.exploreHeroAside}>
            <p className={styles.exploreHeroEyebrow}>Enrolled track</p>
            <h2 className={styles.exploreHeroAsideTitle}>Associate Data Analyst in SQL</h2>
            <Link href="/careers" className={styles.exploreHeroAsideLink}>
              See track
            </Link>
          </aside>

        </section>

        <div className={styles.exploreCoursesBlock}>
          <Courses
            maxItems={8}
            title="Most popular courses"
            desc="Start your journey from zero to hero with curated, practical tracks."
            showAllHref="/courses"
          />
        </div>

        <section className={styles.addSection} aria-label="Learning goals">
          <h3 className={styles.addTitle}>What brings you here today?</h3>
          <div className={styles.addGoals}>
            {adGoals.map((goal) => (
              <button className={styles.addGoal} type="button" key={goal.label}>
                <span className={styles.addGoalIcon}>{goal.icon}</span>
                <span className={styles.addGoalLabel}>{goal.label}</span>
              </button>
            ))}
          </div>
        </section>

        <CareerPaths
          maxItems={4}
          title="Most popular career paths"
          desc="Structured roadmaps for specific job roles with clear outcomes."
          showAllHref="/careers"
        />

        <section className={styles.bottomHero} aria-label="Learning momentum">
          <div className={styles.bottomHeroPrimary}>
            <p className={styles.bottomHeroEyebrow}>Plan your next move</p>
            <h2 className={styles.bottomHeroTitle}>
              Build a weekly system that keeps your learning moving.
            </h2>
            <p className={styles.bottomHeroDesc}>
              Keep one active course, one target role, and one short practice block. A small,
              consistent loop beats random bursts of motivation.
            </p>
            <div className={styles.bottomHeroActions}>
              <button type="button" className={styles.bottomHeroGhostBtn}>
                Practice block
              </button>
              <button type="button" className={styles.bottomHeroPrimaryBtn}>
                Build my plan
              </button>
            </div>
          </div>

          <div className={styles.bottomHeroAside}>
            <p className={styles.bottomHeroEyebrow}>This week</p>
            <div className={styles.bottomHeroMetric}>
              <strong>3 focused sessions</strong>
              <span>Course, role, and practice rhythm</span>
            </div>
            <Link href="/progress" className={styles.bottomHeroAsideLink}>
              Open progress
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
