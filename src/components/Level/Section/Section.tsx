"use client";

import { ISection } from "@/core/interfaces";
import styles from "./section.module.css";
import { useRouter } from "next/navigation";

type Props = {
  section: ISection;
};

export default function Section({ section }: Props) {
  const router = useRouter();

  const handleClick = () => {
    console.log("Click");

    router.push("/learn");
  };

  return (
    <li className={styles.section}>
      <button className={styles.btn} onClick={handleClick}>
        <h4 className={styles.title}>{section.name}</h4>
        <ul className={styles.topics}>
          {section.topics.map((topic) => (
            <li key={topic.text} className={styles.topic}>
              {topic.text}
            </li>
          ))}
        </ul>
      </button>
    </li>
  );
}
