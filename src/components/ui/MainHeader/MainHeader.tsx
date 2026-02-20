"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./mainHeader.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Community", href: "/community" },
  { label: "Practice", href: "/practice" },
];

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <span>EqualLearning</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.search}>
          <input className={styles.input} placeholder="Search courses, skills, or topics..." />
          <Image src="/icons/search.png" alt="Search" width={18} height={18} className={styles.searchIcon} />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.upgradeBtn}>
          <Image src="/icons/crown.png" alt="Crown" width={16} height={16} />
          <span>Upgrade</span>
        </button>

        <button className={styles.langBtn}>
          <Image src="/globe.svg" alt="Language" width={16} height={16} />
          <span>EN</span>
        </button>

        <button className={styles.iconBtn} aria-label="Notifications">
          <Image src="/icons/notifications.png" alt="Notifications" width={18} height={18} />
          <span className={styles.badge} />
        </button>

        <button className={styles.profileBtn}>
          <Image src="/images/user.png" alt="Profile" width={26} height={26} className={styles.avatar} />
          <Image src="/icons/arrow-down.png" alt="Open profile menu" width={12} height={12} />
        </button>
      </div>
    </header>
  );
}
