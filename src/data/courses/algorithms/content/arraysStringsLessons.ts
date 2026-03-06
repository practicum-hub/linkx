import type { UnitExercise } from "@/types/algorithms";

export const arraysStringsLessons: UnitExercise[] = [
  {
    id: "as-u1-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Arrays and strings are core data structures in programming. In most languages, a string is effectively an array of characters.",
      sections: [
        {
          title: "Why strings are grouped with arrays",
          text: "\"hello\" can be seen as ['h', 'e', 'l', 'l', 'o'], so many techniques are shared.",
        },
        {
          title: "Why this topic is critical",
          text: "A large part of algorithmic tasks includes arrays or strings: searching, filtering, sorting, and text processing.",
        },
      ],
      tips: [
        "Master index-based thinking early.",
        "Track both correctness and complexity.",
      ],
    },
  },
  {
    id: "as-u1-e2-t",
    type: "theory",
    title: "2. Array Structure",
    theory: {
      intro:
        "Arrays are written with square brackets and contain elements separated by commas.",
      sections: [
        {
          title: "Indexes start at zero",
          text: "For [\"Anton\", \"John\", \"Alex\"]: index 0 -> Anton, 1 -> John, 2 -> Alex.",
        },
        {
          title: "Supported element types",
          text: "Arrays can store numbers, strings, booleans, objects, and even nested arrays.",
        },
        {
          title: "Why random access is fast",
          text: "Arrays are stored contiguously, so array[index] is O(1) regardless of size.",
        },
      ],
      tips: [
        "Be precise with index boundaries.",
        "Use O(1) access to avoid unnecessary scans.",
      ],
    },
  },
  {
    id: "as-u1-e3-t",
    type: "theory",
    title: "3. Array Iteration",
    theory: {
      intro:
        "Iteration means scanning array elements one by one. It is the most common array operation.",
      sections: [
        {
          title: "Example task",
          text: "Scan users and collect ids where status == \"inactive\".",
        },
        {
          title: "Complexity",
          text: "Worst-case time is O(n) because each element may be checked. If you store matching ids in a new array, extra space is O(n).",
        },
        {
          title: "Can unsorted search be faster?",
          text: "For a plain unsorted array, the lower bound is O(n). Better lookup usually needs another structure such as a hash table.",
        },
      ],
      tips: [
        "When filtering, always account for output array space.",
        "Linear scan is often optimal on unsorted input.",
      ],
    },
  },
  {
    id: "as-u1-e4-t",
    type: "theory",
    title: "4. Important Array Operations",
    theory: {
      intro:
        "Core array operations have different complexity characteristics that directly affect performance.",
      sections: [
        {
          title: "Access",
          text: "array[index] -> O(1).",
        },
        {
          title: "Search",
          text: "Find by value in unsorted array -> O(n).",
        },
        {
          title: "Insert in middle",
          text: "Requires shifting elements -> O(n).",
        },
        {
          title: "Delete from middle",
          text: "Also requires shifting -> O(n).",
        },
      ],
      tips: [
        "Prefer appends over middle inserts when possible.",
        "Know operation cost before picking a structure.",
      ],
    },
  },
  {
    id: "as-u1-e5-t",
    type: "theory",
    title: "5. Dynamic Arrays",
    theory: {
      intro:
        "Many language arrays are dynamic (JavaScript arrays, Python lists, Java ArrayList, C++ vector).",
      sections: [
        {
          title: "Resizing behavior",
          text: "When capacity is full, runtime allocates a larger array and copies elements (for example 4 -> 8 -> 16 -> 32).",
        },
        {
          title: "Amortized append",
          text: "Because resizing is occasional, append is O(1) amortized.",
        },
      ],
      tips: [
        "Amortized complexity is average over many operations.",
        "Occasional expensive resizes do not change append to O(n) per operation.",
      ],
    },
  },
  {
    id: "as-u1-e6-t",
    type: "theory",
    title: "6. Strings",
    theory: {
      intro:
        "A string is a sequence of characters and can be processed similarly to an array.",
      sections: [
        {
          title: "Indexing",
          text: "For \"hello\": 0->h, 1->e, 2->l, 3->l, 4->o.",
        },
        {
          title: "Iteration",
          text: "You can loop through each character to solve tasks such as counting, reversal, palindrome checks, and substring search.",
        },
      ],
      tips: [
        "Treat string tasks like index problems first.",
        "Watch out for immutable string behavior in some languages.",
      ],
    },
  },
  {
    id: "as-u1-e7-t",
    type: "theory",
    title: "7. Practice Walkthrough",
    theory: {
      intro:
        "Given users with gender field, iterate and classify values while analyzing complexity.",
      sections: [
        {
          title: "Task idea",
          text: "Scan users, inspect gender, and return classification result based on conditions.",
        },
        {
          title: "Complexity answer",
          text: "Time: O(n), because each element can be visited once. Space: O(1), if no additional collection is created.",
        },
      ],
      tips: [
        "Always separate time and extra space analysis.",
        "If no new data structure is built, space is often O(1).",
      ],
    },
  },
  {
    id: "as-u1-e8-t",
    type: "theory",
    title: "8. Array Methods in Real Coding",
    theory: {
      intro:
        "Array methods speed up daily work but do not replace understanding of underlying complexity.",
      sections: [
        {
          title: "Mutation methods",
          text: "push, pop, unshift, shift.",
        },
        {
          title: "Iteration helpers",
          text: "map, filter, reduce.",
        },
        {
          title: "Example",
          text: "users.filter((user) => user.gender === \"male\")",
        },
      ],
      tips: [
        "Know helper semantics before chaining them.",
        "In interviews, be ready to implement logic with loops and indexes.",
      ],
    },
  },
  {
    id: "as-u1-e9-t",
    type: "theory",
    title: "9. Classic Array Problems",
    theory: {
      intro:
        "Problem progression should increase difficulty gradually: fundamentals -> logical reasoning -> interview-style tasks.",
      sections: [
        {
          title: "Easy",
          text: "Find Maximum, Reverse Array, Contains Duplicate.",
        },
        {
          title: "Medium",
          text: "Two Sum, Move Zeroes, Merge Sorted Arrays.",
        },
        {
          title: "String focus",
          text: "Reverse String, Valid Palindrome, Longest Common Prefix.",
        },
      ],
      tips: [
        "Progressive difficulty prevents steep learning jumps.",
        "Keep complexity analysis part of every solution.",
      ],
    },
  },
  {
    id: "as-u1-e10-p",
    type: "practice",
    title: "Practice: Find Maximum",
    practice: {
      taskTitle: "Level 1 - Find Maximum",
      task: "Iterate through an array and return the largest value.",
      input: "nums: number[]",
      output: "number",
      requirements: [
        "Use a loop and a tracking variable.",
        "Do not use sort or Math.max on the full array.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "[3,7,2,9,5]", output: "9" },
        { input: "[-5,-2,-11]", output: "-2" },
      ],
    },
  },
  {
    id: "as-u1-e11-p",
    type: "practice",
    title: "Practice: Count Specific Value",
    practice: {
      taskTitle: "Level 1 - Count Specific Value",
      task: "Count how many times value 2 appears in the array.",
      input: "nums: number[]",
      output: "number",
      requirements: [
        "Single pass preferred.",
        "Use a counter variable.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "[1,2,2,3,2,4]", output: "3" },
        { input: "[2,2,2]", output: "3" },
      ],
    },
  },
  {
    id: "as-u1-e12-p",
    type: "practice",
    title: "Practice: Reverse Array",
    practice: {
      taskTitle: "Level 1 - Reverse Array",
      task: "Reverse an array manually using indexes.",
      input: "nums: number[]",
      output: "number[]",
      requirements: [
        "Do not use reverse().",
        "Preserve all elements.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "[1,2,3,4]", output: "[4,3,2,1]" },
        { input: "[5]", output: "[5]" },
      ],
    },
  },
  {
    id: "as-u1-e13-p",
    type: "practice",
    title: "Practice: Contains Duplicate",
    practice: {
      taskTitle: "Level 2 - Contains Duplicate",
      task: "Check whether any value appears at least twice.",
      input: "nums: number[]",
      output: "boolean",
      requirements: [
        "Start with brute-force approach.",
        "Return true immediately when duplicate is found.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "[1,2,3,1]", output: "true" },
        { input: "[1,2,3,4]", output: "false" },
      ],
    },
  },
  {
    id: "as-u1-e14-p",
    type: "practice",
    title: "Practice: Move Zeroes",
    practice: {
      taskTitle: "Level 2 - Move Zeroes",
      task: "Move all zeroes to the end while keeping order of non-zero values.",
      input: "nums: number[]",
      output: "number[]",
      requirements: [
        "Preserve non-zero relative order.",
        "Do not use sort().",
        "State time and space complexity.",
      ],
      cases: [
        { input: "[0,1,0,3,12]", output: "[1,3,12,0,0]" },
        { input: "[0,0,1]", output: "[1,0,0]" },
      ],
    },
  },
  {
    id: "as-u1-e15-p",
    type: "practice",
    title: "Practice: Reverse String",
    practice: {
      taskTitle: "Level 2 - Reverse String",
      task: "Reverse a string manually.",
      input: "s: string",
      output: "string",
      requirements: [
        "Do not use built-in reverse helpers.",
        "Use indexes or two pointers.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "\"hello\"", output: "\"olleh\"" },
        { input: "\"a\"", output: "\"a\"" },
      ],
    },
  },
  {
    id: "as-u1-e16-p",
    type: "practice",
    title: "Practice: Valid Palindrome",
    practice: {
      taskTitle: "Level 3 - Valid Palindrome",
      task: "Check whether a string reads the same forward and backward.",
      input: "s: string",
      output: "boolean",
      requirements: [
        "Compare symmetric characters.",
        "Stop early on first mismatch.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "\"racecar\"", output: "true" },
        { input: "\"hello\"", output: "false" },
      ],
    },
  },
  {
    id: "as-u1-e17-p",
    type: "practice",
    title: "Practice: Two Sum (Brute Force)",
    practice: {
      taskTitle: "Level 3 - Two Sum",
      task: "Find indices of two numbers that add up to target using brute-force first.",
      input: "nums: number[], target: number",
      output: "number[]",
      requirements: [
        "Start with nested loops approach.",
        "Return indices of one valid pair.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "nums=[2,7,11,15], target=9", output: "[0,1]" },
        { input: "nums=[3,2,4], target=6", output: "[1,2]" },
      ],
    },
  },
  {
    id: "as-u1-e18-p",
    type: "practice",
    title: "Bonus: Longest Common Prefix",
    practice: {
      taskTitle: "Bonus Challenge - Longest Common Prefix",
      task: "Find the longest prefix shared by all strings in the array.",
      input: "words: string[]",
      output: "string",
      requirements: [
        "Return empty string if no common prefix exists.",
        "Avoid unnecessary full-string comparisons.",
        "State time and space complexity.",
      ],
      cases: [
        { input: "[\"flower\",\"flow\",\"flight\"]", output: "\"fl\"" },
        { input: "[\"dog\",\"racecar\",\"car\"]", output: "\"\"" },
      ],
    },
  },
  {
    id: "as-u1-e19-t",
    type: "theory",
    title: "10. Common Array Patterns",
    theory: {
      intro:
        "After practice, formalizing recurring patterns helps structure knowledge and speed up future problem solving.",
      sections: [
        {
          title: "Patterns you used",
          text: "Iteration, nested loops, comparisons, and tracking variables.",
        },
        {
          title: "Why this matters",
          text: "Pattern recognition reduces cognitive load and helps map new problems to known solution templates.",
        },
      ],
      tips: [
        "Name the pattern before writing code.",
        "Keep a short notes list of pattern + typical complexity.",
      ],
    },
  },
];
