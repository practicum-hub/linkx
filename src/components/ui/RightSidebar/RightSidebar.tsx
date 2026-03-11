"use client";

import { rightSidebarAds } from "@/data/mocks/rightSidebarAds";
import AdCard from "./AdCard/AdCard";
import styles from "./rightSidebar.module.css";

export default function RightSidebar() {
  return (
    <aside className={styles.sidebar}>
      {rightSidebarAds.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </aside>
  );
}
