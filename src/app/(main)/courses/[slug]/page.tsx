import { notFound } from "next/navigation";
import CourseDetailPage from "@/components/pages/CourseDetail/CourseDetailPage";
import { getCourseBySlug } from "@/data/courses/catalog";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <CourseDetailPage
      courseTitle={course.title}
      courseDescription={course.description}
      topicId={course.topicId}
    />
  );
}
