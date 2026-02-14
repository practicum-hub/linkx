import { ILesson } from "@/core/interfaces";
import styles from "./page.module.css";
import Track from "@/components/Track/Track";

const mockTracks: ILesson[] = [
  {
    id: 1,
    name: "Работа с остатком от деления % (четность, выделение последней цифры числа).",
    units: [
      { id: 1, name: "Unit #1: Четность" },
      { id: 2, name: "Unit #2: Делимость" },
      { id: 3, name: "Unit #3: Последняя цифра" },
    ],
  },
  {
    id: 2,
    name: "Округления (floor, ceil, round).",
    units: [],
  },
  {
    id: 3,
    name: "Итоговая задача: «Развернуть число» (из 123 сделать 321 без превращения в строку).",
    units: [],
  },
];

const mockTitle = "Числа и Математика";

export default function Learn() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{mockTitle}</h1>

      <ul className={styles.lessons}>
        {mockTracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
}
