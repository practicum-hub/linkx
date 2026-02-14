import { SidebarItemType } from "@/core/types";
import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem/SidebarItem";
import UserItem from "./UserItem/UserItem";

const sidebarItems: SidebarItemType[] = [
  {
    title: null,
    subItems: [
      {
        name: "Roadmap",
        href: "/roadmap",
      },
      {
        name: "Practice",
        href: "/practice",
      },
    ],
  },
  {
    title: "Resources",
    subItems: [
      {
        name: "Library",
        href: "/library",
      },
      {
        name: "Video Tutorials",
        href: "/video-tutorials",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <p className={styles.logoIcon}>M</p>
        <div className={styles.logoText}>
          <p className={styles.logoTitle}>MathPath</p>
          <p className={styles.logoSubtitle}>Learn Mathematics</p>
        </div>
      </div>

      <ul className={styles.items}>
        {sidebarItems.map((item, i) => (
          <SidebarItem key={i} item={item} />
        ))}
      </ul>

      <UserItem />
    </aside>
  );
}
