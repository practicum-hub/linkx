import styles from "./case.module.css";
import type { ExerciseTerminalCase } from "@/types/algorithms";

type Props = ExerciseTerminalCase;

export default function Case({ title, fields }: Props) {
  return (
    <li className={styles.case}>
      <h3 className={styles.title}>{title}</h3>

      <ul className={styles.inputs}>
        {fields.map((field, index) => (
          <li key={`${field.name}-${index}`} className={styles.input}>
            <p className={styles.name}>{field.name} =</p>
            <p className={styles.data}>{field.value}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
