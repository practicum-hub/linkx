"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { careerPaths } from "@/data/mocks/roadmap/careerPaths";
import styles from "../courses/page.module.css";

const tags = [
  "All",
  "AI",
  "Frontend",
  "Backend",
  "Data",
  "DevOps",
  "Robotics",
  "Embedded",
  "Energy",
  "Aerospace",
  "Climate Tech",
];

const progressByTitle: Record<string, number> = {
  "AI Engineer": 24,
  "Frontend Engineer": 61,
  "Backend Engineer": 38,
  "ML Engineer": 12,
  "DevOps Engineer": 47,
  "Data Engineer": 33,
  "Robotics Engineer": 8,
  "Embedded Systems Engineer": 19,
  "Electrical Engineer": 0,
  "Energy Systems Engineer": 14,
  "Aerospace Engineer": 5,
  "Industrial Automation Engineer": 22,
  "CAD / Mechanical Design Engineer": 41,
  "Supply Chain & Logistics Engineer": 29,
  "Smart Agriculture Engineer": 3,
  "Climate Tech Engineer": 11,
};

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredCareers = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return careerPaths;
    }

    return careerPaths.filter((career) =>
      [career.title, career.desc, career.duration, career.courses, career.salary, career.demand]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [searchQuery]);

  const visibleCareers = filteredCareers.slice(0, visibleCount);
  const hasMoreCareers = visibleCount < filteredCareers.length;

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Careers</h1>
            <p className={styles.subtitle}>
              Choose a role, follow a structured path, and build the skills employers actually
              expect for that career.
            </p>
          </div>
          <div className={styles.heroBadge}>Role-based paths</div>
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
          <p className={styles.toolbarTitle}>
            <strong>{filteredCareers.length}</strong> Career paths
          </p>
          <div className={styles.controls}>
            <label className={styles.searchWrap}>
              <span className={styles.searchIcon} aria-hidden="true" />
              <input
                className={styles.search}
                placeholder="Search career paths..."
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setVisibleCount(12);
                }}
              />
            </label>
            <button type="button" className={styles.filterBtn}>
              Domain
            </button>
          </div>
        </div>

        <section className={styles.grid}>
          {visibleCareers.map((career) => {
            const progress = progressByTitle[career.title] ?? 0;
            const actionLabel = progress > 0 ? "Continue path" : "Explore path";

            return (
              <article className={styles.card} key={career.title}>
                <p className={styles.cardLabel}>Career</p>
                <h2 className={styles.cardTitle}>{career.title}</h2>
                <p className={styles.cardLevel}>{career.duration}</p>
                <p className={styles.cardDesc}>{career.desc}</p>
                <p className={styles.authors}>
                  {career.courses} {" | "} {career.salary} {" | "} {career.demand}
                </p>

                <div className={styles.cardBottom}>
                  <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                  </div>
                  <div className={styles.bottomRow}>
                    <span className={styles.percent}>{progress}% matched</span>
                    <Link href={career.href} className={styles.actionBtn}>
                      {actionLabel}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {hasMoreCareers ? (
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
