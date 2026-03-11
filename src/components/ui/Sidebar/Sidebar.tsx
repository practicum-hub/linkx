"use client";

import Link from "next/link";
import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import { appSidebarContent } from "@/data/mocks/sidebar";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {appSidebarContent.sections.map((section, sectionIndex) => (
        <div key={`section-${sectionIndex}`} className={section.title ? styles.section : ""}>
          {section.title ? <p className={styles.sectionTitle}>{section.title.toUpperCase()}</p> : null}
          <ul className={styles.items}>
            {section.items.map((item) => (
              <SidebarItem key={item.href} item={item} />
            ))}
          </ul>
        </div>
      ))}

      <div className={styles.bottomArea}>
        <Link href={appSidebarContent.cta.href} className={styles.ctaCard}>
          <span className={styles.ctaText}>{appSidebarContent.cta.label}</span>
        </Link>
      </div>
    </aside>
  );
}
