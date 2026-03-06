import type { UnitExercise } from "@/types/algorithms";

export const hashTablesLessons: UnitExercise[] = [
  {
    id: "f-u4-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Hash tables let us move from full scans O(n) or nested loops O(n^2) to near-instant lookup on average.",
      sections: [
        {
          title: "What is a hash table",
          text: "A hash table stores key -> value pairs and supports fast search, insert, and delete.",
        },
        {
          title: "Why it matters",
          text: "Average-case operations are O(1), making hash tables one of the most useful structures in engineering.",
        },
        {
          title: "Real-world usage",
          text: "Caching, databases, authentication, indexing, and algorithm optimization.",
        },
      ],
      tips: [
        "Think hash table when repeated lookup is needed.",
        "Compare brute force and hash-based complexity explicitly.",
      ],
    },
  },
  {
    id: "f-u4-e2-t",
    type: "theory",
    title: "2. Key-Value Structure",
    theory: {
      intro:
        "Unlike arrays, hash tables use keys to access values directly.",
      sections: [
        {
          title: "Example",
          text: "{ name: \"Anton\", age: 25 } where key=name and value=Anton.",
        },
        {
          title: "Direct access",
          text: "users[\"user1\"] is typically O(1).",
        },
      ],
      tips: [
        "Choose stable and unique keys.",
        "Model lookups as key queries, not scans.",
      ],
    },
  },
  {
    id: "f-u4-e3-t",
    type: "theory",
    title: "3. Hash Function",
    theory: {
      intro:
        "A hash function converts a key into a numeric hash that maps to a memory index.",
      sections: [
        {
          title: "Flow",
          text: "key -> hash function -> memory index -> stored value.",
        },
        {
          title: "Why lookup is fast",
          text: "Hash computation is quick, so average access is near constant time.",
        },
      ],
      tips: [
        "Different keys can still collide.",
        "Hash quality affects performance.",
      ],
    },
  },
  {
    id: "f-u4-e4-t",
    type: "theory",
    title: "4. Basic Operations",
    theory: {
      intro:
        "Core operations in hash tables are insert, access, and delete.",
      sections: [
        {
          title: "Insert",
          text: "users[\"Anton\"] = 25 -> average O(1).",
        },
        {
          title: "Access",
          text: "users[\"Anton\"] -> average O(1).",
        },
        {
          title: "Delete",
          text: "delete users[\"Anton\"] -> average O(1).",
        },
      ],
      tips: [
        "Average complexity assumes good distribution.",
        "Know language-specific map/object behavior.",
      ],
    },
  },
  {
    id: "f-u4-e5-t",
    type: "theory",
    title: "5. Hash Collisions",
    theory: {
      intro:
        "A collision happens when different keys map to the same hash/index.",
      sections: [
        {
          title: "Chaining",
          text: "Store multiple entries in one bucket, for example index 42 -> [apple, grape].",
        },
        {
          title: "Open addressing",
          text: "If target slot is occupied, probe for another available slot.",
        },
      ],
      tips: [
        "Collisions are normal, not errors.",
        "Collision strategy impacts worst-case behavior.",
      ],
    },
  },
  {
    id: "f-u4-e6-t",
    type: "theory",
    title: "6. Time Complexity",
    theory: {
      intro:
        "Hash table operations are O(1) on average, but can degrade with many collisions.",
      sections: [
        {
          title: "Average case",
          text: "Insert O(1), Search O(1), Delete O(1).",
        },
        {
          title: "Worst case",
          text: "With heavy collisions, operations can become O(n).",
        },
      ],
      tips: [
        "Report both average and worst case.",
        "Use good hash functions and resizing strategies.",
      ],
    },
  },
  {
    id: "f-u4-e7-t",
    type: "theory",
    title: "7. Real Algorithm Example",
    theory: {
      intro:
        "Contains Duplicate improves from O(n^2) brute force to O(n) with a hash set.",
      sections: [
        {
          title: "Brute force",
          text: "Nested loops compare each pair -> O(n^2).",
        },
        {
          title: "Hash set approach",
          text: "Scan once, check membership, then add current value. Time O(n), extra space O(n).",
        },
      ],
      tips: [
        "Hash set is ideal for fast existence checks.",
        "Trade memory for speed intentionally.",
      ],
    },
  },
  {
    id: "f-u4-e8-p",
    type: "practice",
    title: "8. Practice Problems",
    practice: {
      taskTitle: "Hash Tables Practice Set",
      task: "Solve the listed problems using hash maps/sets where appropriate.",
      input: "Arrays and strings from each prompt",
      output: "Correct return value + time/space complexity",
      requirements: [
        "Use hash-based solution for Two Sum optimized version.",
        "Include Contains Duplicate, Count Frequencies, First Non-Repeating Character, and Valid Anagram.",
        "Attempt bonus: Top K Frequent Elements.",
      ],
      cases: [
        { input: "Two Sum: nums=[2,7,11,15], target=9", output: "[0,1]" },
        { input: "Contains Duplicate: [1,2,3,1]", output: "true" },
        { input: "Count Frequencies: [1,2,2,3,3,3]", output: "{1:1,2:2,3:3}" },
        { input: "First Non-Repeating Character: \"leetcode\"", output: "\"l\"" },
        { input: "Valid Anagram: \"listen\", \"silent\"", output: "true" },
        { input: "Bonus Top K: [1,1,1,2,2,3], k=2", output: "[1,2]" },
      ],
    },
  },
];
