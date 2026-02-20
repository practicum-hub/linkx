import styles from "./textBlock.module.css";

type Props = {
  title: string;
  desc: string;
};

export default function TextBlock({ title, desc }: Props) {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}
