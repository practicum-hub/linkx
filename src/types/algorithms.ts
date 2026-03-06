export type UnitType = "Lesson" | "Quiz" | "Practice" | "Checkpoint";
export type ExerciseType = "theory" | "practice";

export type ExerciseTheory = {
  intro: string;
  sections: { title: string; text: string }[];
  tips: string[];
  visualization?: {
    title: string;
    nodes: string[];
  };
};

export type ExercisePractice = {
  taskTitle: string;
  task: string;
  input: string;
  output: string;
  starterCode?: string;
  requirements: string[];
  cases: { input: string; output: string; note?: string }[];
  terminal?: {
    cases: ExerciseTerminalCase[];
    note?: string;
  };
  quiz?: {
    prompt: string;
    question: string;
    options: {
      id: string;
      text: string;
      hotkey?: string;
    }[];
    correctOptionId: string;
    xp?: number;
    hint?: string;
  };
};

export type ExerciseTerminalCase = {
  title: string;
  fields: {
    name: string;
    value: string;
  }[];
};

export type TheoryExercise = {
  id: string;
  title: string;
  type: "theory";
  theory: ExerciseTheory;
};

export type PracticeExercise = {
  id: string;
  title: string;
  type: "practice";
  practice: ExercisePractice;
};

export type UnitExercise = TheoryExercise | PracticeExercise;

export type AlgorithmsUnit = {
  id: string;
  title: string;
  type: UnitType;
  level: number;
  lane: number;
  requires: string[];
  lessons?: UnitExercise[];
  exercises?: UnitExercise[];
};

export type AlgorithmsTopic = {
  id: string;
  title: string;
  desc: string;
  completed: string[];
  units: AlgorithmsUnit[];
};
