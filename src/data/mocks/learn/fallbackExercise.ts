import type { UnitExercise } from "@/types/algorithms";

export const fallbackExercise: UnitExercise = {
  id: "fallback",
  title: "Algorithm Exercise",
  type: "theory",
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
};
