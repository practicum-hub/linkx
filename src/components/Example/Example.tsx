import styles from "./example.module.css";
import ExampleInput from "./ExampleInput/ExampleInput";

export default function Example() {
  return (
    <li className={styles.example}>
      <h2 className={styles.title}>Example 1:</h2>

      <div className={styles.body}>
        <ExampleInput
          name="Input:"
          value="nums = [-1,0,3,5,9,12], target = 9"
        />
        <ExampleInput name="Output:" value="4" />
        <ExampleInput
          name="Explanation:"
          value="9 exists in nums and its index is 4"
        />
      </div>
    </li>
  );
}
