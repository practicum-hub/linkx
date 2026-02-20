import CareerPaths from "@/components/pages/Roadmap/CareerPaths/CareerPaths";
import styles from "./page.module.css";
import Courses from "@/components/pages/Roadmap/Courses/Courses";
import Hero from "@/components/pages/Roadmap/Hero/Hero";

export default function Roadmap() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Hero />
        <Courses />
        <CareerPaths />
      </div>
    </div>
  );
}
