import type { ExecutionTestCase } from "@/types/lesson";

export const defaultExecutionCasesByProblemId: Record<string, ExecutionTestCase[]> = {
  "1": [
    { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
    { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 },
  ],
};
