import type { UnitExercise } from "@/types/algorithms";

export const stackQueueLessons: UnitExercise[] = [
  {
    id: "f-u8-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Stacks and queues are fundamental data structures with restricted access patterns used across algorithms and systems.",
      sections: [
        {
          title: "Where they appear",
          text: "Expression parsing, recursion/call stacks, BFS/DFS workflows, operating systems, and browser history.",
        },
        {
          title: "Why restrictions help",
          text: "Controlled access order (LIFO/FIFO) makes specific classes of problems easier to model and solve.",
        },
      ],
      tips: [
        "Choose structure by required access order, not by habit.",
      ],
    },
  },
  {
    id: "f-u8-e2-t",
    type: "theory",
    title: "2. Stack (LIFO Principle)",
    theory: {
      intro:
        "Stack follows Last In, First Out: the most recently added element is removed first.",
      sections: [
        {
          title: "Behavior example",
          text: "push 1, push 2, push 3 -> pop gives 3, then 2, then 1.",
        },
        {
          title: "Real analogy",
          text: "Plate stack and undo history in software.",
        },
      ],
      tips: [
        "Think from the top of the stack.",
      ],
    },
  },
  {
    id: "f-u8-e3-t",
    type: "theory",
    title: "3. Stack Operations",
    theory: {
      intro:
        "Core stack operations are push, pop, peek, and isEmpty.",
      sections: [
        {
          title: "Operations",
          text: "push(x) adds top, pop() removes top, peek() reads top, isEmpty() checks emptiness.",
        },
        {
          title: "Complexity",
          text: "Push O(1), Pop O(1), Peek O(1).",
        },
      ],
      tips: [
        "Guard pop/peek against empty stack.",
      ],
    },
  },
  {
    id: "f-u8-e4-t",
    type: "theory",
    title: "4. Stack Implementation",
    theory: {
      intro:
        "Stacks are commonly implemented with dynamic arrays or linked lists.",
      sections: [
        {
          title: "Array-backed stack",
          text: "Append/pop at end gives O(1) amortized operations.",
        },
        {
          title: "Linked-list stack",
          text: "Head node as top supports O(1) push/pop.",
        },
      ],
      tips: [
        "Use array stack first unless constraints require linked-list internals.",
      ],
    },
  },
  {
    id: "f-u8-e5-t",
    type: "theory",
    title: "5. Stack Use Cases",
    theory: {
      intro:
        "Stacks are core in parenthesis checks, expression evaluation, undo/redo, and call stacks.",
      sections: [
        {
          title: "Typical tasks",
          text: "Valid parentheses, arithmetic parsing, editor history, function call tracing.",
        },
      ],
      tips: [
        "If you need to match recent opening context, stack is usually correct.",
      ],
    },
  },
  {
    id: "f-u8-e6-t",
    type: "theory",
    title: "6. Valid Parentheses",
    theory: {
      intro:
        "Use stack to validate bracket pairs by pushing openings and matching closings.",
      sections: [
        {
          title: "Algorithm",
          text: "Push opening brackets. On closing bracket, pop and verify matching type. End with empty stack.",
        },
        {
          title: "Complexity",
          text: "Time O(n), space O(n) in worst case.",
        },
      ],
      tips: [
        "Fail early on mismatch or empty stack pop.",
      ],
    },
  },
  {
    id: "f-u8-e7-t",
    type: "theory",
    title: "7. Monotonic Stack",
    theory: {
      intro:
        "Monotonic stacks maintain increasing or decreasing order to answer nearest-greater/smaller queries efficiently.",
      sections: [
        {
          title: "Used in",
          text: "Next Greater Element, Daily Temperatures, Largest Rectangle in Histogram.",
        },
        {
          title: "Example",
          text: "For [2,1,3], next greater is [3,3,-1].",
        },
      ],
      tips: [
        "Store indices when position-based answers are needed.",
      ],
    },
  },
  {
    id: "f-u8-e8-t",
    type: "theory",
    title: "8. Queue (FIFO Principle)",
    theory: {
      intro:
        "Queue follows First In, First Out: earliest inserted element leaves first.",
      sections: [
        {
          title: "Behavior example",
          text: "enqueue 1,2,3 then dequeue returns 1 first.",
        },
        {
          title: "Real analogy",
          text: "Store checkout line, task scheduling, print queue.",
        },
      ],
      tips: [
        "Track front and rear semantics clearly.",
      ],
    },
  },
  {
    id: "f-u8-e9-t",
    type: "theory",
    title: "9. Queue Operations",
    theory: {
      intro:
        "Core queue operations are enqueue, dequeue, peek, and isEmpty.",
      sections: [
        {
          title: "Operations",
          text: "enqueue(x) adds to rear, dequeue() removes from front, peek() reads front.",
        },
        {
          title: "Complexity",
          text: "Target O(1) operations with proper implementation.",
        },
      ],
      tips: [
        "Avoid array-shift implementations that degrade complexity.",
      ],
    },
  },
  {
    id: "f-u8-e10-t",
    type: "theory",
    title: "10. Queue Implementation",
    theory: {
      intro:
        "Queues can be implemented using linked lists, circular arrays, or deques.",
      sections: [
        {
          title: "Common choices",
          text: "Linked list with front/rear pointers, circular buffer, or standard deque structures.",
        },
      ],
      tips: [
        "Deque is often the most practical built-in queue type.",
      ],
    },
  },
  {
    id: "f-u8-e11-t",
    type: "theory",
    title: "11. Queue in Algorithms (BFS)",
    theory: {
      intro:
        "BFS uses a queue to process nodes layer by layer in trees and graphs.",
      sections: [
        {
          title: "Pattern",
          text: "Initialize queue with start node, dequeue/process, enqueue neighbors or children.",
        },
        {
          title: "Use cases",
          text: "Level-order traversal and shortest path in unweighted graphs.",
        },
      ],
      tips: [
        "Mark visited nodes to avoid repeated processing in graphs.",
      ],
    },
  },
  {
    id: "f-u8-e12-p",
    type: "practice",
    title: "Practice Problems",
    practice: {
      taskTitle: "Stack & Queue Practice Set",
      task: "Solve core stack, queue, monotonic stack, and BFS problems.",
      input: "Strings, arrays, or tree/list structures from each prompt",
      output: "Problem-specific correct outputs with complexity",
      requirements: [
        "Valid Parentheses.",
        "Min Stack with O(1) operations.",
        "Next Greater Element using monotonic stack.",
        "Implement Queue using Stacks.",
        "Binary Tree Level Order Traversal via BFS queue.",
        "Bonus: Sliding Window Maximum via monotonic deque.",
      ],
      cases: [
        { input: "Valid Parentheses: \"({[]})\"", output: "true" },
        { input: "Next Greater: [2,1,3,5,4]", output: "[3,3,5,-1,-1]" },
        { input: "Level Order: [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
        { input: "Sliding Window Maximum: [1,3,-1,-3,5,3,6,7], k=3", output: "[3,3,5,5,6,7]" },
      ],
    },
  },
];
