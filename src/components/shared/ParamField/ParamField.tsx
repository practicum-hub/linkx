import styles from "./paramField.module.css";

type Props = {
  name?: string;
  value: string;
};

export default function ParamField({ name, value }: Props) {
  return (
    <div className={styles.field}>
      {name && <p className={styles.name}>{name}</p>}
      <p className={styles.value}>{value}</p>
    </div>
  );
}
