import type { UnitExercise } from "@/types/algorithms";

export const algorithmsFoundationsLessons: UnitExercise[] = [
  {
    id: "f-u1-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Welcome to the course for learning algorithms from zero to genius. We will cover everything you need to solve most algorithmic problems on LeetCode and beyond.",
      sections: [
        {
          title: "Why this matters",
          text: "Algorithmic thinking helps you pass software engineering interviews, design efficient systems, and understand how real-world platforms work internally.",
        },
        {
          title: "How we will learn",
          text: "We start from fundamentals and move step by step to advanced techniques. The goal is practical problem solving, not memorization.",
        },
      ],
      tips: [
        "Focus on understanding before optimization.",
        "Practice regularly with small problems.",
      ],
    },
  },
  {
    id: "f-u1-e2-t",
    type: "theory",
    title: "2. What Is an Algorithm?",
    theory: {
      intro:
        "An algorithm is a sequence of steps that transforms input data into output data.",
      sections: [
        {
          title: "Core model",
          text: "Algorithm = Input -> Steps -> Output.",
        },
        {
          title: "Example",
          text: "Input: [5, 1, 8, 3]. Steps: compare values and swap when needed until sorted. Output: [1, 3, 5, 8].",
        },
        {
          title: "Where algorithms are used",
          text: "Software: sorting users, searching products, filtering data. Large systems: search ranking, recommendation engines, and neural network workflows.",
        },
        {
          title: "Scale is the real challenge",
          text: "An approach that works for 100 users can fail at 1,000,000 users. That is why we analyze efficiency.",
        },
      ],
      tips: [
        "Always define input and output clearly.",
        "Treat scalability as a first-class requirement.",
      ],
    },
  },
  {
    id: "f-u1-e2-p",
    type: "practice",
    title: "2.1 Practice: Identify the algorithm",
    practice: {
      taskTitle: "Best description of an algorithm",
      task: "Choose the statement that correctly describes what an algorithm is.",
      input: "One conceptual question",
      output: "One selected answer",
      requirements: [
        "Focus on input -> steps -> output.",
        "Ignore implementation language details.",
        "Pick the most general definition.",
      ],
      cases: [{ input: "Concept check", output: "Correct definition selected" }],
      quiz: {
        prompt:
          "A junior developer says that an algorithm is just any piece of code that runs in a program. You need the more precise definition used in problem solving and interview prep.",
        question: "Which statement best defines an algorithm?",
        options: [
          { id: "a", text: "A sequence of steps that transforms input into output.", hotkey: "1" },
          { id: "b", text: "Any code snippet with variables and loops.", hotkey: "2" },
          { id: "c", text: "A database query that returns rows.", hotkey: "3" },
          { id: "d", text: "Only a highly optimized solution.", hotkey: "4" },
        ],
        correctOptionId: "a",
        xp: 50,
        hint: "The definition must work before you choose a programming language or optimize performance.",
      },
    },
  },
  {
    id: "f-u1-e3-t",
    type: "theory",
    title: "3. Time Complexity",
    theory: {
      intro:
        "Time complexity describes how runtime grows as input size increases.",
      sections: [
        {
          title: "Linear growth example",
          text: "Searching one user in a list by checking each item is O(n). 100 users means up to 100 checks; 1,000,000 users means up to 1,000,000 checks.",
        },
        {
          title: "Quadratic explosion example",
          text: "If for every user we iterate through every product, operations become n * m. With 1,000,000 users and 1,000,000 products, that is 1,000,000,000,000 operations.",
        },
        {
          title: "Why it matters",
          text: "Runtime growth determines whether systems remain responsive at high load.",
        },
      ],
      tips: [
        "Estimate growth before coding.",
        "Prefer scalable patterns when input size is uncertain.",
      ],
    },
  },
  {
    id: "f-u1-e4-t",
    type: "theory",
    title: "4. Space Complexity",
    theory: {
      intro:
        "Space complexity describes how much memory an algorithm needs as input grows.",
      sections: [
        {
          title: "What is included",
          text: "Variables, additional data structures, recursion stack frames, and temporary objects.",
        },
        {
          title: "Example: O(1)",
          text: "Summing an array with a single accumulator variable uses constant extra memory.",
        },
        {
          title: "Example: O(n)",
          text: "Copying an array into a new one requires extra memory proportional to the number of elements.",
        },
        {
          title: "Example: recursion",
          text: "Recursive factorial uses O(n) stack space because each call adds a stack frame.",
        },
        {
          title: "Engineering trade-off",
          text: "You often trade time for memory: faster with more memory, or slower with less.",
        },
      ],
      tips: [
        "Analyze both time and space, not just speed.",
        "Choose balanced solutions for your constraints.",
      ],
    },
  },
  {
    id: "f-u1-e4-p",
    type: "practice",
    title: "4.1 Practice: Complexity reasoning",
    practice: {
      taskTitle: "Fastest growth diagnosis",
      task: "Read the scenario and identify the dominant time complexity.",
      input: "One scaling scenario",
      output: "One selected answer",
      requirements: [
        "Look at how many nested passes happen.",
        "Reason about growth as n increases.",
        "Choose the dominant complexity class.",
      ],
      cases: [{ input: "Nested iteration over the same collection", output: "Quadratic growth selected" }],
      quiz: {
        prompt:
          "An app compares every user with every other user in the same list to detect duplicates. When the list doubles in size, the number of comparisons grows much faster than linearly.",
        question: "What is the most likely time complexity of this approach?",
        options: [
          { id: "a", text: "O(1)", hotkey: "1" },
          { id: "b", text: "O(log n)", hotkey: "2" },
          { id: "c", text: "O(n)", hotkey: "3" },
          { id: "d", text: "O(n^2)", hotkey: "4" },
        ],
        correctOptionId: "d",
        xp: 50,
        hint: "If every element is compared with many other elements in the same collection, think nested loops.",
      },
    },
  },
  {
    id: "f-u1-e5-t",
    type: "theory",
    title: "5. Big O Notation",
    theory: {
      intro:
        "Big O notation describes how an algorithm scales for large input sizes and gives an upper bound for time or memory growth.",
      sections: [
        {
          title: "Common classes",
          text: "O(1), O(log n), O(n), O(n log n), O(n^2), O(2^n), O(n!).",
        },
        {
          title: "Interpretation",
          text: "O(1) is constant. O(log n) is very efficient (binary search). O(n) grows linearly. O(n log n) is typical for efficient sorting. O(n^2) and above often become expensive quickly.",
        },
        {
          title: "Practical implication",
          text: "As n grows, the growth class matters much more than constant factors.",
        },
      ],
      tips: [
        "Drop constants and lower-order terms when classifying complexity.",
        "Compare algorithms by growth trend, not by one benchmark run.",
      ],
      visualization: {
        title: "Growth Order",
        nodes: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n^2)", "O(2^n)", "O(n!)"],
      },
    },
  },
  {
    id: "f-u1-e6-p",
    type: "practice",
    title: "6.1 Practice: Pick the better scaling",
    practice: {
      taskTitle: "Best scaling choice",
      task: "Choose the algorithm that will scale better for large inputs.",
      input: "Two complexity options",
      output: "One selected answer",
      requirements: [
        "Ignore small constant differences.",
        "Focus on long-term input growth.",
        "Prefer the lower growth class.",
      ],
      cases: [{ input: "Compare O(n log n) vs O(n^2)", output: "O(n log n) selected" }],
      quiz: {
        prompt:
          "You must sort increasingly large datasets. One implementation runs in O(n log n), and another runs in O(n^2). For large n, constant factors are not the deciding issue.",
        question: "Which algorithm should scale better as the dataset grows?",
        options: [
          { id: "a", text: "O(n^2), because quadratic work uses simpler loops.", hotkey: "1" },
          { id: "b", text: "O(n log n), because its growth is slower for large n.", hotkey: "2" },
          { id: "c", text: "They scale the same once compiled.", hotkey: "3" },
          { id: "d", text: "The answer cannot depend on complexity class.", hotkey: "4" },
        ],
        correctOptionId: "b",
        xp: 50,
        hint: "Big O compares growth trends, not how short the code looks.",
      },
    },
  },
  {
    id: "f-u1-e6-t",
    type: "theory",
    title: "6. Best / Average / Worst Case",
    theory: {
      intro:
        "The same algorithm can perform differently depending on the input.",
      sections: [
        {
          title: "Search example",
          text: "Best case: target is first element, O(1). Worst case: target is last or absent, O(n).",
        },
        {
          title: "Why worst case is common",
          text: "Production systems must stay safe under peak load, so worst-case guarantees are often the baseline in analysis.",
        },
      ],
      tips: [
        "Specify which case you are analyzing.",
        "Use worst case by default unless problem statement says otherwise.",
      ],
    },
  },
  {
    id: "f-u1-e7-t",
    type: "theory",
    title: "7. Data Structures Before Practice",
    theory: {
      intro:
        "Algorithms operate on data structures, so understanding core structures is mandatory before solving interview-style tasks.",
      sections: [
        {
          title: "Core structures",
          text: "Arrays, Strings, Linked Lists, Stacks, Queues, Hash Tables, Trees, Graphs, and Heaps.",
        },
        {
          title: "Why choice matters",
          text: "Each structure has different time complexity, memory layout, and use cases.",
        },
        {
          title: "Example",
          text: "Search in Array is O(n), while search in Hash Table is typically O(1).",
        },
      ],
      tips: [
        "Pick data structure first, then design the algorithm.",
        "Re-check operation complexity before implementation.",
      ],
    },
  },
  {
    id: "f-u1-e8-t",
    type: "theory",
    title: "8. Pseudocode",
    theory: {
      intro:
        "Before coding, engineers often write pseudocode to focus on logic instead of language syntax.",
      sections: [
        {
          title: "What pseudocode gives you",
          text: "A language-independent plan that makes edge cases and loop logic easier to verify.",
        },
        {
          title: "Example pattern",
          text: "findMax(array): set max to first element, iterate through elements, update max when current value is larger, return max.",
        },
      ],
      tips: [
        "Write pseudocode before implementation for non-trivial tasks.",
        "Keep pseudocode clear and minimal.",
      ],
    },
  },
  {
    id: "f-u1-e8-p",
    type: "practice",
    title: "8.1 Practice: Before coding",
    practice: {
      taskTitle: "Best next step before implementation",
      task: "Choose the strongest engineering move before writing code for a non-trivial task.",
      input: "One workflow question",
      output: "One selected answer",
      requirements: [
        "Prioritize correctness of logic first.",
        "Separate reasoning from language syntax.",
        "Pick the step that reduces implementation mistakes.",
      ],
      cases: [{ input: "Non-trivial problem solving workflow", output: "Pseudocode selected" }],
      quiz: {
        prompt:
          "You are about to implement a medium-difficulty algorithm problem with multiple edge cases. You understand the goal, but the loop logic is still easy to get wrong.",
        question: "What is the best next step before writing full code?",
        options: [
          { id: "a", text: "Start coding immediately and fix logic later.", hotkey: "1" },
          { id: "b", text: "Write pseudocode for the core steps first.", hotkey: "2" },
          { id: "c", text: "Skip planning and optimize memory usage first.", hotkey: "3" },
          { id: "d", text: "Memorize syntax for a different language.", hotkey: "4" },
        ],
        correctOptionId: "b",
        xp: 50,
        hint: "The course explicitly frames pseudocode as a way to validate logic before syntax.",
      },
    },
  },
];
