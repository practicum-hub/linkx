"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./career.module.css";

import TextBlock from "../TextBlock/TextBlock";
import CareerCard from "./CareerCard/CareerCard";
import { careerPaths } from "@/data/mocks/roadmap/careerPaths";

export default function CareerPaths() {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth <= 700) {
        setColumns(1);
        return;
      }

      if (window.innerWidth <= 1050) {
        setColumns(2);
        return;
      }

      if (window.innerWidth <= 1450) {
        setColumns(3);
        return;
      }

      setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const maxVisibleCareers = columns * 2;
  const hasHiddenCareers = careerPaths.length > maxVisibleCareers;
  const visibleCareers = useMemo(() => {
    if (!hasHiddenCareers) {
      return careerPaths;
    }

    return careerPaths.slice(0, maxVisibleCareers);
  }, [hasHiddenCareers, maxVisibleCareers]);

  return (
    <div className={styles.wrapper} id="careers">
      <TextBlock
        title="Career Paths"
        desc="Structured roadmaps for specific job roles with clear outcomes."
      />

      <div className={`${styles.cardsViewport} ${hasHiddenCareers ? styles.cardsViewportFaded : ""}`}>
        <ul className={styles.cards}>
          {visibleCareers.map((path) => (
            <CareerCard key={path.title} {...path} />
          ))}
        </ul>
      </div>

      {hasHiddenCareers ? (
        <Link className={styles.showAll} href="/career-paths">
          Show all
        </Link>
      ) : null}
    </div>
  );
}
