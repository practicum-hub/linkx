"use client";

import MainHeader from "@/components/ui/MainHeader/MainHeader";
import RightSidebar from "@/components/ui/RightSidebar/RightSidebar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLearnPage = pathname.startsWith("/learn");

  if (isLearnPage) {
    return <div className={styles.learnShell}>{children}</div>;
  }

  return (
    <div className={styles.page}>
      <Sidebar />

      <div className={styles.contentShell}>
        <MainHeader />

        <div className={styles.layout}>
          <main className={styles.main}>{children}</main>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
