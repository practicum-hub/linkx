"use client";

import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import { getRoadmapSidebarContent } from "@/core/data/roadmapContext";
import { usePathname, useSearchParams } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { sidebarItems } = getRoadmapSidebarContent(pathname, searchParams.get("roadmap"));

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.items}>
        {sidebarItems.map((item, i) => (
          <SidebarItem key={i} item={item} />
        ))}
      </ul>
    </aside>
  );
}
