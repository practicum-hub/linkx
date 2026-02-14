"use client";

import { useLessonStore } from "@/store";
import styles from "./lessonFooter.module.css";

type Props = {
  exerciseId: number;
};

export default function LessonFooter({ exerciseId }: Props) {
  const check = useLessonStore((s) => s.check);
  const next = useLessonStore((s) => s.next);

  const handleCheck = () => {
    check(exerciseId);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.buttons}>
        <button className={styles.btn}>Skip</button>
        <button className={styles.btn} onClick={handleCheck}>
          Check
        </button>
      </div>
    </footer>
  );
}
