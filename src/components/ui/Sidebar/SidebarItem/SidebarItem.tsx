"use client";

import { usePathname } from "next/navigation";
import type { SidebarItemType } from "@/types/roadmap";
import styles from "./sidebarItem.module.css";
import Link from "next/link";
import { FaBook, FaChartLine, FaRoad, FaTrophy } from "react-icons/fa6";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

type Props = {
  item: SidebarItemType;
};

export default function SidebarItem({ item }: Props) {
  const { name, href } = item;

  const pathname = usePathname();
  const hrefPath = href.split("?")[0];

  const isActive = pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);
  const lowerName = name.toLowerCase();

  const icon = (() => {
    if (lowerName.includes("roadmap")) {
      return <FaRoad className={styles.icon} aria-hidden="true" />;
    }

    if (lowerName.includes("practice")) {
      return <MdOutlinePlayCircleFilled className={styles.icon} aria-hidden="true" />;
    }

    if (lowerName.includes("interview") || lowerName.includes("leaderboard")) {
      return <FaTrophy className={styles.icon} aria-hidden="true" />;
    }

    if (lowerName.includes("library")) {
      return <FaBook className={styles.icon} aria-hidden="true" />;
    }

    if (lowerName.includes("analytics")) {
      return <FaChartLine className={styles.icon} aria-hidden="true" />;
    }

    return <FaRoad className={styles.icon} aria-hidden="true" />;
  })();

  return (
    <li className={styles.item}>
      <Link className={`${styles.link} ${isActive && styles.active}`} href={href}>
        <span className={styles.iconWrap}>{icon}</span>
        <span>{name}</span>
      </Link>
    </li>
  );
}
