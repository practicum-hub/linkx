import Image from "next/image";
import styles from "./roadmapHeader.module.css";

export default function RoadmapHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.path}>
        <p className={styles.pathItem}>Dashboard</p>

        <Image
          className={styles.pathArrow}
          src="/icons/arrow-right.png"
          alt="Arrow"
          width={15}
          height={15}
        />

        <p className={styles.pathItem}>Roadmap</p>
      </div>

      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search courses, skills, or topics..."
        />
        <Image
          className={styles.searchIcon}
          src="/icons/search.png"
          alt="Search"
          width={20}
          height={20}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.notificationsBtn} aria-label="Notifications">
          <Image
            className={styles.notificationsIcon}
            src="/icons/notifications.png"
            alt="Notifications"
            width={20}
            height={20}
          />
        </button>

        <button className={styles.btn}>
          <Image
            className={styles.crownIcon}
            src="/icons/crown.png"
            alt="Crown"
            width={20}
            height={20}
          />
          <span>Go Pro</span>
        </button>
      </div>
    </header>
  );
}
