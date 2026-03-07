import { algorithmsRoadmap } from "@/data/courses/algorithms/data";

export type CourseCatalogItem = {
  slug: string;
  title: string;
  level: "Basic" | "Intermediate";
  description: string;
  authors: string[];
  progress: number;
  actionLabel: string;
  topicId: string;
};

export function slugifyCourseTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const courseCatalog: CourseCatalogItem[] = algorithmsRoadmap.map((topic, index) => {
  const progress = Math.round((topic.completed.length / Math.max(topic.units.length, 1)) * 100);

  return {
    slug: slugifyCourseTitle(topic.title),
    title: topic.title,
    level: index === 0 ? "Basic" : "Intermediate",
    description: topic.desc,
    authors: ["Anton Volkov"],
    progress,
    actionLabel: progress > 0 ? "Continue" : "Start",
    topicId: topic.id,
  };
});

export function getCourseBySlug(slug: string) {
  return courseCatalog.find((course) => course.slug === slug);
}
