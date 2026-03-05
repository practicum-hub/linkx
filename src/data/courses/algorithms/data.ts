import type { AlgorithmsTopic } from "@/types/algorithms";
export type {
  AlgorithmsTopic,
  AlgorithmsUnit,
  ExercisePractice,
  ExerciseTheory,
  UnitExercise,
  UnitType,
} from "@/types/algorithms";
export const algorithmsRoadmap: AlgorithmsTopic[] = [
  {
    id: "foundations",
    title: "Algorithm Foundations",
    desc: "Core algorithm thinking: what algorithms are, how complexity works, and how to reason about loops.",
    completed: ["f-u1"],
    units: [
      {
        id: "f-u1",
        title: "Introduction to Algorithms",
        type: "Lesson",
        level: 0,
        lane: 1,
        requires: [],
        lessons: [
          {
            id: "f-u1-e1-t",
            type: "theory",
            title: "What Is an Algorithm?",
            theory: {
              intro:
                "In fancy words, an algorithm is a finite, well-defined sequence of steps that transforms input into output. Or just simply a mechanism which recieves input, does some steps with it, and then returns output.",
              sections: [
                {
                  title: "Every algorithm has:",
                  text: `
Input вЂ” data it receives
\n
Process вЂ” steps it performs
\n
Output вЂ” result it produces`,
                },
              ],
              tips: [],
            },
          },
          {
            id: "f-u1-e1-p",
            type: "practice",
            title: "What Is an Algorithm?",
            practice: {
              taskTitle: "",
              task: "While it seems that it is logical anyway, it is still one of the most important steps when implementing algorithms: understanding which data you can recieve, and what data you should return: Here is a small practice: given a function which recieves two numbers, summarizes them and returns result:",
              input: "a: number, b: number",
              output: "sum",
              starterCode:
                "function sumTwoNumbers(a: number, b: number): number {\n  return a + b;\n}\n",
              requirements: ["The result should be correct :)"],
              cases: [
                { input: "a = 2, b = 2", output: "4" },
                { input: "a = -47, b = 1018", output: "971" },
              ],
              terminal: {
                cases: [
                  {
                    title: "Case 1",
                    fields: [
                      { name: "a", value: "2" },
                      { name: "b", value: "2" },
                    ],
                  },
                  {
                    title: "Case 2",
                    fields: [
                      { name: "a", value: "-47" },
                      { name: "b", value: "1018" },
                    ],
                  },
                ],
                note: 'Click "Check" to execute your code against these test cases.',
              },
            },
          },
          {
            id: "2-t",
            type: "theory",
            title: "Properties of a Good Algorithm",
            theory: {
              intro: `An algorithm must be: ${`1. Finite

It must terminate.

2. Deterministic

Same input в†’ same output.

3. Unambiguous

Each step must be clearly defined.

4. General

It should work for all valid inputs, not just one example.`}`,
              sections: [],
              tips: [],
            },
          },
        ],
      },
      {
        id: "f-u2",
        title: "Time Complexity",
        type: "Lesson",
        level: 1,
        lane: 0,
        requires: ["f-u1"],
        lessons: [
          {
            id: "f-u2-e1-t",
            type: "theory",
            title: "What Is Time Complexity?",
            theory: {
              intro: `Time complexity measures:

How the runtime grows as the input size increases.

Important:
We donвЂ™t measure seconds.
We measure how performance scales.`,
              sections: [],
              tips: [],
            },
          },
          {
            id: "f-u2-e1-p",
            type: "practice",
            title: "Count Operations and Memory",
            practice: {
              taskTitle: "Complexity Classification",
              task: "Classify time and extra space complexity for each snippet.",
              input: "3 short code snippets",
              output: "pair for each snippet: time + space",
              requirements: [
                "Identify dominant operation.",
                "Ignore constants and lower-order terms.",
                "Return one final class per snippet.",
              ],
              cases: [
                {
                  input: "single for-loop over n",
                  output: "time O(n), space O(1)",
                },
                {
                  input: "nested loops n*n + array of n",
                  output: "time O(n^2), space O(n)",
                },
              ],
            },
          },
        ],
      },

      {
        id: "f-u4",
        title: "Space complexity",
        type: "Practice",
        level: 2,
        lane: 0,
        requires: ["f-u1"],
        lessons: [
          {
            id: "f-u4-e1-t",
            type: "theory",
            title: "What Is Space Complexity?",
            theory: {
              intro: `Space complexity measures:

How much additional memory an algorithm uses.

Memory can come from:

Arrays

Data structures

Recursion stack

Variables`,
              sections: [],
              tips: [],
            },
          },
        ],
      },
      {
        id: "f-u3",
        title: "Big O Notation",
        type: "Practice",
        level: 1,
        lane: 2,
        requires: ["f-u1"],
        lessons: [
          {
            id: "f-u3-e1-t",
            type: "theory",
            title: "What Is Big O?",
            theory: {
              intro:
                "Big O notation describes how runtime or memory grows when input size n increases. It helps compare algorithms by growth trend, not raw milliseconds.",
              sections: [
                {
                  title: "What Big O captures",
                  text: "Big O models asymptotic growth: how fast cost grows for large n. It is most useful when inputs become big enough that scaling dominates constant-time differences.",
                },
                {
                  title: "What we usually ignore",
                  text: "Drop constant factors and lower-order terms. Example: O(3n + 20) simplifies to O(n), and O(n^2 + n) simplifies to O(n^2).",
                },
                {
                  title: "Why worst-case is common",
                  text: "Worst-case gives a safe upper bound. It answers: how bad can this get when input distribution is unknown?",
                },
                {
                  title: "How to read common classes",
                  text: "O(1): constant lookup, O(log n): halving search space, O(n): single pass, O(n log n): efficient sorting, O(n^2): nested scans, O(2^n)/O(n!): combinatorial explosion.",
                },
              ],
              tips: [
                "First identify the dominant operation inside loops/recursion.",
                "For nested loops, multiply dimensions; for sequential blocks, add then keep dominant term.",
                "A loop that halves the problem size each iteration is typically O(log n).",
                "Two separate loops over n are O(n), not O(n^2).",
                "State both time and extra space when comparing solutions.",
              ],
              visualization: {
                title: "Growth Order (Best -> Worst Scaling)",
                nodes: [
                  "O(1)",
                  "O(log n)",
                  "O(n)",
                  "O(n log n)",
                  "O(n^2)",
                  "O(2^n)",
                  "O(n!)",
                ],
              },
            },
          },
          {
            id: "f-u3-e1-p",
            type: "practice",
            title: "Simplify Growth Functions",
            practice: {
              taskTitle: "Big O Ranking",
              task: "Sort candidate solutions from most scalable to least scalable.",
              input: "list of complexity expressions",
              output: "ordered list",
              requirements: [
                "Simplify each expression first.",
                "Resolve ties correctly.",
                "Explain one ordering decision in plain language.",
              ],
              cases: [
                {
                  input: "O(n), O(log n), O(n^2)",
                  output: "O(log n), O(n), O(n^2)",
                },
                {
                  input: "O(5n+1), O(n log n), O(n)",
                  output: "O(n), O(n), O(n log n)",
                },
                {
                  input: "O(n^2 + n), O(1000), O(sqrt(n))",
                  output: "O(1), O(sqrt(n)), O(n^2)",
                },
                {
                  input: "O(2^n), O(n^3), O(n log n)",
                  output: "O(n log n), O(n^3), O(2^n)",
                },
              ],
            },
          },
          {
            id: "f-u3-e2-t",
            type: "theory",
            title: "How To Derive Big O From Code",
            theory: {
              intro:
                "You can derive Big O mechanically by counting how often the dominant operation executes.",
              sections: [
                {
                  title: "Single loop",
                  text: "If a loop runs from 0 to n-1 and body work is constant, complexity is O(n).",
                },
                {
                  title: "Nested loops",
                  text: "If inner loop also runs n times for each outer iteration, total work is n*n = O(n^2).",
                },
                {
                  title: "Shrinking or doubling",
                  text: "When index changes multiplicatively (i *= 2 or n /= 2), number of steps is O(log n).",
                },
                {
                  title: "Recursion rule of thumb",
                  text: "For recursion, estimate number of calls multiplied by work per call. Merge sort: O(log n) levels * O(n) merge work per level = O(n log n).",
                },
              ],
              tips: [
                "Count iterations, not syntax lines.",
                "Average, best, and worst case can differ; specify which one you report.",
                "When unsure, test n=10, 100, 1000 and compare growth of operation count.",
              ],
            },
          },
          {
            id: "f-u3-e2-p",
            type: "practice",
            title: "Classify Snippets by Complexity",
            practice: {
              taskTitle: "Complexity Detective",
              task: "For each code snippet, return its time complexity and one short reason.",
              input: "4 snippets with loops or recursion",
              output: "4 complexity labels + 4 one-line explanations",
              requirements: [
                "Ignore constants and lower-order terms.",
                "Use tightest common class (for example O(n log n), not O(n^2) if not required).",
                "Mention the dominant operation in each explanation.",
              ],
              cases: [
                {
                  input: "for i in 0..n-1: print(i)",
                  output: "O(n) - one pass with constant work per iteration",
                },
                {
                  input: "for i in 0..n-1: for j in 0..n-1: sum += 1",
                  output: "O(n^2) - inner loop runs n times for each outer iteration",
                },
                {
                  input: "while n > 1: n = n / 2",
                  output: "O(log n) - problem size halves each step",
                },
                {
                  input: "binary search on sorted array",
                  output: "O(log n) - search interval is halved each comparison",
                },
              ],
            },
          },
          {
            id: "f-u3-e3-p",
            type: "practice",
            title: "Refactor to Better Complexity",
            practice: {
              taskTitle: "From O(n^2) to O(n)",
              task: "Implement `hasPairWithSum` that returns true if any two numbers sum to target. Start from a brute-force idea, then optimize using a Set.",
              input: "nums: number[], target: number",
              output: "boolean",
              starterCode:
                "export function hasPairWithSum(nums: number[], target: number): boolean {\n  // TODO: target complexity O(n) time, O(n) space\n  return false;\n}\n",
              requirements: [
                "Do not use nested loops in final solution.",
                "Return true immediately once a valid pair is found.",
                "Target complexity: O(n) time and O(n) extra space.",
              ],
              cases: [
                {
                  input: "nums=[2,7,11,15], target=9",
                  output: "true",
                },
                {
                  input: "nums=[1,2,3,4], target=8",
                  output: "false",
                },
                {
                  input: "nums=[3,3], target=6",
                  output: "true",
                  note: "Equal values are allowed if indices are different.",
                },
              ],
              terminal: {
                cases: [
                  {
                    title: "Case 1",
                    fields: [
                      { name: "nums", value: "[2,7,11,15]" },
                      { name: "target", value: "9" },
                    ],
                  },
                  {
                    title: "Case 2",
                    fields: [
                      { name: "nums", value: "[1,2,3,4]" },
                      { name: "target", value: "8" },
                    ],
                  },
                  {
                    title: "Case 3",
                    fields: [
                      { name: "nums", value: "[3,3]" },
                      { name: "target", value: "6" },
                    ],
                  },
                ],
                note: 'Run "Check" to validate correctness on all pair-sum scenarios.',
              },
            },
          },
        ],
      },
      {
        id: "f-u5",
        title: "Recursion and Basic Search",
        type: "Lesson",
        level: 2,
        lane: 2,
        requires: ["f-u2", "f-u3"],
        lessons: [
          {
            id: "f-u5-e1-t",
            type: "theory",
            title: "Linear vs Binary Search",
            theory: {
              intro:
                "Search is a core algorithmic task: pick linear search for unsorted data and binary search for sorted data.",
              sections: [
                {
                  title: "Binary Search Condition",
                  text: "Binary search needs monotonic order and shrinks the search interval each step.",
                },
                {
                  title: "Recursion Base Case",
                  text: "Every recursive function must define when to stop and what to return.",
                },
              ],
              tips: [
                "Validate preconditions before using binary search.",
                "Use low + (high - low) / 2 for mid.",
                "In recursion, define base case before recursive call.",
              ],
            },
          },
          {
            id: "f-u5-e1-p",
            type: "practice",
            title: "Linear vs Binary Search",
            practice: {
              taskTitle: "Search Strategy Drill",
              task: "Implement binary search on a sorted array and compare complexity with linear search.",
              input: "sorted nums: number[], target: number",
              output: "index or -1",
              requirements: [
                "Return exact index if found, else -1.",
                "Keep loop invariant low <= high.",
                "Provide complexity comparison in one sentence.",
              ],
              cases: [
                { input: "nums=[1,3,5,7,9], target=7", output: "3" },
                { input: "nums=[1,3,5,7,9], target=4", output: "-1" },
              ],
            },
          },
        ],
      },
      {
        id: "f-u6",
        title: "Foundation Challenge: Two Sum",
        type: "Checkpoint",
        level: 3,
        lane: 1,
        requires: ["f-u4", "f-u5"],
        lessons: [
          {
            id: "f-u6-e1-t",
            type: "theory",
            title: "End-to-End Intro Challenge",
            theory: {
              intro:
                "Combine core skills: understand the task, choose data structure, design loop logic, and justify complexity.",
              sections: [
                {
                  title: "Plan First",
                  text: "Start with brute force, then optimize to hash map in one pass.",
                },
                {
                  title: "Explain Trade-off",
                  text: "The optimized approach improves time while using extra memory.",
                },
              ],
              tips: [
                "State assumptions clearly.",
                "Test with minimal and edge cases.",
                "Finish with time and space analysis.",
              ],
            },
          },
          {
            id: "f-u6-e1-p",
            type: "practice",
            title: "End-to-End Intro Challenge",
            practice: {
              taskTitle: "Solve Two Sum",
              task: "Given an array and target, return indices of two numbers that add up to target.",
              input: "nums: number[], target: number",
              output: "pair of indices",
              requirements: [
                "Do not reuse the same element twice.",
                "Return any valid pair of indices.",
                "Target solution complexity: O(n) time with hash map.",
              ],
              cases: [
                { input: "nums=[2,7,11,15], target=9", output: "[0,1]" },
                { input: "nums=[3,2,4], target=6", output: "[1,2]" },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "arrays-strings",
    title: "Arrays & Strings",
    desc: "Two pointers, sliding window, and prefix-based reasoning.",
    completed: [],
    units: [
      {
        id: "as-u1",
        title: "Two Pointers Pattern",
        type: "Lesson",
        level: 0,
        lane: 1,
        requires: [],
        lessons: [
          {
            id: "as-u1-e1-t",
            type: "theory",
            title: "Opposite Direction Pointers",
            theory: {
              intro:
                "When data is sorted, opposite-direction pointers can prune search space quickly.",
              sections: [
                {
                  title: "Pointer Movement Rule",
                  text: "Move the pointer that helps approach target value.",
                },
                {
                  title: "Termination Condition",
                  text: "Stop when pointers cross or exact match found.",
                },
              ],
              tips: [
                "Sort first if order is not required.",
                "Keep invariant about searched region.",
                "Avoid re-checking processed pairs.",
              ],
            },
          },
          {
            id: "as-u1-e1-p",
            type: "practice",
            title: "Opposite Direction Pointers",
            practice: {
              taskTitle: "Container With Most Water",
              task: "Use two pointers to compute max area between vertical lines.",
              input: "heights: number[]",
              output: "number",
              requirements: [
                "O(n) time solution.",
                "Update best area at each step.",
                "Move smaller height pointer.",
              ],
              cases: [
                { input: "heights=[1,8,6,2,5,4,8,3,7]", output: "49" },
                { input: "heights=[1,1]", output: "1" },
              ],
            },
          },
          {
            id: "as-u1-e2-t",
            type: "theory",
            title: "Dedup on Sorted Array",
            theory: {
              intro:
                "Two pointers can rewrite arrays in-place while preserving unique values.",
              sections: [
                {
                  title: "Read/Write Pointers",
                  text: "Read scans all values, write stores next unique value.",
                },
                {
                  title: "In-place Guarantee",
                  text: "All writes happen inside original array bounds.",
                },
              ],
              tips: [
                "Initialize write pointer at index 1.",
                "Compare with last unique value.",
                "Return new logical length.",
              ],
            },
          },
          {
            id: "as-u1-e2-p",
            type: "practice",
            title: "Dedup on Sorted Array",
            practice: {
              taskTitle: "Remove Duplicates",
              task: "Remove duplicates from sorted array in-place and return new length.",
              input: "nums: number[] (sorted)",
              output: "number",
              requirements: [
                "O(1) extra memory.",
                "Keep relative order of unique values.",
                "Return count of unique items.",
              ],
              cases: [
                { input: "nums=[1,1,2]", output: "2" },
                { input: "nums=[0,0,1,1,1,2,2,3,3,4]", output: "5" },
              ],
            },
          },
        ],
      },
      {
        id: "as-u2",
        title: "Sliding Window",
        type: "Practice",
        level: 1,
        lane: 0,
        requires: ["as-u1"],
        lessons: [
          {
            id: "as-u2-e1-t",
            type: "theory",
            title: "Fixed Window Sum",
            theory: {
              intro:
                "For fixed window length k, update current sum by removing left and adding right.",
              sections: [
                {
                  title: "Window Transition",
                  text: "newSum = oldSum - nums[left] + nums[right].",
                },
                {
                  title: "Best Tracking",
                  text: "Update maximum after each valid window.",
                },
              ],
              tips: [
                "Build first window before sliding.",
                "Watch index bounds for right pointer.",
                "Track answer incrementally.",
              ],
            },
          },
          {
            id: "as-u2-e1-p",
            type: "practice",
            title: "Fixed Window Sum",
            practice: {
              taskTitle: "Max Sum Subarray of Size K",
              task: "Find the maximum sum of any contiguous subarray of size k.",
              input: "nums: number[], k: number",
              output: "number",
              requirements: [
                "O(n) time complexity.",
                "Use rolling window sum.",
                "Assume k <= nums.length.",
              ],
              cases: [
                { input: "nums=[2,1,5,1,3,2], k=3", output: "9" },
                { input: "nums=[1,1,1,1], k=2", output: "2" },
              ],
            },
          },
          {
            id: "as-u2-e2-t",
            type: "theory",
            title: "Variable Window Constraints",
            theory: {
              intro:
                "Variable windows expand right and shrink left while invariant remains satisfied.",
              sections: [
                {
                  title: "Expand Then Shrink",
                  text: "Grow window until invalid, then shrink until valid again.",
                },
                {
                  title: "Invariant",
                  text: "Keep count/frequency map aligned with current window.",
                },
              ],
              tips: [
                "Use while loop for shrinking.",
                "Update answer only on valid windows.",
                "Track exact invalid condition.",
              ],
            },
          },
          {
            id: "as-u2-e2-p",
            type: "practice",
            title: "Variable Window Constraints",
            practice: {
              taskTitle: "Longest Substring Without Repeating",
              task: "Return the length of the longest substring without duplicate characters.",
              input: "s: string",
              output: "number",
              requirements: [
                "O(n) with character index map.",
                "Move left pointer past duplicate.",
                "Track max window size.",
              ],
              cases: [
                { input: "s='abcabcbb'", output: "3" },
                { input: "s='bbbbb'", output: "1" },
              ],
            },
          },
        ],
      },
      {
        id: "as-u3",
        title: "Prefix Sums",
        type: "Checkpoint",
        level: 1,
        lane: 2,
        requires: ["as-u1"],
        lessons: [
          {
            id: "as-u3-e1-t",
            type: "theory",
            title: "Range Sum Query",
            theory: {
              intro:
                "Prefix sums precompute cumulative totals so range queries become O(1).",
              sections: [
                {
                  title: "Build Prefix",
                  text: "prefix[i] stores sum of first i elements.",
                },
                {
                  title: "Query Formula",
                  text: "sum(l..r) = prefix[r+1] - prefix[l].",
                },
              ],
              tips: [
                "Use prefix length n+1.",
                "Keep indices consistent (inclusive bounds).",
                "Precompute once for many queries.",
              ],
            },
          },
          {
            id: "as-u3-e1-p",
            type: "practice",
            title: "Range Sum Query",
            practice: {
              taskTitle: "Range Sum",
              task: "Answer multiple sum queries on immutable array.",
              input: "nums: number[], queries: [l,r][]",
              output: "number[]",
              requirements: [
                "O(n) preprocessing.",
                "O(1) per query.",
                "Inclusive l and r.",
              ],
              cases: [
                { input: "nums=[1,2,3,4], q=[0,2]", output: "6" },
                { input: "nums=[1,2,3,4], q=[1,3]", output: "9" },
              ],
            },
          },
          {
            id: "as-u3-e2-t",
            type: "theory",
            title: "Prefix + Hash Map",
            theory: {
              intro:
                "Combining prefix sums with frequency maps solves many subarray counting tasks.",
              sections: [
                {
                  title: "Key Observation",
                  text: "If prefix[j]-prefix[i]=k, then subarray i..j-1 sums to k.",
                },
                {
                  title: "Frequency Tracking",
                  text: "Store counts of seen prefix sums for constant-time lookups.",
                },
              ],
              tips: [
                "Initialize map with prefix 0 count 1.",
                "Update answer before incrementing current prefix.",
                "Use map for negative values support.",
              ],
            },
          },
          {
            id: "as-u3-e2-p",
            type: "practice",
            title: "Prefix + Hash Map",
            practice: {
              taskTitle: "Count Subarrays Equal to K",
              task: "Count number of contiguous subarrays whose sum equals k.",
              input: "nums: number[], k: number",
              output: "number",
              requirements: [
                "O(n) solution required.",
                "Support negative numbers.",
                "Use prefix sum + hash map.",
              ],
              cases: [
                { input: "nums=[1,1,1], k=2", output: "2" },
                { input: "nums=[1,2,3], k=3", output: "2" },
              ],
            },
          },
        ],
      },
    ],
  },
];
export function getTopicById(topicId: string) {
  return algorithmsRoadmap.find((topic) => topic.id === topicId);
}
export function getUnitById(topicId: string, unitId: string) {
  return getTopicById(topicId)?.units.find((unit) => unit.id === unitId);
}

