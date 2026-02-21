import TextBlock from "../TextBlock/TextBlock";
import Course from "./Course/Course";
import styles from "./courses.module.css";
import { roadmapCourses } from "@/data/mocks/roadmap/courses";

export default function Courses() {
  return (
    <div className={styles.wrapper}>
      <TextBlock
        title="Pick a Course"
        desc="Start your journey from zero to hero with curated, practical tracks."
      />

      <ul className={styles.courses}>
        {roadmapCourses.map((course) => (
          <Course key={course.title} {...course} />
        ))}
      </ul>
    </div>
  );
}
