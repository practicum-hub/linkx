import { SidebarItemType } from "@/core/types";
import styles from "./sidebarItem.module.css";
import Link from "next/link";

type Props = {
  item: SidebarItemType;
};

export default function SidebarItem({ item }: Props) {
  const { title, subItems } = item;

  return (
    <li className={styles.item}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.subItems}>
        {subItems.map((subItem, i) => (
          <li key={i} className={styles.subItem}>
            <Link href={subItem.href} className={styles.link}>
              <span className={styles.subItemName}>{subItem.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
