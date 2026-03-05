"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import styles from "@/app/(main)/learn/page.module.css";

type OutlineLesson = {
  id: string;
  title: string;
  href: string;
  xp: number;
  kind: "theory" | "practice";
  isCurrent: boolean;
  isDone: boolean;
  isLocked: boolean;
};

type OutlineChapter = {
  id: string;
  order: number;
  title: string;
  progress: number;
  lessons: OutlineLesson[];
};

type Props = {
  isOpen: boolean;
  title: string;
  chapters: OutlineChapter[];
  onClose: () => void;
};

export default function CourseOutlineModal({ isOpen, title, chapters, onClose }: Props) {
  const currentLessonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    currentLessonRef.current?.scrollIntoView({ block: "center" });
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.outlineOverlay} role="dialog" aria-modal="true" aria-label="Course Outline">
      <div className={styles.outlineBackdrop} onClick={onClose} />
      <div className={styles.outlineModal}>
        <header className={styles.outlineModalHeader}>
          <h2>{title}</h2>
          <button type="button" className={styles.outlineCloseBtn} onClick={onClose} aria-label="Close outline">
            <FaXmark aria-hidden="true" />
          </button>
        </header>

        <div className={styles.outlineModalBody}>
          {chapters.map((chapter) => (
            <section key={chapter.id} className={styles.outlineChapter}>
              <div className={styles.outlineChapterHead}>
                <div className={styles.outlineChapterTitleWrap}>
                  <span className={styles.outlineChapterIndex}>{chapter.order}</span>
                  <h3>{chapter.title}</h3>
                </div>
                <div className={styles.outlineChapterProgress}>
                  <div className={styles.outlineChapterProgressBar}>
                    <span style={{ width: `${chapter.progress}%` }} />
                  </div>
                  <strong>{chapter.progress}%</strong>
                </div>
              </div>

              <ul className={styles.outlineLessonList}>
                {chapter.lessons.map((lesson) => {
                  const rowClass = `${styles.outlineLessonRow} ${lesson.isCurrent ? styles.outlineLessonRowCurrent : ""} ${
                    lesson.isLocked ? styles.outlineLessonRowLocked : ""
                  }`;

                  if (lesson.isLocked) {
                    return (
                      <li key={lesson.id} className={rowClass}>
                        <span className={styles.outlineLessonIcon} data-kind={lesson.kind} aria-hidden="true" />
                        <span className={styles.outlineLessonTitle}>{lesson.title}</span>
                        <span className={styles.outlineLessonMeta}>
                          <span className={styles.outlineLessonXp}>{lesson.xp} XP</span>
                        </span>
                      </li>
                    );
                  }

                  return (
                    <li key={lesson.id}>
                      <Link
                        href={lesson.href}
                        className={rowClass}
                        ref={lesson.isCurrent ? currentLessonRef : undefined}
                        onClick={onClose}
                      >
                        <span className={styles.outlineLessonIcon} data-kind={lesson.kind} aria-hidden="true" />
                        <span className={styles.outlineLessonTitle}>{lesson.title}</span>
                        <span className={styles.outlineLessonMeta}>
                          {lesson.isDone ? <FaCheck className={styles.outlineLessonCheck} aria-hidden="true" /> : null}
                          <span className={styles.outlineLessonXp}>{lesson.xp} XP</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
