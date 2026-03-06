"use client";

import MainHeader from "@/components/ui/MainHeader/MainHeader";
import RightSidebar from "@/components/ui/RightSidebar/RightSidebar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLearnPage = pathname.startsWith("/learn");
  const isPracticePage = pathname.startsWith("/practice");
  const isExplorePage = pathname.startsWith("/explore");
  const isCoursesPage = pathname.startsWith("/courses");
  const isCareersPage = pathname.startsWith("/careers");
  const isProgressPage = pathname.startsWith("/progress");
  const hasCenteredMainOnly =
    isPracticePage || isExplorePage || isCoursesPage || isCareersPage || isProgressPage;

  if (isLearnPage) {
    return <div className={styles.learnShell}>{children}</div>;
  }

  return (
    <div className={`${styles.page} ${isPracticePage ? styles.pagePractice : ""}`}>
      <MainHeader />

      <div className={styles.layout}>
        <Sidebar />
        <div className={`${styles.contentArea} ${isPracticePage ? styles.contentAreaPractice : ""}`}>
          <div className={styles.contentCluster}>
            <main className={`${styles.main} ${isPracticePage ? styles.mainPractice : ""}`}>
              <div className={styles.mainInner}>{children}</div>
            </main>
            {!hasCenteredMainOnly ? <RightSidebar /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
