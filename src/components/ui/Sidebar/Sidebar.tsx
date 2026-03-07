"use client";

import SocialFooter from "../SocialFooter/SocialFooter";
import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import type { SidebarItemType } from "@/types/roadmap";

export default function Sidebar() {
  const topItems: SidebarItemType[] = [
    { name: "Explore", href: "/explore", iconSrc: "" },
    { name: "My progress", href: "/progress", iconSrc: "" },
    // { name: "My library", href: "/library", iconSrc: "" },
    // { name: "Leaderboard", href: "/leaderboard", iconSrc: "" },
  ];

  const learnItems: SidebarItemType[] = [
    { name: "Courses", href: "/courses", iconSrc: "" },
    { name: "Careers", href: "/careers", iconSrc: "" },
  ];

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.items}>
        {topItems.map((item, i) => (
          <SidebarItem key={i} item={item} />
        ))}
      </ul>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>LEARN</p>
        <ul className={styles.items}>
          {learnItems.map((item, i) => (
            <SidebarItem key={item.href + i} item={item} />
          ))}
        </ul>
      </div>

      <div className={styles.socialWrap}>
        <SocialFooter />
      </div>
    </aside>
  );
}
