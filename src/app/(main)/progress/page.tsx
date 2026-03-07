import Link from "next/link";
import {
  FaArrowRight,
  FaBolt,
  FaBrain,
  FaCheck,
  FaClock,
  FaFlask,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa6";
import styles from "./page.module.css";

type ProgressCourse = {
  title: string;
  percent?: number;
  tag?: string;
  practice?: boolean;
  complete?: boolean;
};

const progressCourses: ProgressCourse[] = [
  { title: "Introduction to SQL", percent: 6, tag: "AI Native" },
  { title: "Understanding Cloud Computing", percent: 31, practice: true },
  { title: "Prompt Engineering with the OpenAI API", percent: 15, practice: true },
  { title: "Working with the OpenAI API", complete: true },
];

export default function ProgressPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.overview}>
          <div className={styles.userBlock}>
            <div className={styles.avatar}>A</div>
            <div>
              <h1 className={styles.title}>Hey, Anton!</h1>
              <p className={styles.subtitle}>
                Portfolio 25% complete <FaArrowRight aria-hidden="true" />
              </p>
              <div className={styles.subtitleProgress}>
                <div className={styles.subtitleProgressFill} />
              </div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.statPill}>
              <span className={styles.statIconReview}>
                <FaBolt aria-hidden="true" />
              </span>
              <span>Review</span>
              <span className={styles.statBadge}>1</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statIconStreak}>
                <FaBolt aria-hidden="true" />
              </span>
              <span>Daily Streak</span>
              <span className={styles.statBadge}>0</span>
            </div>
          </div>
        </section>

        <p className={styles.enrolled}>
          You&apos;re enrolled in the <Link href="/careers">Associate Data Analyst in SQL</Link>{" "}
          track.
        </p>

        <section className={styles.mainCard}>
          <div className={styles.mainTop}>
            <div className={styles.mainLesson}>
              <span className={styles.lessonIcon}>
                <FaBrain aria-hidden="true" />
              </span>
              <div>
                <p className={styles.kicker}>Learn</p>
                <h2 className={styles.lessonTitle}>
                  Introduction to SQL <FaArrowRight aria-hidden="true" />
                </h2>
                <p className={styles.lessonMeta}>
                  <FaClock aria-hidden="true" /> 2 hr to go
                </p>
              </div>
            </div>
            <button type="button" className={styles.primaryBtn}>
              Let&apos;s Do This
            </button>
          </div>

          <div className={styles.mainBottom}>
            <div>
              <p className={styles.know}>Already know this?</p>
              <p className={styles.metaText}>
                Take an assessment to verify your skill level and skip this course.
              </p>
            </div>
            <button type="button" className={styles.ghostBtn}>
              Introduction to SQL <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </section>

        <section className={styles.twoCol}>
          <article className={styles.smallCard}>
            <div className={styles.smallIconOrange}>
              <FaBolt aria-hidden="true" />
            </div>
            <div className={styles.smallBody}>
              <p className={styles.kicker}>Practice</p>
              <h3>Working with the OpenAI API</h3>
            </div>
            <FaArrowRight className={styles.chevron} aria-hidden="true" />
          </article>

          <article className={styles.smallCard}>
            <div className={styles.smallIconPink}>
              <FaGraduationCap aria-hidden="true" />
            </div>
            <div className={styles.smallBody}>
              <p className={styles.kicker}>Apply</p>
              <h3>Analyzing Students&apos; Mental Health</h3>
            </div>
            <FaArrowRight className={styles.chevron} aria-hidden="true" />
          </article>
        </section>

        <section className={styles.banner}>
          <button type="button" className={styles.closeBanner} aria-label="Close banner">
            ×
          </button>
          <div>
            <p className={styles.bannerLabel}>Build data + AI skills</p>
            <p className={styles.bannerText}>Don&apos;t compromise. Get unlimited learning.</p>
          </div>
          <button type="button" className={styles.bannerBtn}>
            Buy Now
          </button>
        </section>

        <section className={styles.pickup}>
          <div className={styles.pickupHeader}>
            <h2>
              <FaRocket aria-hidden="true" /> Pick up where you left off
            </h2>
            <Link href="/library">See All in My Library</Link>
          </div>

          <div className={styles.courseList}>
            {progressCourses.map((course) => (
              <article className={styles.courseRow} key={course.title}>
                <div className={styles.courseInfo}>
                  <div className={styles.courseIcon}>SQL</div>
                  <div className={styles.courseBody}>
                    <p className={styles.courseLabel}>
                      Course
                      {course.tag ? <span className={styles.tag}>{course.tag}</span> : null}
                    </p>
                    <h3>{course.title}</h3>
                    {course.complete ? (
                      <p className={styles.complete}>
                        <FaCheck aria-hidden="true" /> Complete
                      </p>
                    ) : (
                      <div className={styles.progressWrap}>
                        <div className={styles.progressTrack}>
                          <div
                            className={styles.progressFill}
                            style={{ width: `${course.percent ?? 0}%` }}
                          />
                        </div>
                        <span>{course.percent}%</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles.actions}>
                  {course.practice ? (
                    <button type="button" className={styles.practiceBtn}>
                      <FaFlask aria-hidden="true" /> Practice
                    </button>
                  ) : null}
                  <button type="button" className={styles.continueBtn}>
                    {course.complete ? "Accomplishment" : "Continue"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
