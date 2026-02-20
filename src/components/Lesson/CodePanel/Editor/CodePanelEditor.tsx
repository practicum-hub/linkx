import { Editor } from "@monaco-editor/react";
import styles from "./codePanelEditor.module.css";
import { useLessonStore } from "@/store";

export default function CodePanelEditor() {
  const { userInput, setUserInput } = useLessonStore();

  return (
    <div className={styles.editor}>
      <Editor
        className={styles.editor}
        defaultLanguage="typescript"
        theme="vs-light"
        value={userInput}
        onChange={(value) => setUserInput(value || "")}
        options={{
          fontSize: 16,
          lineNumbers: "on",
          minimap: { enabled: false },
          padding: { top: 15 },
        }}
      />
    </div>
  );
}

export const emulateCodeExecution = (code: string, problemId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const testCases = [
          { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
          { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
        ];

        const userRoutine = new Function(`
          ${code}
          return search; 
        `)();

        const testResults = testCases.map((tc) => {
          const actual = userRoutine(...tc.input);
          return {
            passed: JSON.stringify(actual) === JSON.stringify(tc.expected),
            input: JSON.stringify(tc.input),
            expected: JSON.stringify(tc.expected),
            actual: JSON.stringify(actual),
          };
        });

        console.log(testResults);

        resolve({ status: "success", testResults });
      } catch (error: any) {
        resolve({ status: "error", message: error.message });
      }
    }, 500);
  });
};
