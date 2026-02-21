import Editor from "@monaco-editor/react";
import { defaultLessonConfig } from "@/data/mocks/lesson/config";
import { useLessonStore } from "@/store";
import styles from "./exercise.module.css";

export default function LessonBody() {
  const { userInput, setUserInput, results, runCode } = useLessonStore();

  return (
    <div className={styles.rightPane}>
      <div className={styles.editorWrapper}>
        <Editor
          defaultLanguage="javascript"
          theme="vs-dark"
          value={userInput}
          onChange={(value) => setUserInput(value || "")}
          options={{
            fontSize: 16,
            lineNumbers: "on",
          }}
        />
      </div>

      <div className={styles.controls}>
        <button className={styles.runButton} onClick={() => runCode(defaultLessonConfig.problemId)}>
          Run Code
        </button>
      </div>

      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>$ output:</div>
        <div className={styles.terminalBody}>
          {results?.status === "success" &&
            results.testResults.map((item, index) => (
              <div key={index} className={styles.line}>
                {item.passed ? "PASS" : "FAIL"} {item.input}
              </div>
            ))}
          {!results && <div className={styles.placeholder}>Waiting for execution...</div>}
        </div>
      </div>
    </div>
  );
}
