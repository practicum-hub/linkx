import Link from "next/link";
import styles from "./careerCard.module.css";

type Props = {
  title: string;
  desc: string;
  duration: string;
  courses: string;
  salary: string;
  demand: string;
  gradient: string;
  href: string;
};

export default function CareerCard({
  title,
  desc,
  duration,
  courses,
  salary,
  demand,
  gradient,
  href,
}: Props) {
  return (
    <li className={styles.cardItem}>
      <Link className={styles.card} href={href} style={{ backgroundImage: gradient }}>
        <div className={styles.chips}>
          <p className={styles.chip}>{courses}</p>
          <p className={styles.chip}>{duration}</p>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>

        <div className={styles.stats}>
          <p className={styles.stat}>{salary}</p>
          <p className={styles.stat}>{demand}</p>
        </div>

        <p className={styles.linkLabel}>View Path</p>
      </Link>
    </li>
  );
}
