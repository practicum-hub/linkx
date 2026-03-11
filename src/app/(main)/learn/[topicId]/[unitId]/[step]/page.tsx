"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import CourseOutlineModal from "@/components/pages/Learn/CourseOutlineModal";
import LearnHeader from "@/components/pages/Learn/LearnHeader";
import PracticeView from "@/components/pages/Learn/PracticeView";
import TheoryView from "@/components/pages/Learn/TheoryView";
import { getUnitLessons } from "@/lib/learn/lessons";
import { getLearnSession } from "@/lib/learn/session";
import { useAppTheme } from "@/components/providers/ThemeProvider";
import styles from "../../../page.module.css";

export default function LearnStepPage() {
  const params = useParams<{ topicId: string; unitId: string; step: string }>();
  const [isOutlineOpen, setIsOutlineOpen] = useState(false);
  const { isDark } = useAppTheme();

  const { safeStep, total, lesson, selectedTopic, selectedUnit, nextHref, prevHref } =
    getLearnSession({
      topicId: params.topicId ?? "foundations",
      unitId: params.unitId ?? "f-u1",
      step: params.step ?? "1",
    });
  const theoryDoneHref = safeStep >= total ? "/practice" : nextHref;

  const completedSet = new Set(selectedTopic.completed);
  const lessonProgressSegments = selectedTopic.units.flatMap((unit) => {
    const unitLessons = getUnitLessons(unit);
    const isCompleted = completedSet.has(unit.id);

    return unitLessons.map((unitLesson, lessonIndex) => ({
      key: `${unit.id}-${unitLesson.id}`,
      isDone: isCompleted || (unit.id === selectedUnit.id && lessonIndex < safeStep - 1),
      isCurrent: unit.id === selectedUnit.id && lessonIndex === safeStep - 1,
    }));
  });
  const outlineChapters = selectedTopic.units.map((unit, unitIndex) => {
    const unitLessons = getUnitLessons(unit);
    const isCompleted = completedSet.has(unit.id);
    const isUnlocked = isCompleted || unit.requires.every((requiredId) => completedSet.has(requiredId));

    const progress = isCompleted
      ? 100
      : unit.id === selectedUnit.id
      ? Math.round((safeStep / Math.max(1, total)) * 100)
      : 0;

    return {
      id: unit.id,
      order: unitIndex + 1,
      title: unit.title,
      progress,
      lessons: unitLessons.map((unitLesson, lessonIndex) => ({
        id: unitLesson.id,
        title: unitLesson.title,
        href: `/learn/${selectedTopic.id}/${unit.id}/${lessonIndex + 1}`,
        xp: unitLesson.type === "practice" ? 100 : 50,
        kind: unitLesson.type,
        isCurrent: unit.id === selectedUnit.id && lessonIndex === safeStep - 1,
        isDone: isCompleted || (unit.id === selectedUnit.id && lessonIndex < safeStep - 1),
        isLocked: !isUnlocked,
      })),
    };
  });

  return (
    <div className={`${styles.page} ${isDark ? styles.pageDark : ""}`}>
      <LearnHeader
        prevHref={prevHref}
        nextHref={nextHref}
        canGoPrev={safeStep > 1}
        canGoNext={safeStep < total}
        isOutlineOpen={isOutlineOpen}
        onOpenOutline={() => setIsOutlineOpen(true)}
      />

      <main className={styles.content}>
        <section className={styles.lessonHeading}>
          <h1 className={styles.title}>{lesson.title}</h1>
        </section>

        {lesson.type === "theory" ? (
          <TheoryView lesson={lesson} nextHref={theoryDoneHref} />
        ) : (
          <PracticeView lesson={lesson} isDark={isDark} nextHref={theoryDoneHref} />
        )}
      </main>

      <div className={styles.topicProgressWrap} aria-label="Topic progress">
        <div className={styles.topicProgressRail}>
          {lessonProgressSegments.map((segment) => {
            return (
              <span
                key={segment.key}
                className={`${styles.topicProgressSegment} ${segment.isDone ? styles.topicProgressSegmentDone : ""} ${
                  segment.isCurrent ? styles.topicProgressSegmentCurrent : ""
                }`}
              />
            );
          })}
        </div>
      </div>

      <CourseOutlineModal
        isOpen={isOutlineOpen}
        title={selectedTopic.title}
        chapters={outlineChapters}
        onClose={() => setIsOutlineOpen(false)}
      />
    </div>
  );
}
