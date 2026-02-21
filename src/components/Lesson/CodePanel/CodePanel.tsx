"use client";

import type { CSSProperties } from "react";
import styles from "./codePanel.module.css";
import CodePanelHeader from "./Header/CodePanelHeader";
import CodePanelTerminal from "./Terminal/CodePanelTerminal";
import CodePanelEditor from "./Editor/CodePanelEditor";

type CodePanelProps = {
  className?: string;
  style?: CSSProperties;
  isDark?: boolean;
};

export default function CodePanel({ className = "", style, isDark = false }: CodePanelProps) {
  return (
    <div className={`${styles.panel} ${isDark ? styles.panelDark : ""} ${className}`.trim()} style={style}>
      <CodePanelHeader />

      <CodePanelEditor isDark={isDark} />

      <CodePanelTerminal />
    </div>
  );
}
