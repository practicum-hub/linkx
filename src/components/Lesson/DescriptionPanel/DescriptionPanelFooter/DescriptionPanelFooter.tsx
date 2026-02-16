import Image from "next/image";
import styles from "./descriptionPanelFooter.module.css";

export default function DescriptionPanelFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <Image
            className={styles.img}
            src="/icons/question.png"
            alt="Question Mark"
            width={15}
            height={15}
          />
          <span className={styles.btnText}>Help</span>
        </button>
        <button className={styles.btn}>
          <Image
            className={styles.img}
            src="/icons/bug.png"
            alt="Bug"
            width={15}
            height={15}
          />
          <span className={styles.btnText}>Report</span>
        </button>
      </div>

      <p className={styles.date}>Last saved: Just now</p>
    </footer>
  );
}
