"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import TextBlock from "../TextBlock/TextBlock";
import Course from "./Course/Course";
import styles from "./courses.module.css";
import { roadmapCourses } from "@/data/mocks/roadmap/courses";

type Props = {
  maxItems?: number;
  title?: string;
  desc?: string;
  showAllHref?: string;
  showAllLabel?: string;
  variant?: "default" | "explore";
};

export default function Courses({
  maxItems,
  title = "Pick a Course",
  desc = "Start your journey from zero to hero with curated, practical tracks.",
  showAllHref,
  showAllLabel = "See all",
  variant = "default",
}: Props) {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth <= 700) {
        setColumns(1);
        return;
      }

      if (window.innerWidth <= 1200) {
        setColumns(2);
        return;
      }

      if (window.innerWidth <= 1650) {
        setColumns(3);
        return;
      }

      setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const maxVisibleCourses = maxItems ?? columns * 2;
  const hasHiddenCourses = roadmapCourses.length > maxVisibleCourses;
  const visibleCourses = useMemo(() => {
    if (!hasHiddenCourses) {
      return roadmapCourses;
    }

    return roadmapCourses.slice(0, maxVisibleCourses);
  }, [hasHiddenCourses, maxVisibleCourses]);

  return (
    <div className={`${styles.wrapper} ${variant === "explore" ? styles.wrapperExplore : ""}`}>
      <div className={styles.header}>
        <TextBlock title={title} desc={desc} />
        {showAllHref ? (
          <Link
            className={`${styles.showAll} ${variant === "explore" ? styles.showAllExplore : ""}`}
            href={showAllHref}
          >
            {showAllLabel}
          </Link>
        ) : null}
      </div>

      <div
        className={`${styles.coursesViewport} ${
          hasHiddenCourses ? styles.coursesViewportFaded : ""
        } ${variant === "explore" ? styles.coursesViewportExplore : ""}`}
      >
        <ul className={`${styles.courses} ${variant === "explore" ? styles.coursesExplore : ""}`}>
          {visibleCourses.map((course) => (
            <Course key={course.title} {...course} variant={variant} />
          ))}
        </ul>
      </div>

      {variant === "explore" && showAllHref ? (
        <div className={styles.bottomAction}>
          <Link className={styles.bottomActionBtn} href={showAllHref}>
            Search for all
          </Link>
        </div>
      ) : null}
    </div>
  );
}
