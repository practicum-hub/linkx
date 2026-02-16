"use client";

import styles from "./codePanel.module.css";
import CodePanelHeader from "./CodePanelHeader/CodePanelHeader";
import CodePanelTerminal from "./CodePanelTerminal/CodePanelTerminal";
import CodePanelEditor from "./CodePanelEditor/CodePanelEditor";

export default function CodePanel() {
  return (
    <div className={styles.panel}>
      <CodePanelHeader />

      <CodePanelEditor />

      <CodePanelTerminal />
    </div>
  );
}
