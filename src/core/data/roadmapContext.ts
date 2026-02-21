import { algorithmsSidebarContent, defaultSidebarContent } from "@/data/mocks/roadmap/sidebarContent";
import type { RoadmapSidebarContent } from "@/types/roadmap";

export function getRoadmapSidebarContent(pathname: string, roadmapParam: string | null): RoadmapSidebarContent {
  if (roadmapParam === "algorithms-zero-to-hero" || pathname.startsWith("/practice") || pathname.startsWith("/interviews")) {
    return algorithmsSidebarContent;
  }

  return defaultSidebarContent;
}
