import Image from "next/image";
import styles from "./terminalNavbar.module.css";
type Props = {
  activeTab: "testcase" | "result";
  onTabChange: (tab: "testcase" | "result") => void;
};

export default function TerminalNavbar({ activeTab, onTabChange }: Props) {

  return (
    <nav className={styles.nav}>
      <ul className={styles.tabs}>
        <li
          className={`${styles.tab} ${activeTab === "testcase" ? styles.selected : ""}`}
          onClick={() => onTabChange("testcase")}
        >
          Testcase
        </li>
        <li
          className={`${styles.tab} ${activeTab === "result" ? styles.selected : ""}`}
          onClick={() => onTabChange("result")}
        >
          Test Result
        </li>
      </ul>

      <Image
        className={styles.img}
        src="/icons/arrowhead-up.png"
        alt="arrow"
        width={15}
        height={15}
      />
    </nav>
  );
}
