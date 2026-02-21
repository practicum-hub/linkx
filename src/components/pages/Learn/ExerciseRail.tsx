import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  total: number;
  safeStep: number;
};

export default function ExerciseRail({ total, safeStep }: Props) {
  return (
    <div className={styles.exerciseRail}>
      {Array.from({ length: total }, (_, i) => i + 1).map((index) => (
        <div key={index} className={`${styles.exerciseDot} ${index <= safeStep ? styles.exerciseDotActive : ""}`}>
          {index}
        </div>
      ))}
    </div>
  );
}
