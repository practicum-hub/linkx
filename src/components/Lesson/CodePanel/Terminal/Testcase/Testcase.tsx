import Case from "./Case/Case";
import styles from "./testcase.module.css";
import type { ExerciseTerminalCase } from "@/types/algorithms";

type Props = {
  cases?: ExerciseTerminalCase[];
  note?: string;
};

const defaultCases: ExerciseTerminalCase[] = [
  {
    title: "Case 1",
    fields: [
      { name: "nums", value: "[-1, 0, 3, 5, 9, 12]" },
      { name: "target", value: "9" },
    ],
  },
  {
    title: "Case 2",
    fields: [
      { name: "nums", value: "[-1, 0, 3, 5, 9, 12]" },
      { name: "target", value: "9" },
    ],
  },
];

export default function Testcase({ cases, note }: Props) {
  const resolvedCases = cases && cases.length > 0 ? cases : defaultCases;

  return (
    <div className={styles.testcase}>
      <div className={styles.cases}>
        {resolvedCases.map((item, index) => (
          <Case key={`${item.title}-${index}`} title={item.title || `Case ${index + 1}`} fields={item.fields} />
        ))}
      </div>

      <p className={styles.text}>{note || 'Click "Check" to execute your code against these test cases.'}</p>
    </div>
  );
}
