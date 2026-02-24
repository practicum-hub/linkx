"use client";

import { useState } from "react";
import TerminalNavbar from "./TerminalNavbar/TerminalNavbar";
import styles from "./codePanelTerminal.module.css";
import TestResult from "./TestResult/TestResult";
import Testcase from "./Testcase/Testcase";

export default function CodePanelTerminal() {
  const [currentTab, setCurrentTab] = useState<"testcase" | "result">("testcase");

  return (
    <div className={styles.terminal}>
      <TerminalNavbar activeTab={currentTab} onTabChange={setCurrentTab} />

      {currentTab === "testcase" ? <Testcase /> : <TestResult />}
    </div>
  );
}
