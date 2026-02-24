import type { RoadmapSidebarContent } from "@/types/roadmap";

export const defaultSidebarContent: RoadmapSidebarContent = {
  sidebarItems: [
    { name: "Roadmap", href: "/roadmap", iconSrc: "/icons/layers.png" },
    { name: "Interviews", href: "/interviews", iconSrc: "/icons/run.png" },
    { name: "Leaderboards", href: "/leaderboard", iconSrc: "/icons/streak.png" },
    { name: "Profile", href: "/profile", iconSrc: "/icons/question.png" },
  ],
  goalTitle: "Daily Goal",
  goalText: "Complete 3 lessons to keep your streak alive.",
  goalButtonLabel: "Open Practice",
  snapshotTitle: "Snapshot",
  stats: [
    { id: 1, value: "12", label: "Day Streak" },
    { id: 2, value: "34", label: "Tasks / Week" },
    { id: 3, value: "2460", label: "XP" },
  ],
  metricsTitle: "Focus Metrics",
  highlights: [
    { id: 1, title: "Focus", value: "82%", tone: "mint" },
    { id: 2, title: "Accuracy", value: "91%", tone: "blue" },
    { id: 3, title: "Speed", value: "1.7x", tone: "amber" },
  ],
  statusTitle: "Status",
  statusItems: [
    { label: "Active Topic", value: "Big O Notation" },
    { label: "Next Goal", value: "Finish 2 checkpoints" },
  ],
  quickActions: ["Start Sprint", "Random Task"],
};

export const algorithmsSidebarContent: RoadmapSidebarContent = {
  sidebarItems: [
    { name: "Roadmap", href: "/roadmap", iconSrc: "/icons/layers.png" },
    { name: "Practice", href: "/practice", iconSrc: "/icons/run.png" },
    { name: "Mistakes", href: "/mistakes", iconSrc: "/icons/streak.png" },
    { name: "Certificate", href: "/certificate", iconSrc: "/icons/arrowhead-up.png" },
  ],
  goalTitle: "Algorithms Goal",
  goalText: "Solve 2 graph tasks and review one complexity note.",
  goalButtonLabel: "Continue Course",
  snapshotTitle: "Algorithms Snapshot",
  stats: [
    { id: 1, value: "41", label: "Solved Problems" },
    { id: 2, value: "6/8", label: "Interview Rounds Ready" },
    { id: 3, value: "74%", label: "Course Completion" },
  ],
  metricsTitle: "Course Metrics",
  highlights: [
    { id: 1, title: "Accuracy", value: "88%", tone: "mint" },
    { id: 2, title: "Avg Complexity", value: "O(n log n)", tone: "blue" },
    { id: 3, title: "Speed", value: "31 min/task", tone: "amber" },
  ],
  statusTitle: "Course Status",
  statusItems: [
    { label: "Active Module", value: "Trees & Recursion" },
    { label: "Next Interview Milestone", value: "2 medium tasks in 45 min" },
  ],
  quickActions: ["Mock Interview", "Random Medium"],
};
