import { Editor } from "@monaco-editor/react";
import styles from "./codePanelEditor.module.css";
import { useLessonStore } from "@/store";

type Props = {
  isDark: boolean;
};

export default function CodePanelEditor({ isDark }: Props) {
  const { userInput, setUserInput } = useLessonStore();

  return (
    <div className={styles.editor}>
      <Editor
        className={styles.editor}
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
    </div>
  );
}
