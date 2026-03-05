"use client";

import type { CSSProperties } from "react";
import styles from "./codePanel.module.css";
import CodePanelHeader from "./Header/CodePanelHeader";
import CodePanelTerminal from "./Terminal/CodePanelTerminal";
import CodePanelEditor from "./Editor/CodePanelEditor";
import type { ExerciseTerminalCase } from "@/types/algorithms";
import { useLessonStore } from "@/store";
import { defaultLessonConfig } from "@/data/mocks/lesson/config";

const defaultStarterCode =
  "function solve(input: unknown): unknown {\n  // TODO: implement solution\n  return input;\n}\n";

type CodePanelProps = {
  className?: string;
  style?: CSSProperties;
  isDark?: boolean;
  lessonId?: string;
  starterCode?: string;
  terminalCases?: ExerciseTerminalCase[];
  terminalNote?: string;
};

export default function CodePanel({
  className = "",
  style,
  isDark = false,
  lessonId,
  starterCode,
  terminalCases,
  terminalNote,
}: CodePanelProps) {
  const resolvedStarterCode = starterCode ?? defaultStarterCode;
  const { runCode, setUserInput, isExecuting } = useLessonStore();

  const handleRun = () => {
    if (!isExecuting) {
      runCode(defaultLessonConfig.problemId);
    }
  };

  return (
    <div className={`${styles.panel} ${isDark ? styles.panelDark : ""} ${className}`.trim()} style={style}>
      <CodePanelHeader />

      <CodePanelEditor
        isDark={isDark}
        lessonId={lessonId}
        starterCode={resolvedStarterCode}
        isExecuting={isExecuting}
        onUndo={() => setUserInput(resolvedStarterCode)}
        onRun={handleRun}
        onSubmit={handleRun}
      />

      <CodePanelTerminal cases={terminalCases} note={terminalNote} />
    </div>
  );
}
