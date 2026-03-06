import type { UnitExercise } from "@/types/algorithms";

export const linkedListsLessons: UnitExercise[] = [
  {
    id: "f-u7-e1-t",
    type: "theory",
    title: "1. Introduction to Linked Lists",
    theory: {
      intro:
        "Linked lists store data as connected nodes and are useful when insertions/deletions are frequent.",
      sections: [
        {
          title: "Array vs linked list",
          text: "Arrays give O(1) index access but middle insert/delete can cost O(n) due to shifting.",
        },
        {
          title: "Why linked lists",
          text: "Linked lists avoid shifting by rewiring pointers between nodes.",
        },
      ],
      tips: [
        "Use linked lists when pointer updates are cheaper than shifting arrays.",
      ],
    },
  },
  {
    id: "f-u7-e2-t",
    type: "theory",
    title: "2. Structure of a Node",
    theory: {
      intro:
        "Each node stores a value and a pointer to the next node.",
      sections: [
        {
          title: "Basic shape",
          text: "Node = { value, next }. Example: 1 -> 4 -> 7 -> 9 -> null.",
        },
        {
          title: "Key terms",
          text: "First node is head; last node points to null.",
        },
      ],
      tips: [
        "Always track head carefully during updates.",
      ],
    },
  },
  {
    id: "f-u7-e3-t",
    type: "theory",
    title: "3. Types of Linked Lists",
    theory: {
      intro:
        "Linked lists come in singly, doubly, and circular variants.",
      sections: [
        {
          title: "Singly",
          text: "Each node points only to next.",
        },
        {
          title: "Doubly",
          text: "Each node has prev and next for easier deletion and bidirectional traversal at extra memory cost.",
        },
        {
          title: "Circular",
          text: "Tail points back to head; useful in scheduling and round-robin flows.",
        },
      ],
      tips: [
        "Pick list type based on traversal and update requirements.",
      ],
    },
  },
  {
    id: "f-u7-e4-t",
    type: "theory",
    title: "4. Traversing a Linked List",
    theory: {
      intro:
        "Linked lists do not support direct indexing; traversal is sequential.",
      sections: [
        {
          title: "Traversal pattern",
          text: "current = head; while current != null: process current.value; current = current.next.",
        },
        {
          title: "Complexity",
          text: "Traversal is O(n).",
        },
      ],
      tips: [
        "Guard against null before dereferencing current.next.",
      ],
    },
  },
  {
    id: "f-u7-e5-t",
    type: "theory",
    title: "5. Inserting Nodes",
    theory: {
      intro:
        "Insertion cost depends on where and whether references are already known.",
      sections: [
        {
          title: "Insert at head",
          text: "newNode.next = head; head = newNode; complexity O(1).",
        },
        {
          title: "Insert at tail",
          text: "Traverse to last node then link new node; O(n) unless tail pointer is maintained.",
        },
        {
          title: "Insert in middle",
          text: "newNode.next = node.next; node.next = newNode.",
        },
      ],
      tips: [
        "Rewire in safe order to avoid losing part of the list.",
      ],
    },
  },
  {
    id: "f-u7-e6-t",
    type: "theory",
    title: "6. Deleting Nodes",
    theory: {
      intro:
        "Deletion in linked lists is pointer reassignment.",
      sections: [
        {
          title: "Delete head",
          text: "head = head.next.",
        },
        {
          title: "Delete after node",
          text: "node.next = node.next.next.",
        },
      ],
      tips: [
        "Check node and node.next before deleting after node.",
      ],
    },
  },
  {
    id: "f-u7-e7-t",
    type: "theory",
    title: "7. Reversing a Linked List",
    theory: {
      intro:
        "Reverse list direction by flipping next pointers one by one.",
      sections: [
        {
          title: "Iterative idea",
          text: "Use prev, current, nextNode; point current.next to prev; advance all pointers.",
        },
        {
          title: "Complexity",
          text: "Time O(n), extra space O(1).",
        },
      ],
      tips: [
        "Store nextNode before rewiring current.next.",
      ],
    },
  },
  {
    id: "f-u7-e8-t",
    type: "theory",
    title: "8. Fast & Slow Pointers",
    theory: {
      intro:
        "Two pointers moving at different speeds solve several linked-list tasks efficiently.",
      sections: [
        {
          title: "Middle node",
          text: "slow moves by 1, fast by 2. When fast ends, slow points near middle.",
        },
        {
          title: "Common uses",
          text: "Find middle, detect cycles, and split lists for further operations.",
        },
      ],
      tips: [
        "Loop condition should check fast and fast.next.",
      ],
    },
  },
  {
    id: "f-u7-e9-t",
    type: "theory",
    title: "9. Cycle Detection",
    theory: {
      intro:
        "Floyd's cycle detection uses fast and slow pointers; if they meet, cycle exists.",
      sections: [
        {
          title: "Algorithm",
          text: "Move slow by one and fast by two until fast ends or slow == fast.",
        },
        {
          title: "Complexity",
          text: "Time O(n), extra space O(1).",
        },
      ],
      tips: [
        "Pointer identity equality indicates collision in cycle detection.",
      ],
    },
  },
  {
    id: "f-u7-e10-t",
    type: "theory",
    title: "10. When to Use Linked Lists",
    theory: {
      intro:
        "Linked lists are good for dynamic structures with frequent insert/delete operations.",
      sections: [
        {
          title: "Typical use cases",
          text: "Stacks, queues, adjacency lists, and dynamic memory chains.",
        },
        {
          title: "Trade-off",
          text: "Access is O(n), while local insert/delete can be O(1) with the right pointer.",
        },
      ],
      tips: [
        "Choose linked lists when update patterns dominate random access.",
      ],
    },
  },
  {
    id: "f-u7-e11-p",
    type: "practice",
    title: "Practice Problems",
    practice: {
      taskTitle: "Linked Lists Practice Set",
      task: "Implement core linked-list tasks and pointer techniques.",
      input: "Linked list heads and problem-specific parameters",
      output: "Modified list or boolean/index result depending on task",
      requirements: [
        "Reverse Linked List.",
        "Merge Two Sorted Lists.",
        "Linked List Cycle.",
        "Middle of the Linked List.",
        "Remove Nth Node From End.",
        "Bonus: Add Two Numbers.",
      ],
      cases: [
        { input: "Reverse: 1->2->3->4->5", output: "5->4->3->2->1" },
        { input: "Merge: 1->2->4 and 1->3->4", output: "1->1->2->3->4->4" },
        { input: "Cycle detection on cyclic list", output: "true" },
        { input: "Middle of 1->2->3->4->5", output: "3" },
        { input: "Remove 2nd from end in 1->2->3->4->5", output: "1->2->3->5" },
        { input: "Bonus add numbers: 2->4->3 + 5->6->4", output: "7->0->8" },
      ],
    },
  },
];
