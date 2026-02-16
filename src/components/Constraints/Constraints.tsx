import styles from "./constraints.module.css";

export default function Constraints() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Constraints:</h2>

      <ul className={styles.constraints}>
        <li className={styles.constraint}>
          <span className={styles.codeInline}>
            1 {"<="} nums.length {"<="} 10^4
          </span>
        </li>
        <li className={styles.constraint}>
          <span className={styles.codeInline}>
            -10^4 {"<"} nums[i], target {"<"} 10^4
          </span>
        </li>
        <li className={styles.constraint}>
          All the integers in <span className={styles.codeInline}>nums</span>{" "}
          are <b>unique</b>.
        </li>
        <li className={styles.constraint}>
          <span className={styles.codeInline}>nums</span> is sorted in ascending
          order.
        </li>
      </ul>
    </div>
  );
}
