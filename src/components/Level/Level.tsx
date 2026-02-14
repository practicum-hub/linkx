import { ILevel } from "@/core/interfaces";
import styles from "./level.module.css";
import Section from "./Section/Section";

type Props = {
  level: ILevel;
};

export default function Level({ level }: Props) {
  return (
    <li className={styles.level}>
      <h3 className={styles.title}>{level.name}</h3>

      <ul className={styles.sections}>
        {level.sections.map((section) => (
          <Section key={section.name} section={section} />
        ))}
      </ul>
    </li>
  );
}
