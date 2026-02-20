"use client";

import Image from "next/image";
import styles from "./codePanelHeader.module.css";
import { useLessonStore } from "@/store";

export default function CodePanelHeader() {
  const { runCode, setUserInput, isExecuting } = useLessonStore();

  const handleCheck = () => {
    if (!isExecuting) {
      runCode("1");
    }
  };

  const handleSubmit = () => {
    if (!isExecuting) {
      runCode("1");
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.langBadge}>
        <Image
          className={styles.langIcon}
          src="/icons/typescript.png"
          alt="language"
          width={16}
          height={16}
        />
        <span className={styles.lang}>TypeScript 5.0</span>
      </div>

      <button className={styles.reloadBtn} onClick={() => setUserInput("")} aria-label="Clear editor">
        <Image className={styles.reloadIcon} src="/icons/reload.png" alt="Reload" width={18} height={18} />
        <span>Reset</span>
      </button>

      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.checkBtn}`} onClick={handleCheck} disabled={isExecuting}>
          <Image
            className={styles.btnImg}
            src="/icons/run.png"
            alt="Check"
            width={14}
            height={14}
          />
          <span className={styles.btnText}>{isExecuting ? "Checking..." : "Check"}</span>
        </button>
        <button className={`${styles.btn} ${styles.submitBtn}`} onClick={handleSubmit} disabled={isExecuting}>
          <Image
            className={styles.btnImg}
            src="/icons/submit.png"
            alt="Submit"
            width={14}
            height={14}
          />
          <span className={styles.btnText}>{isExecuting ? "Submitting..." : "Submit"}</span>
        </button>
      </div>
    </header>
  );
}
