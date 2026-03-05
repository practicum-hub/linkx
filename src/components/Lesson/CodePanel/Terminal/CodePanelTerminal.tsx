"use client";

import { useState } from "react";
import TerminalNavbar from "./TerminalNavbar/TerminalNavbar";
import styles from "./codePanelTerminal.module.css";
import TestResult from "./TestResult/TestResult";
import Testcase from "./Testcase/Testcase";
import type { ExerciseTerminalCase } from "@/types/algorithms";

type Props = {
  cases?: ExerciseTerminalCase[];
  note?: string;
};

export default function CodePanelTerminal({ cases, note }: Props) {
  const [currentTab, setCurrentTab] = useState<"testcase" | "result">("testcase");

  return (
    <div className={styles.terminal}>
      <TerminalNavbar activeTab={currentTab} onTabChange={setCurrentTab} />

      {currentTab === "testcase" ? <Testcase cases={cases} note={note} /> : <TestResult />}
    </div>
  );
}
