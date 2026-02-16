"use client";

import Image from "next/image";
import styles from "./terminalNavbar.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TerminalNavbar() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeTab = searchParams.get("tab") || "testcase";

  const handleClick = (tab: string) => {
    params.set("tab", tab);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.tabs}>
        <li
          className={`${styles.tab} ${activeTab === "testcase" ? styles.selected : ""}`}
          onClick={() => handleClick("testcase")}
        >
          Testcase
        </li>
        <li
          className={`${styles.tab} ${activeTab === "result" ? styles.selected : ""}`}
          onClick={() => handleClick("result")}
        >
          Test Result
        </li>
      </ul>

      <Image
        className={styles.img}
        src="/icons/arrowhead-up.png"
        alt="arrow"
        width={15}
        height={15}
      />
    </nav>
  );
}
