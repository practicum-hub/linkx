import { algorithmsRoadmap, getTopicById, getUnitById } from "@/data/mocks/courses/algorithmsRoadmap";
import { fallbackExercise } from "@/data/mocks/learn/fallbackExercise";
import type { UnitExercise } from "@/types/algorithms";

export type LessonMode = "theory" | "practice";

export type LearnSession = {
  mode: LessonMode;
  safeStep: number;
  total: number;
  progress: number;
  exerciseIndex: number;
  lesson: UnitExercise;
  selectedTopic: (typeof algorithmsRoadmap)[number];
  selectedUnit: (typeof algorithmsRoadmap)[number]["units"][number];
  nextHref: string;
  prevHref: string;
};

export function getLearnSession(params: {
  topicFromQuery: string;
  unitFromQuery: string;
  stepFromQuery: string;
  modeFromQuery: string | null;
}): LearnSession {
  const currentStep = Number(params.stepFromQuery ?? "1");
  const selectedTopic = getTopicById(params.topicFromQuery) ?? algorithmsRoadmap[0];
  const selectedUnit = getUnitById(selectedTopic.id, params.unitFromQuery) ?? selectedTopic.units[0];

  const exercises = selectedUnit?.exercises ?? [fallbackExercise];
  const total = Math.max(2, exercises.length * 2);
  const safeStep = Number.isFinite(currentStep) ? Math.min(Math.max(currentStep, 1), total) : 1;
  const exerciseIndex = Math.floor((safeStep - 1) / 2);
  const lesson = exercises[exerciseIndex] ?? fallbackExercise;

  const computedMode: LessonMode = safeStep % 2 === 0 ? "practice" : "theory";
  const mode: LessonMode =
    params.modeFromQuery === "theory" || params.modeFromQuery === "practice" ? params.modeFromQuery : computedMode;

  const progress = Math.min(100, Math.round((safeStep / total) * 100));
  const nextStep = Math.min(total, safeStep + 1);
  const prevStep = Math.max(1, safeStep - 1);
  const nextMode: LessonMode = nextStep % 2 === 0 ? "practice" : "theory";
  const prevMode: LessonMode = prevStep % 2 === 0 ? "practice" : "theory";
  const nextHref = `/learn?topic=${selectedTopic.id}&unit=${selectedUnit.id}&step=${nextStep}&total=${total}&mode=${nextMode}`;
  const prevHref = `/learn?topic=${selectedTopic.id}&unit=${selectedUnit.id}&step=${prevStep}&total=${total}&mode=${prevMode}`;

  return {
    mode,
    safeStep,
    total,
    progress,
    exerciseIndex,
    lesson,
    selectedTopic,
    selectedUnit,
    nextHref,
    prevHref,
  };
}
