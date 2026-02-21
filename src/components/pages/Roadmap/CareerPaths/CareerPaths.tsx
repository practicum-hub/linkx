import styles from "./career.module.css";

import TextBlock from "../TextBlock/TextBlock";
import CareerCard from "./CareerCard/CareerCard";
import { careerPaths } from "@/data/mocks/roadmap/careerPaths";

export default function CareerPaths() {
  return (
    <div className={styles.wrapper}>
      <TextBlock
        title="Career Paths"
        desc="Structured roadmaps for specific job roles with clear outcomes."
      />

      <ul className={styles.cards}>
        {careerPaths.map((path) => (
          <CareerCard key={path.title} {...path} />
        ))}
      </ul>
    </div>
  );
}
