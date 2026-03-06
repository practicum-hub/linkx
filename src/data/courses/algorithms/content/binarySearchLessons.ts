import type { UnitExercise } from "@/types/algorithms";

export const binarySearchLessons: UnitExercise[] = [
  {
    id: "f-u6-e1-t",
    type: "theory",
    title: "1. Introduction",
    theory: {
      intro:
        "Binary Search reduces many sorted-search problems from O(n) to O(log n) by halving the search space each step.",
      sections: [
        {
          title: "When this appears",
          text: "Problems on sorted or almost-sorted structures where fast lookup is required.",
        },
        {
          title: "Core gain",
          text: "Linear scan checks one-by-one. Binary search keeps only one half after each comparison.",
        },
      ],
      tips: [
        "Always verify sorted/monotonic condition first.",
      ],
    },
  },
  {
    id: "f-u6-e2-t",
    type: "theory",
    title: "2. What Is Binary Search",
    theory: {
      intro:
        "Binary Search repeatedly compares target with the middle element and discards half of the range.",
      sections: [
        {
          title: "Example",
          text: "For [1,3,5,7,9,11,13], target 9: mid 7 -> go right, mid 11 -> go left, then found 9.",
        },
        {
          title: "Complexity",
          text: "Time O(log n), extra space O(1) in iterative implementation.",
        },
      ],
      tips: [
        "Think in ranges, not in individual elements.",
      ],
    },
  },
  {
    id: "f-u6-e3-t",
    type: "theory",
    title: "3. Binary Search Template",
    theory: {
      intro:
        "A stable template avoids most boundary mistakes.",
      sections: [
        {
          title: "Closed interval template",
          text: "left=0, right=n-1; while left<=right: mid=left+(right-left)//2; compare nums[mid] and move left/right; return -1 if not found.",
        },
        {
          title: "Why mid is computed this way",
          text: "left + (right - left) // 2 avoids overflow in fixed-width integer languages.",
        },
      ],
      tips: [
        "Memorize one template and use it consistently.",
      ],
    },
  },
  {
    id: "f-u6-e4-t",
    type: "theory",
    title: "4. When to Use Binary Search",
    theory: {
      intro:
        "Use binary search on sorted arrays or any monotonic true/false answer space.",
      sections: [
        {
          title: "Common signals",
          text: "sorted, rotated sorted, first/last occurrence, smallest x such that..., capacity/speed/days feasibility.",
        },
      ],
      tips: [
        "If answer feasibility is monotonic, search over answers.",
      ],
    },
  },
  {
    id: "f-u6-e5-t",
    type: "theory",
    title: "5. Common Variations",
    theory: {
      intro:
        "Interview tasks often use variants beyond exact target search.",
      sections: [
        {
          title: "Classic search",
          text: "Find exact target index or return -1.",
        },
        {
          title: "Lower bound",
          text: "First index where value >= target (first occurrence, insertion position).",
        },
        {
          title: "Upper bound",
          text: "First index where value > target (last occurrence is upperBound - 1).",
        },
      ],
      tips: [
        "Choose interval style (closed or half-open) and stay consistent.",
      ],
    },
  },
  {
    id: "f-u6-e6-t",
    type: "theory",
    title: "6. Lower Bound Template",
    theory: {
      intro:
        "Lower bound returns the first position with value >= target.",
      sections: [
        {
          title: "Half-open interval template",
          text: "left=0, right=n; while left<right: mid=(left+right)//2; if nums[mid]>=target: right=mid else left=mid+1; answer=left.",
        },
        {
          title: "Example",
          text: "nums=[1,2,2,2,3,4], target=2 -> lower bound index is 1.",
        },
      ],
      tips: [
        "right starts at n, not n-1, in this template.",
      ],
    },
  },
  {
    id: "f-u6-e7-t",
    type: "theory",
    title: "7. Binary Search on Answer",
    theory: {
      intro:
        "If feasibility is monotonic, binary search the answer itself.",
      sections: [
        {
          title: "Pattern",
          text: "Search k in [minPossible, maxPossible] and use feasible(k) to shrink interval.",
        },
        {
          title: "Example",
          text: "Koko Eating Bananas: higher speed makes finishing easier, so condition is monotonic.",
        },
      ],
      tips: [
        "Design feasible(mid) first, then apply binary search shell.",
      ],
    },
  },
  {
    id: "f-u6-e8-t",
    type: "theory",
    title: "8. Common Pitfalls",
    theory: {
      intro:
        "Most binary search bugs come from interval boundaries and updates.",
      sections: [
        {
          title: "Frequent mistakes",
          text: "Using classic search on unsorted data, wrong loop condition, missing boundary update, infinite loop, and off-by-one errors.",
        },
      ],
      tips: [
        "Pick one template and do not mix conditions from another template.",
      ],
    },
  },
  {
    id: "f-u6-e9-p",
    type: "practice",
    title: "9. Practice Problems",
    practice: {
      taskTitle: "Binary Search Practice Set",
      task: "Implement classic, bound-based, and answer-space binary search problems.",
      input: "Sorted arrays or monotonic answer constraints",
      output: "Correct result for each problem + complexity",
      requirements: [
        "Classic Binary Search: [1,3,5,7,9,11], target=7 -> index 3.",
        "Search Insert Position (Lower Bound): [1,3,5,6], targets 5/2/7 -> 2/1/4.",
        "First and Last Position: [5,7,7,8,8,10], target=8 -> [3,4].",
        "Include Peak Element and Rotated Sorted Array Search.",
        "Bonus: Koko Eating Bananas (binary search on answer).",
      ],
      cases: [
        { input: "Classic: nums=[1,3,5,7,9,11], target=7", output: "3" },
        { input: "Insert Position: nums=[1,3,5,6], target=2", output: "1" },
        { input: "First/Last: nums=[5,7,7,8,8,10], target=8", output: "[3,4]" },
        { input: "Rotated Search: nums=[4,5,6,7,0,1,2], target=0", output: "4" },
        { input: "Bonus Koko: piles=[3,6,7,11], h=8", output: "4" },
      ],
    },
  },
];
