"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ExerciseRail from "@/components/pages/Learn/ExerciseRail";
import LearnFooterNav from "@/components/pages/Learn/LearnFooterNav";
import LearnHeader from "@/components/pages/Learn/LearnHeader";
import PracticeView from "@/components/pages/Learn/PracticeView";
import TheoryView from "@/components/pages/Learn/TheoryView";
import { getLearnSession } from "@/lib/learn/session";
import { useAppTheme } from "@/components/providers/ThemeProvider";
import styles from "./page.module.css";

export default function Learn() {
  const searchParams = useSearchParams();
  const [isChecked, setIsChecked] = useState(false);
  const { isDark } = useAppTheme();

  const { mode, safeStep, total, progress, exerciseIndex, lesson, selectedTopic, selectedUnit, nextHref, prevHref } =
    getLearnSession({
      topicFromQuery: searchParams.get("topic") ?? "foundations",
      unitFromQuery: searchParams.get("unit") ?? "f-u1",
      stepFromQuery: searchParams.get("step") ?? "1",
      modeFromQuery: searchParams.get("mode"),
    });

  return (
    <div className={`${styles.page} ${isDark ? styles.pageDark : ""}`}>
      <LearnHeader progress={progress} safeStep={safeStep} total={total} />

      <main className={styles.content}>
        <div className={styles.lessonHeading}>
          <p className={styles.meta}>
            {selectedTopic.title} / {selectedUnit.title} / Exercise {exerciseIndex + 1}
          </p>
          <h1 className={styles.title}>{lesson.title}</h1>
          <p className={styles.modeTag}>{mode === "theory" ? "Theory Exercise" : "Practice Exercise"}</p>
        </div>

        {mode === "theory" ? <TheoryView lesson={lesson} /> : <PracticeView lesson={lesson} isDark={isDark} />}

        <LearnFooterNav
          mode={mode}
          safeStep={safeStep}
          total={total}
          isChecked={isChecked}
          prevHref={prevHref}
          nextHref={nextHref}
          onCheck={() => setIsChecked(true)}
        />

        <ExerciseRail total={total} safeStep={safeStep} />

        {mode === "practice" && isChecked ? (
          <p className={styles.checkStatus}>Checks passed. You can continue to the next exercise.</p>
        ) : null}
      </main>
    </div>
  );
}
