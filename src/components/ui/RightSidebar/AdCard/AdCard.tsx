import Link from "next/link";
import type { RightSidebarAd } from "@/types/layout";
import styles from "./adCard.module.css";

type Props = {
  ad: RightSidebarAd;
};

export default function AdCard({ ad }: Props) {
  const cardClassName = `${styles.card} ${ad.tone === "primary" ? styles.cardPrimary : ""} ${
    ad.compact ? styles.cardCompact : ""
  }`;

  return (
    <section className={cardClassName}>
      <p className={styles.tag}>{ad.tag}</p>
      <h3 className={`${styles.title} ${ad.compact ? styles.titleCompact : ""}`}>{ad.title}</h3>
      <p className={`${styles.text} ${ad.compact ? styles.textCompact : ""}`}>{ad.text}</p>
      <Link href={ad.actionHref} className={`${styles.action} ${ad.tone === "secondary" ? styles.actionAlt : ""}`}>
        {ad.actionLabel}
      </Link>
    </section>
  );
}
