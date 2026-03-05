import { useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { FaArrowRotateLeft } from "react-icons/fa6";
import styles from "./codePanelEditor.module.css";
import { useLessonStore } from "@/store";

type Props = {
  isDark: boolean;
  lessonId?: string;
  starterCode?: string;
  isExecuting: boolean;
  onUndo: () => void;
  onRun: () => void;
  onSubmit: () => void;
};

export default function CodePanelEditor({
  isDark,
  lessonId,
  starterCode,
  isExecuting,
  onUndo,
  onRun,
  onSubmit,
}: Props) {
  const { userInput, setUserInput } = useLessonStore();

  useEffect(() => {
    setUserInput(starterCode ?? "");
  }, [lessonId, starterCode, setUserInput]);

  return (
    <div className={styles.editor}>
      <Editor
        className={styles.editorSurface}
        defaultLanguage="typescript"
        theme={isDark ? "vs-dark" : "vs-light"}
        value={userInput}
        onChange={(value) => setUserInput(value || "")}
        options={{
          fontSize: 16,
          lineNumbers: "on",
          minimap: { enabled: false },
          padding: { top: 15 },
        }}
      />

      <div className={styles.actionsBar}>
        <button type="button" className={styles.undoBtn} onClick={onUndo} aria-label="Undo to starter code">
          <FaArrowRotateLeft aria-hidden="true" />
        </button>
        <button type="button" className={styles.runBtn} onClick={onRun} disabled={isExecuting}>
          {isExecuting ? "Running..." : "Run Code"}
        </button>
        <button type="button" className={styles.submitBtn} onClick={onSubmit} disabled={isExecuting}>
          {isExecuting ? "Submitting..." : "Submit Answer"}
        </button>
      </div>
    </div>
  );
}
