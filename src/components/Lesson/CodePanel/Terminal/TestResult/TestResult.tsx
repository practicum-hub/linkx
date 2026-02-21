import styles from "./testResult.module.css";
import ParamField from "@/components/shared/ParamField/ParamField";
import { useLessonStore } from "@/store";

export default function TestResult() {
  const { results } = useLessonStore();

  if (results?.status === "error") {
    return <div className={styles.empty}>{results.message}</div>;
  }

  const firstCase = results?.status === "success" ? results.testResults[0] : null;
  const accepted =
    results?.status === "success" && results.testResults.length > 0 && results.testResults.every((caseItem) => caseItem.passed);

  return (
    <div className={styles.result}>
      {!results ? (
        <p className={styles.empty}>You must run your code first</p>
      ) : (
        <div className={styles.body}>
          <div className={styles.info}>
            <h3 className={styles.title}>{accepted ? "Accepted" : "Wrong Answer"}</h3>
            <p className={styles.runtime}>Runtime: 0 ms</p>
          </div>

          <ul className={styles.cases}>
            {results.testResults.map((_, index) => (
              <li key={index} className={`${styles.case} ${index === 0 ? styles.active : ""}`}>
                Case {index + 1}
              </li>
            ))}
          </ul>

          <div className={styles.blocks}>
            <div className={styles.block}>
              <h4 className={styles.title}>Input</h4>
              <div className={styles.fields}>
                <ParamField value={firstCase?.input ?? "[]"} />
              </div>
            </div>

            <div className={styles.block}>
              <h4 className={styles.title}>Output</h4>
              <div className={styles.fields}>
                <ParamField value={firstCase?.actual ?? "-"} />
              </div>
            </div>

            <div className={styles.block}>
              <h4 className={styles.title}>Expected</h4>
              <div className={styles.fields}>
                <ParamField value={firstCase?.expected ?? "-"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
