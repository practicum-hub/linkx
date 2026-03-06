import type { UnitExercise } from "@/types/algorithms";

export const heapLessons: UnitExercise[] = [
  {
    id: "f-u10-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro: "Heap is a priority-oriented tree structure for fast min/max retrieval.",
      sections: [
        {
          title: "Use cases",
          text: "Top K queries, task scheduling, priority systems, and streaming data.",
        },
      ],
      tips: ["Use heap when repeated extreme-value extraction is needed."],
    },
  },
  {
    id: "f-u10-e2-t",
    type: "theory",
    title: "2. What Is a Heap",
    theory: {
      intro: "Heaps are binary trees with order property: min-heap or max-heap.",
      sections: [
        {
          title: "Min heap",
          text: "Parent <= children, so smallest value is at root.",
        },
        {
          title: "Max heap",
          text: "Parent >= children, so largest value is at root.",
        },
      ],
      tips: ["Heap is partially ordered, not globally sorted."],
    },
  },
  {
    id: "f-u10-e3-t",
    type: "theory",
    title: "3. Array Representation",
    theory: {
      intro: "Heaps are typically stored in arrays.",
      sections: [
        {
          title: "Index formulas",
          text: "parent=(i-1)//2, left=2*i+1, right=2*i+2.",
        },
      ],
      tips: ["Index math is the core of heap implementation."],
    },
  },
  {
    id: "f-u10-e4-t",
    type: "theory",
    title: "4. Heap Operations",
    theory: {
      intro: "Core operations: peek, insert, extract min/max.",
      sections: [
        {
          title: "Complexity",
          text: "Peek O(1), Insert O(log n), Extract O(log n).",
        },
      ],
      tips: ["Swap root/last before extract then heapify down."],
    },
  },
  {
    id: "f-u10-e5-t",
    type: "theory",
    title: "5. Heapify",
    theory: {
      intro: "Heapify restores order after insert/remove.",
      sections: [
        {
          title: "Heapify up",
          text: "After insert, bubble node toward root while property violated.",
        },
        {
          title: "Heapify down",
          text: "After extract, push root down by swapping with proper child.",
        },
      ],
      tips: ["Pick child by min/max rule of current heap type."],
    },
  },
  {
    id: "f-u10-e6-t",
    type: "theory",
    title: "6. Priority Queue",
    theory: {
      intro: "Priority Queue returns highest-priority item first and is usually backed by heap.",
      sections: [
        {
          title: "Operations",
          text: "push, pop-priority, peek-priority.",
        },
      ],
      tips: ["Model priorities explicitly as key values."],
    },
  },
  {
    id: "f-u10-e7-t",
    type: "theory",
    title: "7. Heaps in Python",
    theory: {
      intro: "Python uses `heapq` as a min-heap implementation.",
      sections: [
        {
          title: "Common calls",
          text: "heapq.heappush(heap, x), heapq.heappop(heap).",
        },
      ],
      tips: ["Use negative values for max-heap behavior in Python."],
    },
  },
  {
    id: "f-u10-e8-t",
    type: "theory",
    title: "8. Top K Pattern",
    theory: {
      intro: "Top K problems are often solved with a heap of size k.",
      sections: [
        {
          title: "Complexity gain",
          text: "O(n log k) vs full sort O(n log n), especially better when k is small.",
        },
      ],
      tips: ["For largest k values, keep min-heap of size k."],
    },
  },
  {
    id: "f-u10-e9-t",
    type: "theory",
    title: "9. Heap vs Sorting",
    theory: {
      intro: "Sorting is general-purpose; heap is better for repeated partial extremes.",
      sections: [
        {
          title: "Decision rule",
          text: "Need all values ordered -> sort. Need only top/bottom k -> heap.",
        },
      ],
      tips: ["Compare n log n with n log k before choosing."],
    },
  },
  {
    id: "f-u10-e10-p",
    type: "practice",
    title: "Practice Problems",
    practice: {
      taskTitle: "Heap / Priority Queue Practice Set",
      task: "Solve Top-K, stream, and priority-based tasks with heaps.",
      input: "Arrays, points, streams, lists depending on problem",
      output: "Problem-specific outputs",
      requirements: [
        "Kth Largest Element.",
        "Top K Frequent Elements.",
        "Merge K Sorted Lists.",
        "Find Median from Data Stream.",
        "K Closest Points to Origin.",
        "Bonus: Task Scheduler.",
      ],
      cases: [
        { input: "Kth Largest: [3,2,1,5,6,4], k=2", output: "5" },
        { input: "Top K Frequent: [1,1,1,2,2,3], k=2", output: "[1,2]" },
        { input: "K Closest: [(1,3),(-2,2),(5,8)], k=1", output: "[(-2,2)]" },
      ],
    },
  },
];
