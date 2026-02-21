import Link from "next/link";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  progress: number;
  safeStep: number;
  total: number;
};

export default function LearnHeader({ progress, safeStep, total }: Props) {
  return (
    <header className={styles.learnHeader}>
      <Link href="/practice?roadmap=algorithms-zero-to-hero" className={styles.exitBtn}>
        Exit
      </Link>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.counter}>
        {safeStep}/{total}
      </div>
    </header>
  );
}
