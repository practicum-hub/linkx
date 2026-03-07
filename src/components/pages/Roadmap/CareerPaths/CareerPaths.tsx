"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./career.module.css";

import TextBlock from "../TextBlock/TextBlock";
import CareerCard from "./CareerCard/CareerCard";
import { careerPaths } from "@/data/mocks/roadmap/careerPaths";

type Props = {
  maxItems?: number;
  title?: string;
  desc?: string;
  showAllHref?: string;
  showAllLabel?: string;
  variant?: "default" | "explore";
};

export default function CareerPaths({
  maxItems,
  title = "Career Paths",
  desc = "Structured roadmaps for specific job roles with clear outcomes.",
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

  const maxVisibleCareers = maxItems ?? columns * 2;
  const hasHiddenCareers = careerPaths.length > maxVisibleCareers;
  const visibleCareers = useMemo(() => {
    if (!hasHiddenCareers) {
      return careerPaths;
    }

    return careerPaths.slice(0, maxVisibleCareers);
  }, [hasHiddenCareers, maxVisibleCareers]);

  return (
    <div
      className={`${styles.wrapper} ${variant === "explore" ? styles.wrapperExplore : ""}`}
      id="careers"
    >
      <div className={styles.header}>
        <TextBlock title={title} desc={desc} />
        {showAllHref ? (
          <Link className={styles.showAll} href={showAllHref}>
            {showAllLabel}
          </Link>
        ) : null}
      </div>

      <div
        className={`${styles.cardsViewport} ${
          hasHiddenCareers ? styles.cardsViewportFaded : ""
        } ${variant === "explore" ? styles.cardsViewportExplore : ""}`}
      >
        <ul className={`${styles.cards} ${variant === "explore" ? styles.cardsExplore : ""}`}>
          {visibleCareers.map((path) => (
            <CareerCard key={path.title} {...path} variant={variant} />
          ))}
        </ul>
      </div>
    </div>
  );
}
