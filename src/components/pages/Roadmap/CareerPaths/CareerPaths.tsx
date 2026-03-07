"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

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
    if (variant === "explore") {
      return careerPaths;
    }

    if (!hasHiddenCareers) {
      return careerPaths;
    }

    return careerPaths.slice(0, maxVisibleCareers);
  }, [hasHiddenCareers, maxVisibleCareers, variant]);

  const scrollSlider = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) {
      return;
    }

    const step = Math.max(280, Math.round(slider.clientWidth * 0.82));
    slider.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLUListElement>) => {
    if (variant !== "explore") {
      return;
    }

    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = event.currentTarget.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    if (!isDraggingRef.current || variant !== "explore") {
      return;
    }

    const delta = event.clientX - dragStartXRef.current;
    if (Math.abs(delta) > 6) {
      didDragRef.current = true;
    }
    event.currentTarget.scrollLeft = dragStartScrollRef.current - delta;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLUListElement>) => {
    if (variant !== "explore") {
      return;
    }

    isDraggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleClickCapture = (event: React.MouseEvent<HTMLUListElement>) => {
    if (!didDragRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    didDragRef.current = false;
  };

  const handleWheel = (event: React.WheelEvent<HTMLUListElement>) => {
    if (variant !== "explore") {
      return;
    }

    const slider = event.currentTarget;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
      return;
    }

    event.preventDefault();
    slider.scrollLeft += event.deltaY;
  };

  return (
    <div
      className={`${styles.wrapper} ${variant === "explore" ? styles.wrapperExplore : ""}`}
      id="careers"
    >
      <div className={styles.header}>
        <TextBlock title={title} desc={desc} />
        <div className={styles.headerActions}>
          {showAllHref ? (
            <Link
              className={`${styles.showAll} ${variant === "explore" ? styles.showAllExplore : ""}`}
              href={showAllHref}
            >
              {showAllLabel}
            </Link>
          ) : null}
        </div>
      </div>

      <div
        className={`${styles.cardsViewport} ${
          hasHiddenCareers ? styles.cardsViewportFaded : ""
        } ${variant === "explore" ? styles.cardsViewportExplore : ""}`}
      >
        {variant === "explore" ? (
          <button
            type="button"
            className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
            onClick={() => scrollSlider("left")}
            aria-label="Scroll career paths left"
          >
            ←
          </button>
        ) : null}
        <ul
          ref={variant === "explore" ? sliderRef : null}
          className={`${styles.cards} ${variant === "explore" ? styles.cardsExplore : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onWheel={handleWheel}
          onClickCapture={handleClickCapture}
        >
          {visibleCareers.map((path) => (
            <CareerCard key={path.title} {...path} variant={variant} />
          ))}
        </ul>
        {variant === "explore" ? (
          <button
            type="button"
            className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
            onClick={() => scrollSlider("right")}
            aria-label="Scroll career paths right"
          >
            →
          </button>
        ) : null}
      </div>
    </div>
  );
}
