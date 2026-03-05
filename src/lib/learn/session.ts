import { algorithmsRoadmap, getTopicById, getUnitById } from "@/data/mocks/courses/algorithmsRoadmap";
import { fallbackExercise } from "@/data/mocks/learn/fallbackExercise";
import { getUnitLessons } from "@/lib/learn/lessons";
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
  topicId: string;
  unitId: string;
  step: string;
}): LearnSession {
  const currentStep = Number(params.step ?? "1");
  const selectedTopic = getTopicById(params.topicId) ?? algorithmsRoadmap[0];
  const selectedUnit = getUnitById(selectedTopic.id, params.unitId) ?? selectedTopic.units[0];

  const lessons = getUnitLessons(selectedUnit);
  const total = Math.max(1, lessons.length);
  const safeStep = Number.isFinite(currentStep) ? Math.min(Math.max(currentStep, 1), total) : 1;
  const exerciseIndex = safeStep - 1;
  const lesson = lessons[exerciseIndex] ?? fallbackExercise;

  const mode: LessonMode = lesson.type;

  const progress = Math.min(100, Math.round((safeStep / total) * 100));
  const nextStep = Math.min(total, safeStep + 1);
  const prevStep = Math.max(1, safeStep - 1);
  const nextHref = `/learn/${selectedTopic.id}/${selectedUnit.id}/${nextStep}`;
  const prevHref = `/learn/${selectedTopic.id}/${selectedUnit.id}/${prevStep}`;

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
