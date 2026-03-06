import type { UnitExercise } from "@/types/algorithms";

export const slidingWindowLessons: UnitExercise[] = [
  {
    id: "f-u5-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Sliding Window solves subarray and substring problems in O(n) where naive enumeration is often O(n^2).",
      sections: [
        {
          title: "Why this pattern",
          text: "After Two Pointers, the next step is handling consecutive ranges efficiently without recomputing from scratch.",
        },
      ],
      tips: [
        "If the task says longest/shortest/maximum over consecutive elements, consider sliding window first.",
      ],
    },
  },
  {
    id: "f-u5-e2-t",
    type: "theory",
    title: "2. What Is Sliding Window",
    theory: {
      intro:
        "Maintain a range (window) and move it forward across an array or string.",
      sections: [
        {
          title: "Core idea",
          text: "Reuse previous window work instead of recalculating every candidate range.",
        },
        {
          title: "Example",
          text: "For [1,2,3,4,5] and size 3: [1,2,3], [2,3,4], [3,4,5].",
        },
      ],
      tips: [
        "Track what enters and what leaves the window each step.",
      ],
    },
  },
  {
    id: "f-u5-e3-t",
    type: "theory",
    title: "3. Fixed Size Window",
    theory: {
      intro:
        "Fixed window keeps length k constant while sliding through the input.",
      sections: [
        {
          title: "Classic task",
          text: "Maximum sum of k consecutive elements.",
        },
        {
          title: "Update rule",
          text: "windowSum += incoming; windowSum -= outgoing.",
        },
        {
          title: "Complexity",
          text: "O(n) time instead of O(n * k).",
        },
      ],
      tips: [
        "Initialize first full window before sliding.",
      ],
    },
  },
  {
    id: "f-u5-e4-t",
    type: "theory",
    title: "4. Dynamic Window (Expand/Shrink)",
    theory: {
      intro:
        "Dynamic window changes size based on a validity constraint.",
      sections: [
        {
          title: "Mechanics",
          text: "Move right to expand. If constraint breaks, move left until valid again.",
        },
        {
          title: "Example",
          text: "Longest substring without repeating characters.",
        },
      ],
      tips: [
        "Define the window validity condition explicitly.",
      ],
    },
  },
  {
    id: "f-u5-e5-t",
    type: "theory",
    title: "5. Example: Longest Unique Substring",
    theory: {
      intro:
        "Use left/right pointers and a hash set (or map) to keep current window unique.",
      sections: [
        {
          title: "Pseudo flow",
          text: "While s[right] already in set: remove s[left], left++. Then add s[right] and update best length.",
        },
        {
          title: "Complexity",
          text: "Time O(n), space O(n).",
        },
      ],
      tips: [
        "Each character is added/removed at most once in the two-pointer pass.",
      ],
    },
  },
  {
    id: "f-u5-e6-t",
    type: "theory",
    title: "6. When to Use Sliding Window",
    theory: {
      intro:
        "Sliding window fits problems over contiguous ranges in arrays/strings.",
      sections: [
        {
          title: "Common signals",
          text: "subarray, substring, consecutive, longest, shortest, maximum, minimum.",
        },
      ],
      tips: [
        "If order and contiguity matter, window patterns are strong candidates.",
      ],
    },
  },
  {
    id: "f-u5-e7-t",
    type: "theory",
    title: "7. Fixed vs Dynamic",
    theory: {
      intro:
        "Choose fixed windows for exact-length ranges and dynamic windows for constraint-based ranges.",
      sections: [
        {
          title: "Fixed window",
          text: "Example: maximum sum subarray of size k.",
        },
        {
          title: "Dynamic window",
          text: "Example: longest substring without repeating characters.",
        },
      ],
      tips: [
        "Window size known -> fixed. Constraint-driven length -> dynamic.",
      ],
    },
  },
  {
    id: "f-u5-e8-p",
    type: "practice",
    title: "8. Practice Problems",
    practice: {
      taskTitle: "Sliding Window Practice Set",
      task: "Solve fixed and dynamic window tasks and report complexity.",
      input: "Arrays/strings from each prompt",
      output: "Correct answer for each problem + complexity",
      requirements: [
        "Maximum Sum Subarray (k=3) for [2,1,5,1,3,2] -> 9.",
        "Longest Substring Without Repeating for \"abcabcbb\" -> 3.",
        "Minimum Size Subarray Sum for [2,3,1,2,4,3], target=7 -> 2.",
        "Include Longest Repeating Character Replacement and bonus Minimum Window Substring.",
      ],
      cases: [
        { input: "Max Sum Subarray: nums=[2,1,5,1,3,2], k=3", output: "9" },
        { input: "Longest Unique Substring: \"abcabcbb\"", output: "3" },
        { input: "Min Size Subarray Sum: nums=[2,3,1,2,4,3], target=7", output: "2" },
        { input: "Longest Repeating Character Replacement: s=\"AABABBA\"", output: "4 (for k=1)" },
        { input: "Bonus Minimum Window Substring: s=\"ADOBECODEBANC\", t=\"ABC\"", output: "\"BANC\"" },
      ],
    },
  },
];
