import styles from "./case.module.css";

export default function Case() {
  return (
    <li className={styles.case}>
      <h3 className={styles.title}>Case 1</h3>

      <ul className={styles.inputs}>
        <li className={styles.input}>
          <p className={styles.name}>nums =</p>
          <p className={styles.data}>[-1, 0, 3, 5, 9, 12]</p>
        </li>
        <li className={styles.input}>
          <p className={styles.name}>target =</p>
          <p className={styles.data}>9</p>
        </li>
      </ul>
    </li>
  );
}
