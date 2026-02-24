import { algorithmsSidebarContent, defaultSidebarContent } from "@/data/mocks/roadmap/sidebarContent";
import type { RoadmapSidebarContent } from "@/types/roadmap";

export function getRoadmapSidebarContent(pathname: string): RoadmapSidebarContent {
  const isCourseContext =
    pathname.startsWith("/practice") ||
    pathname.startsWith("/mistakes") ||
    pathname.startsWith("/certificate") ||
    pathname.startsWith("/lesson") ||
    pathname.startsWith("/learn");

  if (isCourseContext) {
    return algorithmsSidebarContent;
  }

  return defaultSidebarContent;
}
