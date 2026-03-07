import type { AlgorithmsTopic } from "@/types/algorithms";
import { algorithmsFoundationsLessons } from "@/data/courses/algorithms/content/algorithmsFoundationsLessons";
import { arraysStringsLessons } from "@/data/courses/algorithms/content/arraysStringsLessons";
import { binarySearchLessons } from "@/data/courses/algorithms/content/binarySearchLessons";
import { graphsLessons } from "@/data/courses/algorithms/content/graphsLessons";
import { hashTablesLessons } from "@/data/courses/algorithms/content/hashTablesLessons";
import { heapLessons } from "@/data/courses/algorithms/content/heapLessons";
import { linkedListsLessons } from "@/data/courses/algorithms/content/linkedListsLessons";
import { slidingWindowLessons } from "@/data/courses/algorithms/content/slidingWindowLessons";
import { stackQueueLessons } from "@/data/courses/algorithms/content/stackQueueLessons";
import { treesLessons } from "@/data/courses/algorithms/content/treesLessons";
import { twoPointersLessons } from "@/data/courses/algorithms/content/twoPointersLessons";
export type {
  AlgorithmsTopic,
  AlgorithmsUnit,
  ExercisePractice,
  ExerciseTheory,
  UnitExercise,
  UnitType,
} from "@/types/algorithms";
export const algorithmsRoadmap: AlgorithmsTopic[] = [
  {
    id: "foundations",
    title: "Algorithm Foundations",
    desc: "Core algorithm thinking: what algorithms are, how complexity works, and how to reason about loops.",
    completed: ["f-u1"],
    units: [
      {
        id: "f-u1",
        title: "Algorithms Foundations",
        type: "Lesson",
        level: 0,
        lane: 1,
        requires: [],
        lessons: algorithmsFoundationsLessons,
      },
      {
        id: "f-u2",
        title: "Arrays & Strings",
        type: "Lesson",
        level: 1,
        lane: 0,
        requires: ["f-u1"],
        lessons: arraysStringsLessons,
      },

      {
        id: "f-u4",
        title: "Hash Tables",
        type: "Lesson",
        level: 2,
        lane: 0,
        requires: ["f-u2"],
        lessons: hashTablesLessons,
      },
      {
        id: "f-u3",
        title: "Two Pointers (Pattern)",
        type: "Lesson",
        level: 3,
        lane: 2,
        requires: ["f-u4"],
        lessons: twoPointersLessons,
      },
      {
        id: "f-u5",
        title: "Sliding Window (Pattern)",
        type: "Lesson",
        level: 4,
        lane: 2,
        requires: ["f-u3"],
        lessons: slidingWindowLessons,
      },
      {
        id: "f-u6",
        title: "Binary Search (Pattern)",
        type: "Lesson",
        level: 5,
        lane: 1,
        requires: ["f-u5"],
        lessons: binarySearchLessons,
      },
      {
        id: "f-u7",
        title: "Linked Lists (Data Structure)",
        type: "Lesson",
        level: 6,
        lane: 1,
        requires: ["f-u6"],
        lessons: linkedListsLessons,
      },
      {
        id: "f-u8",
        title: "Stack & Queue (Data Structures)",
        type: "Lesson",
        level: 7,
        lane: 0,
        requires: ["f-u7"],
        lessons: stackQueueLessons,
      },
      {
        id: "f-u9",
        title: "Trees (Data Structure & Traversal)",
        type: "Lesson",
        level: 8,
        lane: 1,
        requires: ["f-u8"],
        lessons: treesLessons,
      },
      {
        id: "f-u10",
        title: "Heap (Priority Queue)",
        type: "Lesson",
        level: 9,
        lane: 2,
        requires: ["f-u9"],
        lessons: heapLessons,
      },
      {
        id: "f-u11",
        title: "Graphs (Data Structure & Algorithms)",
        type: "Lesson",
        level: 10,
        lane: 0,
        requires: ["f-u10"],
        lessons: graphsLessons,
      },
    ],
  },
  {
    id: "arrays-strings",
    title: "Arrays & Strings",
    desc: "Array and string fundamentals: structure, indexing, iteration, operations, and first interview-style problems.",
    completed: [],
    units: [
      {
        id: "as-u1",
        title: "Arrays & Strings Foundations",
        type: "Lesson",
        level: 0,
        lane: 1,
        requires: [],
        lessons: arraysStringsLessons,
      },
      {
        id: "as-u2",
        title: "Sliding Window",
        type: "Practice",
        level: 1,
        lane: 0,
        requires: ["as-u1"],
        lessons: [
          {
            id: "as-u2-e1-t",
            type: "theory",
            title: "Fixed Window Sum",
            theory: {
              intro:
                "For fixed window length k, update current sum by removing left and adding right.",
              sections: [
                {
                  title: "Window Transition",
                  text: "newSum = oldSum - nums[left] + nums[right].",
                },
                {
                  title: "Best Tracking",
                  text: "Update maximum after each valid window.",
                },
              ],
              tips: [
                "Build first window before sliding.",
                "Watch index bounds for right pointer.",
                "Track answer incrementally.",
              ],
            },
          },
          {
            id: "as-u2-e1-p",
            type: "practice",
            title: "Fixed Window Sum",
            practice: {
              taskTitle: "Max Sum Subarray of Size K",
              task: "Find the maximum sum of any contiguous subarray of size k.",
              input: "nums: number[], k: number",
              output: "number",
              requirements: [
                "O(n) time complexity.",
                "Use rolling window sum.",
                "Assume k <= nums.length.",
              ],
              cases: [
                { input: "nums=[2,1,5,1,3,2], k=3", output: "9" },
                { input: "nums=[1,1,1,1], k=2", output: "2" },
              ],
            },
          },
          {
            id: "as-u2-e2-t",
            type: "theory",
            title: "Variable Window Constraints",
            theory: {
              intro:
                "Variable windows expand right and shrink left while invariant remains satisfied.",
              sections: [
                {
                  title: "Expand Then Shrink",
                  text: "Grow window until invalid, then shrink until valid again.",
                },
                {
                  title: "Invariant",
                  text: "Keep count/frequency map aligned with current window.",
                },
              ],
              tips: [
                "Use while loop for shrinking.",
                "Update answer only on valid windows.",
                "Track exact invalid condition.",
              ],
            },
          },
          {
            id: "as-u2-e2-p",
            type: "practice",
            title: "Variable Window Constraints",
            practice: {
              taskTitle: "Longest Substring Without Repeating",
              task: "Return the length of the longest substring without duplicate characters.",
              input: "s: string",
              output: "number",
              requirements: [
                "O(n) with character index map.",
                "Move left pointer past duplicate.",
                "Track max window size.",
              ],
              cases: [
                { input: "s='abcabcbb'", output: "3" },
                { input: "s='bbbbb'", output: "1" },
              ],
            },
          },
        ],
      },
      {
        id: "as-u3",
        title: "Prefix Sums",
        type: "Checkpoint",
        level: 1,
        lane: 2,
        requires: ["as-u1"],
        lessons: [
          {
            id: "as-u3-e1-t",
            type: "theory",
            title: "Range Sum Query",
            theory: {
              intro:
                "Prefix sums precompute cumulative totals so range queries become O(1).",
              sections: [
                {
                  title: "Build Prefix",
                  text: "prefix[i] stores sum of first i elements.",
                },
                {
                  title: "Query Formula",
                  text: "sum(l..r) = prefix[r+1] - prefix[l].",
                },
              ],
              tips: [
                "Use prefix length n+1.",
                "Keep indices consistent (inclusive bounds).",
                "Precompute once for many queries.",
              ],
            },
          },
          {
            id: "as-u3-e1-p",
            type: "practice",
            title: "Range Sum Query",
            practice: {
              taskTitle: "Range Sum",
              task: "Answer multiple sum queries on immutable array.",
              input: "nums: number[], queries: [l,r][]",
              output: "number[]",
              requirements: [
                "O(n) preprocessing.",
                "O(1) per query.",
                "Inclusive l and r.",
              ],
              cases: [
                { input: "nums=[1,2,3,4], q=[0,2]", output: "6" },
                { input: "nums=[1,2,3,4], q=[1,3]", output: "9" },
              ],
            },
          },
          {
            id: "as-u3-e2-t",
            type: "theory",
            title: "Prefix + Hash Map",
            theory: {
              intro:
                "Combining prefix sums with frequency maps solves many subarray counting tasks.",
              sections: [
                {
                  title: "Key Observation",
                  text: "If prefix[j]-prefix[i]=k, then subarray i..j-1 sums to k.",
                },
                {
                  title: "Frequency Tracking",
                  text: "Store counts of seen prefix sums for constant-time lookups.",
                },
              ],
              tips: [
                "Initialize map with prefix 0 count 1.",
                "Update answer before incrementing current prefix.",
                "Use map for negative values support.",
              ],
            },
          },
          {
            id: "as-u3-e2-p",
            type: "practice",
            title: "Prefix + Hash Map",
            practice: {
              taskTitle: "Count Subarrays Equal to K",
              task: "Count number of contiguous subarrays whose sum equals k.",
              input: "nums: number[], k: number",
              output: "number",
              requirements: [
                "O(n) solution required.",
                "Support negative numbers.",
                "Use prefix sum + hash map.",
              ],
              cases: [
                { input: "nums=[1,1,1], k=2", output: "2" },
                { input: "nums=[1,2,3], k=3", output: "2" },
              ],
            },
          },
        ],
      },
    ],
  },
];
export function getTopicById(topicId: string) {
  return algorithmsRoadmap.find((topic) => topic.id === topicId);
}
export function getUnitById(topicId: string, unitId: string) {
  return getTopicById(topicId)?.units.find((unit) => unit.id === unitId);
}




