import type { UnitExercise } from "@/types/algorithms";

export const treesLessons: UnitExercise[] = [
  {
    id: "f-u9-e1-t",
    type: "theory",
    title: "1. Introduction to Trees",
    theory: {
      intro:
        "Trees are hierarchical structures of nodes and edges with one root, no cycles, and exactly one path between nodes.",
      sections: [
        {
          title: "Why trees matter",
          text: "Used in file systems, databases, compilers, search engines, and routing.",
        },
      ],
      tips: ["Think parent-child hierarchy, not linear order."],
    },
  },
  {
    id: "f-u9-e2-t",
    type: "theory",
    title: "2. Tree Terminology",
    theory: {
      intro: "Core terms: root, parent/child, leaf, subtree, depth, and height.",
      sections: [
        {
          title: "Examples",
          text: "Leaf nodes have no children; depth is distance from root; tree height is longest root-to-leaf path.",
        },
      ],
      tips: ["Be precise with depth vs height in interviews."],
    },
  },
  {
    id: "f-u9-e3-t",
    type: "theory",
    title: "3. Binary Trees",
    theory: {
      intro: "Binary trees are trees where each node has at most two children: left and right.",
      sections: [
        {
          title: "Common role",
          text: "Binary trees are the base for many recursion and traversal problems.",
        },
      ],
      tips: ["Null children are valid and common."],
    },
  },
  {
    id: "f-u9-e4-t",
    type: "theory",
    title: "4. Tree Node Structure",
    theory: {
      intro: "Typical node structure contains value, left pointer, and right pointer.",
      sections: [
        {
          title: "Node shape",
          text: "Node = { value, left, right }.",
        },
      ],
      tips: ["Always check node is not null before accessing children."],
    },
  },
  {
    id: "f-u9-e5-t",
    type: "theory",
    title: "5. Tree Traversal Overview",
    theory: {
      intro: "Traversal means visiting all nodes in a systematic order.",
      sections: [
        {
          title: "Main strategies",
          text: "DFS (depth-first) and BFS (breadth-first).",
        },
      ],
      tips: ["Pick traversal by problem goal: path vs level."],
    },
  },
  {
    id: "f-u9-e6-t",
    type: "theory",
    title: "6. DFS Traversals",
    theory: {
      intro: "DFS explores branches deeply and usually uses recursion or stack.",
      sections: [
        {
          title: "Orders",
          text: "Preorder: Root-Left-Right, Inorder: Left-Root-Right, Postorder: Left-Right-Root.",
        },
        {
          title: "BST property",
          text: "Inorder traversal of a BST yields sorted values.",
        },
      ],
      tips: ["Know all three DFS orders and when each is useful."],
    },
  },
  {
    id: "f-u9-e7-t",
    type: "theory",
    title: "7. BFS Traversal",
    theory: {
      intro: "BFS processes tree nodes level by level using a queue.",
      sections: [
        {
          title: "Pattern",
          text: "Push root, pop front, process, push children.",
        },
      ],
      tips: ["Level-order problems are BFS by default."],
    },
  },
  {
    id: "f-u9-e8-t",
    type: "theory",
    title: "8. Recursive Thinking with Trees",
    theory: {
      intro: "Trees are naturally recursive because each subtree is itself a tree.",
      sections: [
        {
          title: "Example",
          text: "height(node) = 1 + max(height(left), height(right)).",
        },
        {
          title: "Complexity",
          text: "Most full traversals run in O(n).",
        },
      ],
      tips: ["Define base case first, then combine subtree results."],
    },
  },
  {
    id: "f-u9-e9-t",
    type: "theory",
    title: "9. Important Tree Problems",
    theory: {
      intro: "Classic interview tasks train traversal and recursion composition.",
      sections: [
        {
          title: "Core set",
          text: "Maximum Depth, Same Tree, Invert Binary Tree, Balanced Tree.",
        },
      ],
      tips: ["Many tree tasks reduce to reusable recursion templates."],
    },
  },
  {
    id: "f-u9-e10-p",
    type: "practice",
    title: "Practice Problems",
    practice: {
      taskTitle: "Trees Practice Set",
      task: "Solve DFS/BFS tree problems and justify complexity.",
      input: "Binary tree roots and targets depending on problem",
      output: "Problem-specific return values",
      requirements: [
        "Maximum Depth of Binary Tree.",
        "Same Tree.",
        "Invert Binary Tree.",
        "Binary Tree Level Order Traversal.",
        "Diameter of Binary Tree.",
        "Bonus: Lowest Common Ancestor.",
      ],
      cases: [
        { input: "Max Depth for [3,9,20,null,null,15,7]", output: "3" },
        { input: "Level Order for [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" },
        { input: "Invert [4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" },
      ],
    },
  },
];
