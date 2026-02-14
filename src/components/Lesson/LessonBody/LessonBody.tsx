import { IExercise } from "@/core/interfaces";
import styles from "./lessonBody.module.css";

type Props = {
  exercise: IExercise;
};

export default function LessonBody({ exercise }: Props) {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <h1 className={styles.title}>Решите задачу:</h1>
        <p className={styles.text}>{exercise.text}</p>
        <textarea
          className={styles.textarea}
          placeholder="Вводите ответ здессь"
        />
      </div>
    </div>
  );
}
