"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import TextBlock from "../TextBlock/TextBlock";
import Course from "./Course/Course";
import styles from "./courses.module.css";
import { roadmapCourses } from "@/data/mocks/roadmap/courses";

export default function Courses() {
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

  const maxVisibleCourses = columns * 2;
  const hasHiddenCourses = roadmapCourses.length > maxVisibleCourses;
  const visibleCourses = useMemo(() => {
    if (!hasHiddenCourses) {
      return roadmapCourses;
    }

    return roadmapCourses.slice(0, maxVisibleCourses);
  }, [hasHiddenCourses, maxVisibleCourses]);

  return (
    <div className={styles.wrapper}>
      <TextBlock
        title="Pick a Course"
        desc="Start your journey from zero to hero with curated, practical tracks."
      />

      <div className={`${styles.coursesViewport} ${hasHiddenCourses ? styles.coursesViewportFaded : ""}`}>
        <ul className={styles.courses}>
          {visibleCourses.map((course) => (
            <Course key={course.title} {...course} />
          ))}
        </ul>
      </div>

      {hasHiddenCourses ? (
        <Link className={styles.showAll} href="/courses">
          Show all
        </Link>
      ) : null}
    </div>
  );
}
