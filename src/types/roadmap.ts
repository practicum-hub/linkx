export type SidebarItemType = {
  name: string;
  href: string;
  iconSrc: string;
};

export type StatCard = {
  id: number;
  value: string;
  label: string;
};

export type HighlightCard = {
  id: number;
  title: string;
  value: string;
  tone: "mint" | "blue" | "amber";
};

export type StatusItem = {
  label: string;
  value: string;
};

export type RoadmapSidebarContent = {
  sidebarItems: SidebarItemType[];
  goalTitle: string;
  goalText: string;
  goalButtonLabel: string;
  snapshotTitle: string;
  stats: StatCard[];
  metricsTitle: string;
  highlights: HighlightCard[];
  statusTitle: string;
  statusItems: StatusItem[];
  quickActions: [string, string];
};

export type RoadmapCourse = {
  title: string;
  desc: string;
  level: string;
  duration: string;
  progress: number;
  unitsDone: number;
  totalUnits: number;
  xp: number;
  imageSrc: string;
  href: string;
};

export type CareerPath = {
  title: string;
  desc: string;
  duration: string;
  courses: string;
  salary: string;
  demand: string;
  gradient: string;
  href: string;
};
