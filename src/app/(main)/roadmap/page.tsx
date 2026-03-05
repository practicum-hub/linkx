import CareerPaths from "@/components/pages/Roadmap/CareerPaths/CareerPaths";
import styles from "./page.module.css";
import Courses from "@/components/pages/Roadmap/Courses/Courses";
// import Hero from "@/components/pages/Roadmap/Hero/Hero";

const adGoals = [
  { icon: "->", label: "Start my career" },
  { icon: "<>", label: "Change my career" },
  { icon: "^", label: "Grow in my current role" },
  { icon: "o", label: "Explore topics outside of work" },
];

export default function Roadmap() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {/* <Hero /> */}
        <Courses />
        <section className={styles.addSection} aria-label="Advertisement section">
          <h3 className={styles.addTitle}>What brings you here today?</h3>
          <div className={styles.addGoals}>
            {adGoals.map((goal) => (
              <button className={styles.addGoal} type="button" key={goal.label}>
                <span className={styles.addGoalIcon}>{goal.icon}</span>
                <span className={styles.addGoalLabel}>{goal.label}</span>
              </button>
            ))}
          </div>
        </section>
        <CareerPaths />
      </div>
    </div>
  );
}
