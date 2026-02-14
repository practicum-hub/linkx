"use client";

import styles from "./page.module.css";
import LessonFooter from "@/components/Lesson/LessonFooter/LessonFooter";
import LessonBody from "@/components/Lesson/LessonBody/LessonBody";
import LessonHeader from "@/components/Lesson/LessonHeader/LessonHeader";
import { ILesson } from "@/core/interfaces";
import { useLessonStore } from "@/store";
import { useEffect } from "react";

const mockLesson: ILesson = {
  id: 1,
  name: "Четность",
  exercises: [
    { id: 1, text: "Определите остаток при делении: 10 % 2" },
    { id: 2, text: "Определите остаток при делении: 11 % 2" },
    {
      id: 3,
      text: "Напишите выражение, которое выведет 0, если число четное, и 1 если нечетное.",
    },
    {
      id: 4,
      text: "Напишите выражение, которое выдает 1 для четного и 0 для нечетного",
    },
    {
      id: 5,
      text: "Проверьте число 0. Является ли оно четным с точки зрения оператора % 2?",
    },
    { id: 6, text: "Отрицательная четность: Что выдаст -4 % 2?" },
    {
      id: 7,
      text: "У нас есть 17 яиц и 4 ведра, в каждое ведро влезает по 4 яйца, каков будет остаток?",
    },
    {
      id: 8,
      text: "Дано 7 носков. Останется ли один лишний без пары? Напишите остаток",
    },
    {
      id: 9,
      text: "Шахматная доска: Дано ряд клеток 0, 1, 2, 3... Выведите 0 для четных клеток и 1 для нечетных.",
    },
  ],
};

export default function Lesson() {
  const setTotal = useLessonStore((s) => s.setTotal);
  useEffect(() => {
    setTotal(mockLesson.exercises.length);
  }, [setTotal]);

  const currentIndex = useLessonStore((s) => s.currentIndex);
  const currentExercise = mockLesson.exercises[currentIndex];

  const isCompleted = useLessonStore((s) => s.isCompleted);

  if (isCompleted) return <div>Lesson Completed!</div>;

  return (
    <div className={styles.lesson}>
      <LessonHeader />
      <LessonBody exercise={currentExercise} />
      <LessonFooter exerciseId={currentExercise.id} />
    </div>
  );
}
