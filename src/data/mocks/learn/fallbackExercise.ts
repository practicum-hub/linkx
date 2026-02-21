import type { UnitExercise } from "@/types/algorithms";

export const fallbackExercise: UnitExercise = {
  id: "fallback",
  title: "Algorithm Exercise",
  theory: {
    intro: "Learn the concept, run a dry trace, and then apply it in code.",
    sections: [
      {
        title: "Core Idea",
        text: "Understand the model first, then map constraints to an implementation.",
      },
    ],
    tips: ["Understand concept", "Trace examples", "Implement correctly"],
    visualization: {
      title: "Concept Flow",
      nodes: ["Concept", "Trace", "Implement", "Validate"],
    },
  },
  practice: {
    taskTitle: "Practice Task",
    task: "Solve the task using the code editor and validate with test cases.",
    input: "example input",
    output: "example output",
    requirements: ["Read constraints", "Handle edge cases", "Submit passing solution"],
    cases: [{ input: "example input", output: "example output" }],
  },
};
