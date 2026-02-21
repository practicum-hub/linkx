export type UnitType = "Lesson" | "Quiz" | "Practice" | "Checkpoint";

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
  requirements: string[];
  cases: { input: string; output: string; note?: string }[];
};

export type UnitExercise = {
  id: string;
  title: string;
  theory: ExerciseTheory;
  practice: ExercisePractice;
};

export type AlgorithmsUnit = {
  id: string;
  title: string;
  type: UnitType;
  level: number;
  lane: number;
  requires: string[];
  exercises: UnitExercise[];
};

export type AlgorithmsTopic = {
  id: string;
  title: string;
  desc: string;
  completed: string[];
  units: AlgorithmsUnit[];
};
