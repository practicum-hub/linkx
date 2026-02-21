"use client";

import { ILesson } from "@/core/interfaces";
import styles from "./track.module.css";
import Unit from "./Unit/Unit";

type Props = {
  track: ILesson;
};

export default function Lesson({ track }: Props) {
  const { name, units } = track;

  return (
    <li className={styles.track}>
      <h3 className={styles.title}>{name}</h3>

      <ul className={styles.units}>
        {units.map((unit) => (
          <Unit key={unit.id} unit={unit} />
        ))}
      </ul>
    </li>
  );
}
