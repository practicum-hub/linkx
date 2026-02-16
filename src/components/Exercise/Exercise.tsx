import Editor from "@monaco-editor/react";
import { useLessonStore } from "@/store";
import styles from "./exercise.module.css";

export default function LessonBody() {
  const { userInput, setUserInput, output, runCode } = useLessonStore();

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
        <button className={styles.runButton} onClick={runCode}>
          Run Code
        </button>
      </div>

      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>$ output:</div>
        <div className={styles.terminalBody}>
          {output.map((line, i) => (
            <div key={i} className={styles.line}>
              {line}
            </div>
          ))}
          {output.length === 0 && (
            <div className={styles.placeholder}>Ожидание запуска...</div>
          )}
        </div>
      </div>
    </div>
  );
}
