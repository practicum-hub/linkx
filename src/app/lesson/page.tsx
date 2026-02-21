"use client";

import styles from "./page.module.css";
import LessonHeader from "@/components/Lesson/LessonHeader/LessonHeader";
import DescriptionPanel from "@/components/Lesson/DescriptionPanel/DescriptionPanel";
import CodePanel from "@/components/Lesson/CodePanel/CodePanel";
import { useAppTheme } from "@/components/providers/ThemeProvider";

export default function Lesson() {
  const { isDark } = useAppTheme();

  return (
    <div className={styles.page}>
      <LessonHeader />
      <div className={styles.panels}>
        <DescriptionPanel />
        <CodePanel isDark={isDark} />
      </div>
    </div>
  );
}
