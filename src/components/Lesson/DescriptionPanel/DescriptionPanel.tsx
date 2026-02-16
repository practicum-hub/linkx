import Example from "@/components/Example/Example";
import styles from "./descriptionPanel.module.css";
import Constraints from "@/components/Constraints/Constraints";
import DescriptionPanelFooter from "./DescriptionPanelFooter/DescriptionPanelFooter";

export default function DescriptionPanel() {
  return (
    <div className={styles.panel}>
      <ul className={styles.header}>
        <li className={styles.headerItem}>Description</li>
        <li className={styles.headerItem}>Solutions</li>
      </ul>

      <div className={styles.infoBlock}>
        <h1 className={styles.title}>1. Binary Search</h1>

        <p className={styles.description}>
          Given an array of integers nums which is sorted in ascending order,
          and an integer target, write a function to search target in nums. If
          target exists, then return its index. Otherwise, return -1.
          <br />
          You must write an algorithm with 0(log n) runtime complexity.
        </p>

        <div className={styles.examples}>
          <Example />
          <Example />
        </div>

        <Constraints />
      </div>

      <DescriptionPanelFooter />
    </div>
  );
}
