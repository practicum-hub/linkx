import type { AlgorithmsUnit, UnitExercise } from "@/types/algorithms";

export function getUnitLessons(unit?: AlgorithmsUnit): UnitExercise[] {
  if (!unit) {
    return [];
  }

  if (unit.lessons?.length) {
    return unit.lessons;
  }

  if (unit.exercises?.length) {
    return unit.exercises;
  }

  return [];
}
