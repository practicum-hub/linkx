import type { UnitExercise } from "@/types/algorithms";

export const twoPointersLessons: UnitExercise[] = [
  {
    id: "f-u3-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Two Pointers helps optimize many array/string problems from O(n^2) to O(n), often without extra memory.",
      sections: [
        {
          title: "Context",
          text: "Nested loops are often O(n^2). Hash tables reduce time to O(n) with O(n) space. Two Pointers can keep O(n) while using O(1) extra space in many tasks.",
        },
      ],
      tips: [
        "Compare brute force, hash table, and two pointers by both time and space.",
      ],
    },
  },
  {
    id: "f-u3-e2-t",
    type: "theory",
    title: "2. What Is the Two Pointers Pattern",
    theory: {
      intro:
        "Two indexes move through an array or string to avoid checking every pair.",
      sections: [
        {
          title: "Main idea",
          text: "Instead of O(n^2) pairwise comparison, move pointers strategically so the structure is scanned once or a few times.",
        },
        {
          title: "Typical complexity",
          text: "Time O(n), extra space O(1) for many classic tasks.",
        },
      ],
      tips: [
        "Pointer movement rules are the core of correctness.",
      ],
    },
  },
  {
    id: "f-u3-e3-t",
    type: "theory",
    title: "3. When Two Pointers Works Best",
    theory: {
      intro:
        "This pattern is strongest on sorted arrays, symmetric checks, and pair-search problems.",
      sections: [
        {
          title: "Common signals",
          text: "sorted array, palindrome, find pair, remove duplicates, subarray/substring boundary movement.",
        },
      ],
      tips: [
        "If the input is sorted, always test a two-pointer approach early.",
      ],
    },
  },
  {
    id: "f-u3-e4-t",
    type: "theory",
    title: "4. Opposite Direction Pointers",
    theory: {
      intro:
        "Left starts at the beginning, right at the end, and both move toward center.",
      sections: [
        {
          title: "Palindrome example",
          text: "Compare s[left] and s[right]. If mismatch -> false. Else move left++, right-- until pointers meet.",
        },
        {
          title: "Complexity",
          text: "Time O(n), space O(1).",
        },
      ],
      tips: [
        "Stop early on mismatch to save work.",
      ],
    },
  },
  {
    id: "f-u3-e5-t",
    type: "theory",
    title: "5. Same Direction Pointers (Slow/Fast)",
    theory: {
      intro:
        "Both pointers move left-to-right with different roles: one scans, one writes/anchors.",
      sections: [
        {
          title: "Remove duplicates (sorted)",
          text: "fast scans all items, slow tracks last unique position and writes next unique value in place.",
        },
      ],
      tips: [
        "Great for in-place compaction problems.",
      ],
    },
  },
  {
    id: "f-u3-e6-t",
    type: "theory",
    title: "6. Two Sum: Three Approaches",
    theory: {
      intro:
        "The same problem can be solved by brute force, hash map, or two pointers (on sorted input).",
      sections: [
        {
          title: "Comparison",
          text: "Brute force: time O(n^2), space O(1). Hash map: time O(n), space O(n). Two pointers on sorted array: time O(n), space O(1).",
        },
      ],
      tips: [
        "Pick method based on input properties and memory constraints.",
      ],
    },
  },
  {
    id: "f-u3-e7-t",
    type: "theory",
    title: "7. Key Takeaway",
    theory: {
      intro:
        "Two pointers is a prime example of time-vs-space trade-off decisions in algorithms.",
      sections: [
        {
          title: "Trade-off summary",
          text: "Sometimes we spend memory for speed (hash tables). Sometimes we use movement strategy to keep speed and save memory (two pointers).",
        },
      ],
      tips: [
        "Always state both time and extra space in final answer.",
      ],
    },
  },
  {
    id: "f-u3-e8-p",
    type: "practice",
    title: "8. Practice Problems",
    practice: {
      taskTitle: "Two Pointers Practice Set",
      task: "Apply two pointers to palindrome, pair search, reversal, and in-place dedup tasks.",
      input: "Strings and arrays from each prompt",
      output: "Correct result + complexity for each problem",
      requirements: [
        "Solve Valid Palindrome with opposite-direction pointers.",
        "Solve Two Sum II on sorted array in O(n).",
        "Include Reverse String and Remove Duplicates from Sorted Array.",
        "Attempt bonus: Container With Most Water.",
      ],
      cases: [
        { input: "Valid Palindrome: \"racecar\"", output: "true" },
        { input: "Two Sum II: nums=[2,7,11,15], target=9", output: "[0,1]" },
        { input: "Reverse String: \"hello\"", output: "\"olleh\"" },
        { input: "Remove Duplicates: [1,1,2,2,3]", output: "[1,2,3]" },
        { input: "Bonus Container: [1,8,6,2,5,4,8,3,7]", output: "49" },
      ],
    },
  },
];
