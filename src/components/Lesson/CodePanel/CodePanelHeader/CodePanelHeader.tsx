"use client";

import Image from "next/image";
import styles from "./codePanelHeader.module.css";
import { useLessonStore } from "@/store";

export default function CodePanelHeader() {
  const { runCode } = useLessonStore();

  return (
    <header className={styles.header}>
      <div className={styles.dropdown}>
        <Image
          className={styles.langIcon}
          src="/icons/typescript.png"
          alt="language"
          width={15}
          height={15}
        />
        <span className={styles.lang}>TypeScript</span>
        <Image
          className={styles.arrow}
          src="/icons/arrow-down.png"
          alt="Arrow"
          width={15}
          height={15}
        />
      </div>

      <Image
        className={styles.reloadIcon}
        src="/icons/reload.png"
        alt="Reload"
        width={20}
        height={20}
      />

      <div className={styles.buttons}>
        <button className={styles.btn} onClick={() => runCode("1")}>
          <Image
            className={styles.btnImg}
            src="/icons/run.png"
            alt="Run"
            width={15}
            height={15}
          />
          <span className={styles.btnText}>Run</span>
        </button>
        <button className={styles.btn}>
          <Image
            className={styles.btnImg}
            src="/icons/submit.png"
            alt="Submit"
            width={15}
            height={15}
          />
          <span className={styles.btnText}>Submit</span>
        </button>
      </div>
    </header>
  );
}
