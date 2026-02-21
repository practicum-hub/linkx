"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainHeaderNavItems } from "@/data/mocks/mainHeader";
import { useAppTheme } from "@/components/providers/ThemeProvider";
import styles from "./mainHeader.module.css";

export default function MainHeader() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useAppTheme();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isProfileMenuOpen) {
      return;
    }

    const handleDocumentClick = (event: MouseEvent) => {
      if (!profileWrapRef.current?.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isProfileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <nav className={styles.nav}>
          {mainHeaderNavItems.map((item) => {
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

        <div className={styles.profileWrap} ref={profileWrapRef}>
          <button
            className={`${styles.profileBtn} ${isProfileMenuOpen ? styles.profileBtnActive : ""}`}
            onClick={() => setIsProfileMenuOpen((current) => !current)}
            aria-expanded={isProfileMenuOpen}
            aria-haspopup="menu"
            aria-label="Open profile menu"
          >
            <Image src="/images/user.png" alt="Profile" width={26} height={26} className={styles.avatar} />
            <Image src="/icons/arrow-down.png" alt="" aria-hidden="true" width={12} height={12} />
          </button>

          {isProfileMenuOpen ? (
            <div className={styles.profileMenu} role="menu">
              <div className={styles.profileMeta}>
                <p className={styles.profileName}>Anton</p>
                <p className={styles.profileEmail}>anton@example.com</p>
              </div>

              <div className={styles.menuSection}>
                <button className={styles.menuItem} role="menuitem">
                  Profile settings
                </button>
                <button className={styles.menuItem} role="menuitem">
                  Billing
                </button>
                <button className={styles.menuItem} role="menuitem">
                  Notifications
                </button>
              </div>

              <div className={styles.menuSection}>
                <p className={styles.themeLabel}>Theme</p>
                <div className={styles.themeRow}>
                  <button
                    className={`${styles.themeOption} ${theme === "light" ? styles.themeOptionActive : ""}`}
                    onClick={() => {
                      if (theme !== "light") {
                        toggleTheme();
                      }
                    }}
                    role="menuitemradio"
                    aria-checked={theme === "light"}
                  >
                    Light
                  </button>
                  <button
                    className={`${styles.themeOption} ${theme === "dark" ? styles.themeOptionActive : ""}`}
                    onClick={() => {
                      if (theme !== "dark") {
                        toggleTheme();
                      }
                    }}
                    role="menuitemradio"
                    aria-checked={theme === "dark"}
                  >
                    Dark
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
