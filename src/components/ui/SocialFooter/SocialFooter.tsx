"use client";

import styles from "./socialFooter.module.css";

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2A10 10 0 0 0 8.84 21.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.4-2 1.03-2.7-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.9-1.3 2.74-1.03 2.74-1.03.56 1.4.21 2.45.1 2.7a3.9 3.9 0 0 1 1.04 2.72c0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.3 19.3V9.84h3.28v9.46H5.3Zm5.12 0V9.84h3.14v1.3h.05c.44-.83 1.52-1.7 3.12-1.7 3.34 0 3.96 2.2 3.96 5.05v4.8h-3.28v-4.25c0-1.02-.01-2.33-1.42-2.33-1.43 0-1.65 1.11-1.65 2.25v4.33h-3.92Z"
        />
      </svg>
    ),
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12c0 2.1-.24 3.53-.43 4.28-.2.83-.85 1.48-1.68 1.68-.75.2-2.18.44-7.89.44s-7.14-.25-7.89-.44a2.4 2.4 0 0 1-1.68-1.68C2.24 15.53 2 14.1 2 12s.24-3.53.43-4.28c.2-.83.85-1.48 1.68-1.68C4.86 5.84 6.29 5.6 12 5.6s7.14.25 7.89.44c.83.2 1.48.85 1.68 1.68.2.75.43 2.18.43 4.28Zm-11.8-3.4v6.8l5.89-3.4-5.89-3.4Z"
        />
      </svg>
    ),
  },
] as const;

export default function SocialFooter() {
  return (
    <footer className={styles.footer} aria-label="Social links">
      {SOCIAL_LINKS.map((link) => (
        <a key={link.id} href={link.href} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label={link.label}>
          {link.icon}
        </a>
      ))}
    </footer>
  );
}
