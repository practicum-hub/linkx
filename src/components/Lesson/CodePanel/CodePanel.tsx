"use client";

import type { CSSProperties } from "react";
import styles from "./codePanel.module.css";
import CodePanelHeader from "./Header/CodePanelHeader";
import CodePanelTerminal from "./Terminal/CodePanelTerminal";
import CodePanelEditor from "./Editor/CodePanelEditor";

type CodePanelProps = {
  className?: string;
  style?: CSSProperties;
};

export default function CodePanel({ className = "", style }: CodePanelProps) {
  return (
    <div className={`${styles.panel} ${className}`.trim()} style={style}>
      <CodePanelHeader />

      <CodePanelEditor />

      <CodePanelTerminal />
    </div>
  );
}
