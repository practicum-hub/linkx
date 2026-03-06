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
];
