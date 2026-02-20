"use client";

import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import { getRoadmapSidebarContent } from "@/core/data/roadmapContext";
import { usePathname, useSearchParams } from "next/navigation";

export type SidebarItemType = {
  name: string;
  href: string;
  iconSrc: string;
};

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { sidebarItems, goalTitle, goalText, goalButtonLabel } = getRoadmapSidebarContent(pathname, searchParams.get("roadmap"));

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.items}>
        {sidebarItems.map((item, i) => (
          <SidebarItem key={i} item={item} />
        ))}
      </ul>

      <div className={styles.bottomCard}>
        <p className={styles.bottomTitle}>{goalTitle}</p>
        <p className={styles.bottomText}>{goalText}</p>
        <button className={styles.bottomBtn}>{goalButtonLabel}</button>
      </div>
    </aside>
  );
}
