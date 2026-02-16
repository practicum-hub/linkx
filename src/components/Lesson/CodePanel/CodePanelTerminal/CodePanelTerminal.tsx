import { useSearchParams } from "next/navigation";
import TerminalNavbar from "./TerminalNavbar/TerminalNavbar";
import styles from "./codePanelTerminal.module.css";
import TestResult from "./TestResult/TestResult";
import Testcase from "./Testcase/Testcase";

export default function CodePanelTerminal() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const currentTab: string = params.get("tab") || "testcase";

  return (
    <div className={styles.terminal}>
      <TerminalNavbar />

      {currentTab === "testcase" ? <Testcase /> : <TestResult />}
    </div>
  );
}
