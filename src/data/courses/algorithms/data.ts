import type { AlgorithmsTopic } from "@/types/algorithms";
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
    desc: "Complexity intuition, tracing, and systematic problem solving.",
    completed: ["f-u1"],
    units: [
      {
        id: "f-u1",
        title: "Complexity Basics",
        type: "Lesson",
        level: 0,
        lane: 1,
        requires: [],
        exercises: [
          {
            id: "f-u1-e1",
            title: "Read Time Complexity",
            theory: {
              intro:
                "Start by recognizing how often each operation executes. Focus on loops and nested loops first.",
              sections: [
                {
                  title: "Single Loop",
                  text: "If a loop runs from 0 to n-1 once, it is O(n).",
                },
                {
                  title: "Nested Loop",
                  text: "Two dependent loops often form O(n^2).",
                },
              ],
              tips: [
                "Ignore constants in Big O.",
                "Track the fastest-growing term.",
                "Write complexity next to each loop.",
              ],
              visualization: {
                title: "Complexity Workflow",
                nodes: ["Scan Code", "Count Repeats", "Pick Dominant Term", "Simplify"],
              },
            },
            practice: {
              taskTitle: "Loop Complexity Drill",
              task: "Determine the complexity class for each code snippet.",
              input: "Code snippet A/B/C",
              output: "O(1), O(log n), O(n), O(n^2), ...",
              requirements: [
                "Explain the dominant operation.",
                "Ignore language-specific optimizations.",
                "Return one final Big O per snippet.",
              ],
              cases: [
                { input: "for i in 0..n", output: "O(n)" },
                { input: "for i in 0..n; for j in 0..n", output: "O(n^2)" },
              ],
            },
          },
          {
            id: "f-u1-e2",
            title: "Space Complexity Intuition",
            theory: {
              intro:
                "Space complexity measures additional memory, not counting the input itself unless specified.",
              sections: [
                {
                  title: "In-place Updates",
                  text: "Reusing the same array usually keeps extra space at O(1).",
                },
                {
                  title: "Auxiliary Structures",
                  text: "Hash maps, stacks, and arrays add memory overhead proportional to size.",
                },
              ],
              tips: [
                "Track only extra memory.",
                "Check recursion stack depth.",
                "Mention both time and space in final answer.",
              ],
            },
            practice: {
              taskTitle: "Choose Better Memory Strategy",
              task: "Pick the implementation with lower extra memory usage.",
              input: "Two algorithm variants",
              output: "Variant name + expected space complexity",
              requirements: [
                "Prefer lower asymptotic memory.",
                "Keep correctness unchanged.",
                "Provide one-line rationale.",
              ],
              cases: [
                { input: "Variant A: copy array, Variant B: two pointers", output: "Variant B, O(1)" },
                { input: "Variant A: recursive DFS, Variant B: iterative stack", output: "Depends on depth, both O(h)" },
              ],
            },
          },
        ],
      },
      {
        id: "f-u2",
        title: "Dry Runs & Tracing",
        type: "Practice",
        level: 1,
        lane: 0,
        requires: ["f-u1"],
        exercises: [
          {
            id: "f-u2-e1",
            title: "Pointer Trace",
            theory: {
              intro:
                "Tracing step-by-step prevents logic bugs and exposes invariant violations early.",
              sections: [
                {
                  title: "State Table",
                  text: "Track variable values after each iteration in a compact table.",
                },
                {
                  title: "Invariant Check",
                  text: "Verify what must remain true after every operation.",
                },
              ],
              tips: [
                "Trace with a short sample.",
                "Include edge values and boundaries.",
                "Stop when invariant breaks.",
              ],
            },
            practice: {
              taskTitle: "Two Pointers Trace",
              task: "Trace pointers to find if a sorted array contains a target sum.",
              input: "nums: number[] (sorted), target: number",
              output: "boolean",
              requirements: [
                "Move left/right pointers correctly.",
                "Use O(1) extra memory.",
                "Stop early when pair is found.",
              ],
              cases: [
                { input: "nums=[1,2,4,8], target=10", output: "true" },
                { input: "nums=[1,2,4,8], target=7", output: "false" },
              ],
            },
          },
          {
            id: "f-u2-e2",
            title: "Debug Through Invariants",
            theory: {
              intro:
                "Most bugs come from invalid assumptions. Invariants make assumptions explicit and testable.",
              sections: [
                {
                  title: "Define Invariant",
                  text: "Example: left pointer always points to smallest unchecked value.",
                },
                {
                  title: "Assert During Trace",
                  text: "Check the invariant on each update to localize failure quickly.",
                },
              ],
              tips: [
                "Write invariant as one sentence.",
                "Keep it true at init, loop, and exit.",
                "Use failing test to challenge the invariant.",
              ],
            },
            practice: {
              taskTitle: "Fix Broken Binary Search",
              task: "Correct boundary updates in a buggy binary search implementation.",
              input: "sorted nums, target",
              output: "target index or -1",
              requirements: [
                "Maintain low <= high invariant.",
                "Use mid without overflow issues.",
                "Return exact index when found.",
              ],
              cases: [
                { input: "nums=[1,3,5,7], target=5", output: "2" },
                { input: "nums=[1,3,5,7], target=2", output: "-1" },
              ],
            },
          },
        ],
      },
      {
        id: "f-u3",
        title: "Problem Decomposition",
        type: "Checkpoint",
        level: 1,
        lane: 2,
        requires: ["f-u1"],
        exercises: [
          {
            id: "f-u3-e1",
            title: "From Statement to Steps",
            theory: {
              intro:
                "Convert problem text into deterministic steps: parse input, transform state, produce output.",
              sections: [
                {
                  title: "Define Subproblems",
                  text: "Split logic into reusable parts that can be validated independently.",
                },
                {
                  title: "Choose Data Model",
                  text: "Pick structures that naturally represent each subproblem.",
                },
              ],
              tips: [
                "Map each requirement to one step.",
                "Separate parsing from core logic.",
                "Validate each subproblem with one test.",
              ],
            },
            practice: {
              taskTitle: "Subarray Maximum Sum Plan",
              task: "Describe and implement a step-by-step solution for maximum subarray sum.",
              input: "nums: number[]",
              output: "number",
              requirements: [
                "Use linear scan strategy.",
                "Track best-so-far and current window.",
                "Handle all-negative arrays.",
              ],
              cases: [
                { input: "nums=[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
                { input: "nums=[-3,-2,-7]", output: "-2" },
              ],
            },
          },
          {
            id: "f-u3-e2",
            title: "Trade-off Notes",
            theory: {
              intro:
                "For interview settings, explaining trade-offs clearly is as important as writing the final code.",
              sections: [
                {
                  title: "Time vs Space",
                  text: "Sometimes O(n) memory buys significant speed improvements.",
                },
                {
                  title: "Readability vs Micro-Optimization",
                  text: "Prefer maintainable code unless constraints force low-level tweaks.",
                },
              ],
              tips: [
                "State baseline then optimized approach.",
                "Quantify gain with complexity.",
                "Mention at least one drawback.",
              ],
            },
            practice: {
              taskTitle: "Pick Best Approach",
              task: "Select between brute force and optimized solution for pair sum queries.",
              input: "nums array + many query targets",
              output: "Approach recommendation",
              requirements: [
                "Consider repeated queries.",
                "Compare preprocessing cost.",
                "Report final complexity pair.",
              ],
              cases: [
                { input: "n=1e5, q=1e5", output: "Preprocess hash/set strategy" },
                { input: "n=50, q=2", output: "Simple scan acceptable" },
              ],
            },
          },
        ],
      },
      {
        id: "f-u4",
        title: "Constraint Strategy",
        type: "Lesson",
        level: 2,
        lane: 1,
        requires: ["f-u2", "f-u3"],
        exercises: [
          {
            id: "f-u4-e1",
            title: "Match Constraints to Pattern",
            theory: {
              intro:
                "Use constraints to choose approach first: brute force, hashing, two pointers, or prefix methods.",
              sections: [
                {
                  title: "Input Size Signal",
                  text: "Large n often demands O(n) or O(n log n), while small n can tolerate slower methods.",
                },
                {
                  title: "Operation Pattern",
                  text: "Repeated range queries suggest preprocessing; one-pass tasks suggest window/pointer patterns.",
                },
              ],
              tips: [
                "Read constraints before coding.",
                "Write one candidate complexity pair.",
                "Reject approaches that violate limits.",
              ],
            },
            practice: {
              taskTitle: "Constraint-to-Plan Drill",
              task: "Given problem constraints, choose the most suitable algorithmic strategy.",
              input: "problem summary + bounds",
              output: "strategy name",
              requirements: [
                "Reference time complexity in decision.",
                "Mention one trade-off.",
                "Avoid over-engineering for small bounds.",
              ],
              cases: [
                { input: "n=2e5, many updates", output: "Fenwick/segment-style preprocessing" },
                { input: "n<=200, single query", output: "Simple iterative scan" },
              ],
            },
          },
        ],
      },
      {
        id: "f-u5",
        title: "Dead-End Challenge",
        type: "Practice",
        level: 2,
        lane: 0,
        requires: ["f-u2"],
        exercises: [
          {
            id: "f-u5-e1",
            title: "Edge Case Gauntlet",
            theory: {
              intro:
                "This branch is a standalone challenge path: no next unit unlocks from here, only problem-solving practice.",
              sections: [
                {
                  title: "Boundary Stress",
                  text: "Focus on empty input, single element, duplicates, and max values.",
                },
                {
                  title: "Failure Logging",
                  text: "Track exactly where assumptions break during trace and patch minimally.",
                },
              ],
              tips: [
                "Start with smallest failing case.",
                "Write expected vs actual state.",
                "Fix one bug at a time.",
              ],
            },
            practice: {
              taskTitle: "Bug Hunt Task",
              task: "Given a nearly-correct function, find and fix all hidden boundary bugs.",
              input: "function + failing test set",
              output: "fixed function",
              requirements: [
                "Preserve original complexity target.",
                "Pass all provided boundary tests.",
                "Add one extra adversarial test.",
              ],
              cases: [
                { input: "nums=[]", output: "returns neutral value without crash" },
                { input: "nums=[5]", output: "handles single element correctly" },
              ],
            },
          },
        ],
      },
      {
        id: "f-u6",
        title: "Integrated Mini Project",
        type: "Checkpoint",
        level: 3,
        lane: 1,
        requires: ["f-u3", "f-u4"],
        exercises: [
          {
            id: "f-u6-e1",
            title: "Design + Implement + Explain",
            theory: {
              intro:
                "Combine decomposition, tracing, and constraint reasoning into one complete solution workflow.",
              sections: [
                {
                  title: "Plan",
                  text: "Break the task into subproblems and pick data structures explicitly.",
                },
                {
                  title: "Verify",
                  text: "Run a dry trace and justify complexity trade-offs in plain language.",
                },
              ],
              tips: [
                "Write plan before code.",
                "Keep invariant visible while implementing.",
                "Conclude with complexity summary.",
              ],
            },
            practice: {
              taskTitle: "Mini Project",
              task: "Build a complete solution for a medium problem and present concise reasoning.",
              input: "problem statement + constraints",
              output: "accepted solution + explanation",
              requirements: [
                "Produce correct implementation.",
                "Demonstrate one dry trace snippet.",
                "State time/space complexity clearly.",
              ],
              cases: [
                { input: "case A", output: "valid output A" },
                { input: "case B", output: "valid output B" },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "arrays-strings",
    title: "Arrays & Strings",
    desc: "Two pointers, sliding window, and prefix-based reasoning.",
    completed: [],
    units: [
      {
        id: "as-u1",
        title: "Two Pointers Pattern",
        type: "Lesson",
        level: 0,
        lane: 1,
        requires: [],
        exercises: [
          {
            id: "as-u1-e1",
            title: "Opposite Direction Pointers",
            theory: {
              intro:
                "When data is sorted, opposite-direction pointers can prune search space quickly.",
              sections: [
                {
                  title: "Pointer Movement Rule",
                  text: "Move the pointer that helps approach target value.",
                },
                {
                  title: "Termination Condition",
                  text: "Stop when pointers cross or exact match found.",
                },
              ],
              tips: [
                "Sort first if order is not required.",
                "Keep invariant about searched region.",
                "Avoid re-checking processed pairs.",
              ],
            },
            practice: {
              taskTitle: "Container With Most Water",
              task: "Use two pointers to compute max area between vertical lines.",
              input: "heights: number[]",
              output: "number",
              requirements: [
                "O(n) time solution.",
                "Update best area at each step.",
                "Move smaller height pointer.",
              ],
              cases: [
                { input: "heights=[1,8,6,2,5,4,8,3,7]", output: "49" },
                { input: "heights=[1,1]", output: "1" },
              ],
            },
          },
          {
            id: "as-u1-e2",
            title: "Dedup on Sorted Array",
            theory: {
              intro:
                "Two pointers can rewrite arrays in-place while preserving unique values.",
              sections: [
                {
                  title: "Read/Write Pointers",
                  text: "Read scans all values, write stores next unique value.",
                },
                {
                  title: "In-place Guarantee",
                  text: "All writes happen inside original array bounds.",
                },
              ],
              tips: [
                "Initialize write pointer at index 1.",
                "Compare with last unique value.",
                "Return new logical length.",
              ],
            },
            practice: {
              taskTitle: "Remove Duplicates",
              task: "Remove duplicates from sorted array in-place and return new length.",
              input: "nums: number[] (sorted)",
              output: "number",
              requirements: [
                "O(1) extra memory.",
                "Keep relative order of unique values.",
                "Return count of unique items.",
              ],
              cases: [
                { input: "nums=[1,1,2]", output: "2" },
                { input: "nums=[0,0,1,1,1,2,2,3,3,4]", output: "5" },
              ],
            },
          },
        ],
      },
      {
        id: "as-u2",
        title: "Sliding Window",
        type: "Practice",
        level: 1,
        lane: 0,
        requires: ["as-u1"],
        exercises: [
          {
            id: "as-u2-e1",
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
            id: "as-u2-e2",
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
        exercises: [
          {
            id: "as-u3-e1",
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
            id: "as-u3-e2",
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
