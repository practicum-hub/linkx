"use client";

import { useState } from "react";
import Link from "next/link";
import { courseCatalog } from "@/data/courses/catalog";
import styles from "./page.module.css";

const tags = [
  "All",
  "Python",
  "SQL",
  "R",
  "Power BI",
  "Tableau",
  "Alteryx",
  "Excel",
  "Google Sheets",
  "ChatGPT",
  "Gemini",
  "PyTorch",
  "OpenAI",
  "AWS",
  "Azure",
  "Snowflake",
  "Databricks",
  "Git",
  "Docker",
  "Shell",
  "Kubernetes",
  "Airflow",
  "Spark",
  "+20",
];

export default function CoursesPage() {
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleCourses = courseCatalog.slice(0, visibleCount);
  const hasMoreCourses = visibleCount < courseCatalog.length;

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
        </section>

        <section className={styles.discoveryPanel}>
          <div className={styles.tagList}>
            {tags.map((tag, index) => (
              <button
                key={tag}
                type="button"
                className={`${styles.tag} ${index === 0 ? styles.tagActive : ""} ${
                  tag.startsWith("+") ? styles.tagMore : ""
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className={styles.toolbar}>
            <p className={styles.toolbarTitle}>
              <strong>{courseCatalog.length}</strong> Courses
            </p>
            <div className={styles.controls}>
              <label className={styles.searchWrap}>
                <span className={styles.searchIcon} aria-hidden="true" />
                <input className={styles.search} placeholder="Search courses..." />
              </label>

              <button type="button" className={styles.moreFiltersBtn}>
                <span className={styles.moreFiltersIcon} aria-hidden="true" />
                <span>More filters</span>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {visibleCourses.map((course) => (
            <article className={styles.card} key={course.title}>
              <div className={styles.cardContent}>
                <p className={styles.cardLabel}>Course</p>
                <h2 className={styles.cardTitle}>{course.title}</h2>
                <p className={styles.cardDesc}>{course.description}</p>
                <p className={styles.authors}>{course.authors.join(" / ")}</p>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.footerProgress}>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${course.progress}%` }} />
                  </div>
                  <span className={styles.percent}>{course.progress}%</span>
                </div>
                <div className={styles.bottomRow}>
                  <Link href={`/courses/${course.slug}`} className={styles.actionBtn}>
                    {course.actionLabel}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {hasMoreCourses ? (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((count) => count + 4)}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
