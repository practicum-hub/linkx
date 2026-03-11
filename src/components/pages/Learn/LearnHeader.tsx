import Link from "next/link";
import {
  FaBars,
  FaArrowRightFromBracket,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaTrophy,
  FaFileLines,
  FaMobileScreenButton,
  FaTriangleExclamation,
} from "react-icons/fa6";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  prevHref: string;
  nextHref: string;
  canGoPrev: boolean;
  canGoNext: boolean;
  isOutlineOpen: boolean;
  onOpenOutline: () => void;
};

export default function LearnHeader({
  prevHref,
  nextHref,
  canGoPrev,
  canGoNext,
  isOutlineOpen,
  onOpenOutline,
}: Props) {
  return (
    <header className={styles.learnHeader}>
      <div className={styles.headerPath}>
        <Link href="/practice" className={styles.exitBtn}>
          <FaArrowRightFromBracket aria-hidden="true" />
          <span>Exit</span>
        </Link>
      </div>

      <div className={styles.outlineNav}>
        <Link
          href={prevHref}
          className={`${styles.outlineArrow} ${!canGoPrev ? styles.navBtnDisabled : ""}`}
          aria-label="Previous lesson"
          aria-disabled={!canGoPrev}
          tabIndex={!canGoPrev ? -1 : undefined}
        >
          <FaChevronLeft aria-hidden="true" />
        </Link>
        <button
          type="button"
          className={styles.outlineBtn}
          onClick={onOpenOutline}
          aria-haspopup="dialog"
          aria-expanded={isOutlineOpen}
        >
          <FaBars aria-hidden="true" />
          <span>Course Outline</span>
        </button>
        <Link
          href={nextHref}
          className={`${styles.outlineArrow} ${!canGoNext ? styles.navBtnDisabled : ""}`}
          aria-label="Next lesson"
          aria-disabled={!canGoNext}
          tabIndex={!canGoNext ? -1 : undefined}
        >
          <FaChevronRight aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.headerActions}>
        <div className={styles.xp}>
          <FaTrophy aria-hidden="true" />
          <span>Daily XP 0</span>
        </div>
        <button type="button" className={styles.localeBtn}>
          <FaGlobe aria-hidden="true" />
          <span>EN</span>
        </button>
        <button type="button" className={styles.iconBtn} aria-label="Documents">
          <FaFileLines aria-hidden="true" />
        </button>
        <button type="button" className={styles.iconBtn} aria-label="Mobile view">
          <FaMobileScreenButton aria-hidden="true" />
        </button>
        <button type="button" className={styles.iconBtn} aria-label="Warnings">
          <FaTriangleExclamation aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
