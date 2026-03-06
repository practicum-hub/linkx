import CareerPaths from "@/components/pages/Roadmap/CareerPaths/CareerPaths";
import Hero from "@/components/pages/Roadmap/Hero/Hero";
import styles from "./page.module.css";

export default function Roadmap() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <Hero />
        <CareerPaths />
      </div>
    </div>
  );
}
