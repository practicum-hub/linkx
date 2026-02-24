import Link from "next/link";
import styles from "./page.module.css";

type CourseItem = {
  title: string;
  level: "Basic" | "Intermediate";
  description: string;
  authors: string[];
  progress: number;
  actionLabel: string;
};

const tags = [
  "All",
  "Python",
  "SQL",
  "R",
  "Power BI",
  "Tableau",
  "Excel",
  "Google Sheets",
  "ChatGPT",
  "OpenAI",
  "AWS",
  "Azure",
  "Databricks",
  "Git",
  "Docker",
];

const courses: CourseItem[] = [
  {
    title: "Prompt Engineering with the OpenAI API",
    level: "Basic",
    description:
      "Dive deep into prompt design and best practices to solve practical business and product tasks.",
    authors: ["Fouad Trad"],
    progress: 15,
    actionLabel: "Continue",
  },
  {
    title: "Understanding Cloud Computing",
    level: "Basic",
    description:
      "A non-coding introduction to cloud terminology, core concepts, and platform capabilities.",
    authors: ["Sara Billen", "Lis Sulmont"],
    progress: 31,
    actionLabel: "Continue",
  },
  {
    title: "Working with the OpenAI API",
    level: "Basic",
    description:
      "Build your first AI-powered workflows with the OpenAI API and learn key integration patterns.",
    authors: ["James Chapman", "Eduardo Oliveira"],
    progress: 100,
    actionLabel: "View accomplishment",
  },
  {
    title: "Introduction to Python",
    level: "Basic",
    description:
      "Master the foundations of Python syntax, data structures, and practical scripting.",
    authors: ["Anton Volkov"],
    progress: 44,
    actionLabel: "Continue",
  },
  {
    title: "Introduction to Power BI",
    level: "Basic",
    description:
      "Learn how to prepare datasets, build dashboards, and communicate insights with Power BI.",
    authors: ["Olivia Turner"],
    progress: 8,
    actionLabel: "Start",
  },
  {
    title: "Understanding Prompt Engineering",
    level: "Intermediate",
    description:
      "Design robust prompt workflows, evaluations, and iteration loops for production tasks.",
    authors: ["Max Campbell"],
    progress: 0,
    actionLabel: "Start",
  },
];

export default function CoursesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Courses</h1>
            <p className={styles.subtitle}>
              It&apos;s time to roll up your sleeves. All courses are interactive and mix short
              theory with hands-on exercises.
            </p>
          </div>
          <div className={styles.heroBadge}>Hands-on learning</div>
        </section>

        <div className={styles.tagList}>
          {tags.map((tag, index) => (
            <button
              key={tag}
              type="button"
              className={`${styles.tag} ${index === 0 ? styles.tagActive : ""}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={styles.toolbar}>
          <p className={styles.toolbarTitle}>Courses</p>
          <div className={styles.controls}>
            <label className={styles.searchWrap}>
              <span className={styles.searchIcon} aria-hidden="true">
                ⌕
              </span>
              <input className={styles.search} placeholder="Search courses..." />
            </label>
            <button type="button" className={styles.filterBtn}>
              Topic
            </button>
          </div>
        </div>

        <section className={styles.grid}>
          {courses.map((course) => (
            <article className={styles.card} key={course.title}>
              <p className={styles.cardLabel}>Course</p>
              <h2 className={styles.cardTitle}>{course.title}</h2>
              <p className={styles.cardLevel}>{course.level}</p>
              <p className={styles.cardDesc}>{course.description}</p>
              <p className={styles.authors}>{course.authors.join(" · ")}</p>

              <div className={styles.cardBottom}>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${course.progress}%` }} />
                </div>
                <div className={styles.bottomRow}>
                  <span className={styles.percent}>{course.progress}%</span>
                  <Link href="/learn" className={styles.actionBtn}>
                    {course.actionLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
