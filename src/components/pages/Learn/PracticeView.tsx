"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CodePanel from "@/components/Lesson/CodePanel/CodePanel";
import type { PracticeExercise } from "@/types/algorithms";
import styles from "@/app/(main)/learn/page.module.css";

type Props = {
  lesson: PracticeExercise;
  isDark: boolean;
  nextHref: string;
};

type QuizLessonProps = {
  lesson: PracticeExercise;
  nextHref: string;
};

type SuccessModalProps = {
  xp: number;
  message: string;
  onClose: () => void;
  onContinue: () => void;
};

function PracticeSuccessModal({ xp, message, onClose, onContinue }: SuccessModalProps) {
  return (
    <div className={styles.quizSuccessOverlay} role="dialog" aria-modal="true" aria-label="Correct answer">
      <button type="button" className={styles.quizSuccessClose} aria-label="Close success dialog" onClick={onClose}>
        x
      </button>
      <div className={styles.quizSuccessModal}>
        <span className={styles.quizSuccessIcon} aria-hidden="true" />
        <p className={styles.quizSuccessXp}>+{xp} XP</p>
        <p className={styles.quizSuccessText}>{message}</p>
        <p className={styles.quizSuccessHint}>Press Enter To</p>
        <button type="button" className={styles.quizSuccessBtn} onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

function QuizPracticeLesson({ lesson, nextHref }: QuizLessonProps) {
  const router = useRouter();
  const quiz = lesson.practice.quiz!;
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (isSuccessOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const option = quiz.options.find((item) => item.hotkey === event.key);
      if (!option) {
        return;
      }

      setSelectedOptionId(option.id);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSuccessOpen, quiz]);

  useEffect(() => {
    if (!isSuccessOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      router.push(nextHref);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSuccessOpen, nextHref, router]);

  const isCorrect = selectedOptionId === quiz.correctOptionId;

  return (
    <section className={styles.quizLayout}>
      <article className={styles.quizCard}>
        <div className={styles.quizPromptWrap}>
          <h2 className={styles.quizTaskTitle}>{lesson.practice.taskTitle}</h2>
          <p className={styles.quizPrompt}>{quiz.prompt}</p>
          <p className={styles.quizQuestion}>{quiz.question}</p>
        </div>

        <div className={styles.quizStepBar}>
          <div className={styles.quizStepLabelWrap}>
            <span className={styles.quizStepIcon} aria-hidden="true" />
            <span className={styles.quizStepLabel}>Answer the question</span>
          </div>
          <span className={styles.quizXpBadge}>{quiz.xp ?? 50}XP</span>
        </div>

        <div className={styles.quizAnswersSection}>
          <h3 className={styles.quizAnswersTitle}>Possible Answers</h3>
          <p className={styles.quizAnswersSubtitle}>Select one answer</p>

          <div className={styles.quizOptions}>
            {quiz.options.map((option, index) => {
              const isActive = option.id === selectedOptionId;
              const isOptionCorrect = option.id === quiz.correctOptionId;
              const showCorrect = isSubmitted && isOptionCorrect;
              const showWrong = isSubmitted && isActive && !isOptionCorrect;

              return (
                <button
                  key={option.id}
                  type="button"
                  className={`${styles.quizOption} ${isActive ? styles.quizOptionActive : ""} ${
                    showCorrect ? styles.quizOptionCorrect : ""
                  } ${showWrong ? styles.quizOptionWrong : ""}`}
                  onClick={() => setSelectedOptionId(option.id)}
                >
                  <span className={styles.quizOptionLeft}>
                    <span className={styles.quizRadio} aria-hidden="true" />
                    <span>{option.text}</span>
                  </span>
                  <span className={styles.quizHotkey}>
                    <span>Press</span>
                    <strong>{option.hotkey ?? String(index + 1)}</strong>
                  </span>
                </button>
              );
            })}
          </div>

          <div className={styles.quizActions}>
            <button type="button" className={styles.quizHintBtn} onClick={() => setShowHint((value) => !value)}>
              Take Hint (-15 XP)
            </button>
            <button
              type="button"
              className={styles.quizSubmitBtn}
              disabled={!selectedOptionId}
              onClick={() => {
                setIsSubmitted(true);
                if (isCorrect) {
                  setIsSuccessOpen(true);
                }
              }}
            >
              Submit Answer
            </button>
          </div>

          {showHint && quiz.hint ? <p className={styles.quizHint}>{quiz.hint}</p> : null}
          {isSubmitted ? (
            <p className={`${styles.quizFeedback} ${isCorrect ? styles.quizFeedbackCorrect : styles.quizFeedbackWrong}`}>
              {isCorrect ? "Correct. You can move to the next lesson." : "Incorrect. Review the prompt and try again."}
            </p>
          ) : null}
        </div>
      </article>

      {isSuccessOpen ? (
        <PracticeSuccessModal
          xp={quiz.xp ?? 50}
          message={`Nice work! ${quiz.options.find((option) => option.id === quiz.correctOptionId)?.text} is the right answer. Keep it up!`}
          onClose={() => setIsSuccessOpen(false)}
          onContinue={() => router.push(nextHref)}
        />
      ) : null}
    </section>
  );
}

export default function PracticeView({ lesson, isDark, nextHref }: Props) {
  const router = useRouter();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    if (!isSuccessOpen || lesson.practice.quiz) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      router.push(nextHref);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSuccessOpen, lesson.practice.quiz, nextHref, router]);

  if (lesson.practice.quiz) {
    return <QuizPracticeLesson key={lesson.id} lesson={lesson} nextHref={nextHref} />;
  }

  return (
    <section className={styles.practiceLayout}>
      <article className={styles.practiceTask}>
        <h2 className={styles.practiceTitle}>{lesson.practice.taskTitle}</h2>
        <p className={styles.practiceText}>{lesson.practice.task}</p>

        <div className={styles.ioGrid}>
          <div className={styles.ioCard}>
            <p className={styles.ioLabel}>Input</p>
            <p className={styles.ioValue}>{lesson.practice.input}</p>
          </div>
          <div className={styles.ioCard}>
            <p className={styles.ioLabel}>Output</p>
            <p className={styles.ioValue}>{lesson.practice.output}</p>
          </div>
        </div>

        <h3 className={styles.practiceBlockTitle}>Requirements</h3>
        <ul className={styles.practiceList}>
          {lesson.practice.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className={styles.practiceBlockTitle}>Test Cases</h3>
        <div className={styles.cases}>
          {lesson.practice.cases.map((example) => (
            <div key={`${example.input}-${example.output}`} className={styles.caseCard}>
              <p>
                <strong>Input:</strong> {example.input}
              </p>
              <p>
                <strong>Output:</strong> {example.output}
              </p>
              {example.note ? <p className={styles.caseNote}>{example.note}</p> : null}
            </div>
          ))}
        </div>
      </article>

      <div className={styles.codePanelWrap}>
        <CodePanel
          className={styles.embeddedCodePanel}
          style={{ width: "100%" }}
          isDark={isDark}
          lessonId={lesson.id}
          starterCode={lesson.practice.starterCode}
          terminalCases={lesson.practice.terminal?.cases}
          terminalNote={lesson.practice.terminal?.note}
          onSubmitAnswer={() => setIsSuccessOpen(true)}
        />
      </div>

      {isSuccessOpen ? (
        <PracticeSuccessModal
          xp={100}
          message="Nice work! Your solution has been submitted. Keep the pace and move to the next lesson."
          onClose={() => setIsSuccessOpen(false)}
          onContinue={() => router.push(nextHref)}
        />
      ) : null}
    </section>
  );
}
