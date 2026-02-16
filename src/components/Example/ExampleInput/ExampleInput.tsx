import styles from "./exampleInput.module.css";

type Props = {
  name: string;
  value: string;
};

export default function ExampleInput({ name, value }: Props) {
  return (
    <div className={styles.input}>
      <p className={styles.name}>{name}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
