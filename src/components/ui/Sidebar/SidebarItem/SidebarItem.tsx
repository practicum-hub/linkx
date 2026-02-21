"use client";

import { usePathname } from "next/navigation";
import type { SidebarItemType } from "@/types/roadmap";
import styles from "./sidebarItem.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  item: SidebarItemType;
};

export default function SidebarItem({ item }: Props) {
  const { name, href, iconSrc } = item;

  const pathname = usePathname();
  const hrefPath = href.split("?")[0];

  const isActive = pathname === hrefPath || pathname.startsWith(`${hrefPath}/`);

  return (
    <li className={styles.item}>
      <Link className={`${styles.link} ${isActive && styles.active}`} href={href}>
        <span className={styles.iconWrap}>
          <Image className={styles.icon} src={iconSrc} alt={name} width={18} height={18} />
        </span>
        <span>{name}</span>
      </Link>
    </li>
  );
}
