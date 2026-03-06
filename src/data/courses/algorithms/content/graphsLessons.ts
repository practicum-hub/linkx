import type { UnitExercise } from "@/types/algorithms";

export const graphsLessons: UnitExercise[] = [
  {
    id: "f-u11-e1-t",
    type: "theory",
    title: "1. Introduction to Graphs",
    theory: {
      intro: "Graphs model relationships between objects using vertices and edges.",
      sections: [
        {
          title: "Real-world usage",
          text: "Social networks, navigation, recommendations, routing, and dependencies.",
        },
      ],
      tips: ["Think relation network, not hierarchy."],
    },
  },
  {
    id: "f-u11-e2-t",
    type: "theory",
    title: "2. Types of Graphs",
    theory: {
      intro: "Common graph types are undirected, directed, and weighted.",
      sections: [
        {
          title: "Undirected vs directed",
          text: "Undirected edges are mutual; directed edges have orientation.",
        },
        {
          title: "Weighted graphs",
          text: "Edge weights represent cost/time/distance for shortest-path tasks.",
        },
      ],
      tips: ["Direction and weight change algorithm choice."],
    },
  },
  {
    id: "f-u11-e3-t",
    type: "theory",
    title: "3. Graph Representation",
    theory: {
      intro: "Graphs are commonly stored as adjacency matrix or adjacency list.",
      sections: [
        {
          title: "Adjacency matrix",
          text: "Space O(V^2), useful for dense graphs.",
        },
        {
          title: "Adjacency list",
          text: "Space O(V+E), preferred for sparse graphs.",
        },
      ],
      tips: ["Adjacency list is default for interview coding."],
    },
  },
  {
    id: "f-u11-e4-t",
    type: "theory",
    title: "4. Graph Traversal",
    theory: {
      intro: "Fundamental traversals are DFS and BFS.",
      sections: [
        {
          title: "Purpose",
          text: "Visit nodes, explore connectivity, search paths, and build components.",
        },
      ],
      tips: ["Use visited set to avoid repeated processing."],
    },
  },
  {
    id: "f-u11-e5-t",
    type: "theory",
    title: "5. Depth First Search (DFS)",
    theory: {
      intro: "DFS explores one branch deeply before backtracking.",
      sections: [
        {
          title: "Implementation",
          text: "Recursion or explicit stack.",
        },
        {
          title: "Complexity",
          text: "O(V + E).",
        },
      ],
      tips: ["DFS is strong for component and cycle structure reasoning."],
    },
  },
  {
    id: "f-u11-e6-t",
    type: "theory",
    title: "6. Breadth First Search (BFS)",
    theory: {
      intro: "BFS explores level by level using a queue.",
      sections: [
        {
          title: "Best for",
          text: "Shortest path in unweighted graphs and layer traversal.",
        },
        {
          title: "Complexity",
          text: "O(V + E).",
        },
      ],
      tips: ["Queue order defines BFS frontier expansion."],
    },
  },
  {
    id: "f-u11-e7-t",
    type: "theory",
    title: "7. Connected Components",
    theory: {
      intro: "Disconnected graphs can be split into connected components.",
      sections: [
        {
          title: "Counting method",
          text: "Run DFS/BFS from each unvisited node; each new run adds one component.",
        },
      ],
      tips: ["Component counting is repeated traversal over unvisited nodes."],
    },
  },
  {
    id: "f-u11-e8-t",
    type: "theory",
    title: "8. Cycle Detection",
    theory: {
      intro: "Cycle detection differs for undirected and directed graphs.",
      sections: [
        {
          title: "Undirected",
          text: "DFS with parent tracking to ignore trivial back edge.",
        },
        {
          title: "Directed",
          text: "DFS with recursion stack (or colors) to detect back edges.",
        },
      ],
      tips: ["Cycle checks are central in dependency and scheduling tasks."],
    },
  },
  {
    id: "f-u11-e9-t",
    type: "theory",
    title: "9. Topological Sort",
    theory: {
      intro: "Topological order exists only for DAGs and respects dependency direction.",
      sections: [
        {
          title: "Algorithms",
          text: "Kahn's BFS (indegree) or DFS finishing order.",
        },
      ],
      tips: ["If cycle exists, valid topological order does not exist."],
    },
  },
  {
    id: "f-u11-e10-t",
    type: "theory",
    title: "10. Shortest Path Basics",
    theory: {
      intro: "Shortest path strategy depends on edge weights.",
      sections: [
        {
          title: "Core mapping",
          text: "BFS for unweighted, Dijkstra for non-negative weighted, Bellman-Ford for negative edges.",
        },
      ],
      tips: ["Start with BFS shortest path for unweighted interview tasks."],
    },
  },
  {
    id: "f-u11-e11-p",
    type: "practice",
    title: "Practice Problems",
    practice: {
      taskTitle: "Graphs Practice Set",
      task: "Apply DFS/BFS, cycle detection, and graph modeling.",
      input: "Grids, adjacency lists, and graph constraints",
      output: "Problem-specific answers",
      requirements: [
        "Number of Islands.",
        "Clone Graph.",
        "Course Schedule.",
        "Shortest Path in Binary Matrix.",
        "Pacific Atlantic Water Flow.",
        "Bonus: Word Ladder.",
      ],
      cases: [
        { input: "Number of Islands on given grid", output: "1" },
        { input: "Course Schedule with acyclic prerequisites", output: "true" },
        { input: "Word Ladder: hit -> cog", output: "5" },
      ],
    },
  },
];
