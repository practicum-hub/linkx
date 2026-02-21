import Case from "./Case/Case";
import styles from "./testcase.module.css";

export default function Testcase() {
  return (
    <div className={styles.testcase}>
      <div className={styles.cases}>
        <Case />
        <Case />
      </div>

      <p className={styles.text}>
        Click &quot;Check&quot; to execute your code against these test cases.
      </p>
    </div>
  );
}
