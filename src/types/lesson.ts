export type ExecutionTestCase = {
  input: unknown[];
  expected: unknown;
};

export type ExecutionCaseResult = {
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
};

export type LessonExecutionSuccess = {
  status: "success";
  testResults: ExecutionCaseResult[];
};

export type LessonExecutionError = {
  status: "error";
  message: string;
};

export type LessonExecutionResult = LessonExecutionSuccess | LessonExecutionError;
