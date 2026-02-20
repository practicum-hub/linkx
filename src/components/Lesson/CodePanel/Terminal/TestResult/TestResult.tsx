import styles from "./testResult.module.css";
import ParamField from "@/components/shared/ParamField/ParamField";

export default function TestResult() {
  // const { results } = useLessonStore();

  const results = {
    status: "success",
    message: "Hi",
    testResults: [
      {
        actual: "4",
        expected: "4",
        input: "[[-1,0,3,5,9,12],9]",
        passed: true,
      },
      {
        actual: "-1",
        expected: "-1",
        input: "[[-1,0,3,5,9,12],2]",
        passed: true,
      },
    ],
  };

  if (results?.status === "error")
    return <div className="text-red-500">{results?.message}</div>;

  return (
    <div className={styles.result}>
      {!results ? (
        <p className={styles.empty}>You must run your code first</p>
      ) : (
        <div className={styles.body}>
          <div className={styles.info}>
            <h3 className={styles.title}>Accepted</h3>
            <p className={styles.runtime}>Runtime: 0 ms</p>
          </div>

          <ul className={styles.cases}>
            <li className={`${styles.case} ${styles.active}`}>Case 1</li>
            <li className={styles.case}>Case 2</li>
          </ul>

          <div className={styles.blocks}>
            <div className={styles.block}>
              <h4 className={styles.title}>Input</h4>
              <div className={styles.fields}>
                <ParamField name="nums =" value="[2,7,11,15]" />
                <ParamField name="target =" value="9" />
              </div>
            </div>

            <div className={styles.block}>
              <h4 className={styles.title}>Output</h4>
              <div className={styles.fields}>
                <ParamField value="[0,1]" />
              </div>
            </div>

            <div className={styles.block}>
              <h4 className={styles.title}>Expected</h4>
              <div className={styles.fields}>
                <ParamField value="[0,1]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
