import Link from "next/link";
import styles from "@/app/(main)/learn/page.module.css";
import type { LessonMode } from "@/lib/learn/session";

type Props = {
  mode: LessonMode;
  safeStep: number;
  total: number;
  isChecked: boolean;
  prevHref: string;
  nextHref: string;
  onCheck: () => void;
};

export default function LearnFooterNav({ mode, safeStep, total, isChecked, prevHref, nextHref, onCheck }: Props) {
  return (
    <div className={styles.footerNav}>
      <Link
        href={prevHref}
        className={`${styles.navBtn} ${safeStep === 1 ? styles.navBtnDisabled : ""}`}
        aria-disabled={safeStep === 1}
        tabIndex={safeStep === 1 ? -1 : undefined}
      >
        Previous
      </Link>

      {mode === "practice" ? (
        <button className={styles.checkBtn} onClick={onCheck}>
          Check
        </button>
      ) : null}

      <Link
        href={nextHref}
        className={`${styles.navBtnPrimary} ${mode === "practice" && !isChecked ? styles.navBtnDisabled : ""}`}
        aria-disabled={mode === "practice" && !isChecked}
        tabIndex={mode === "practice" && !isChecked ? -1 : undefined}
      >
        {safeStep === total ? "Finish" : "Continue"}
      </Link>
    </div>
  );
}
