import { defaultExecutionCasesByProblemId } from "@/data/mocks/lesson/execution";
import type { LessonExecutionResult } from "@/types/lesson";

export async function emulateCodeExecution(code: string, problemId: string): Promise<LessonExecutionResult> {
  const testCases = defaultExecutionCasesByProblemId[problemId] ?? defaultExecutionCasesByProblemId["1"];

  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const userRoutine = new Function(`
          ${code}
          return search;
        `)();

        const testResults = testCases.map((testCase) => {
          const actual = userRoutine(...testCase.input);
          return {
            passed: JSON.stringify(actual) === JSON.stringify(testCase.expected),
            input: JSON.stringify(testCase.input),
            expected: JSON.stringify(testCase.expected),
            actual: JSON.stringify(actual),
          };
        });

        resolve({ status: "success", testResults });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Crash!";
        resolve({ status: "error", message });
      }
    }, 500);
  });
}
