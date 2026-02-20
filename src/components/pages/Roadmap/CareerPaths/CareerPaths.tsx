import styles from "./career.module.css";

import TextBlock from "../TextBlock/TextBlock";
import CareerCard from "./CareerCard/CareerCard";

const careerPaths = [
  {
    title: "AI Engineer",
    desc: "Build and ship AI features in production apps.",
    duration: "8 months",
    courses: "12 courses",
    salary: "$125k avg",
    demand: "High demand",
    gradient: "linear-gradient(140deg, #4f8cff 0%, #57c3ff 100%)",
    href: "/roadmap",
  },
  {
    title: "Frontend Engineer",
    desc: "Create fast, scalable, and polished web interfaces.",
    duration: "6 months",
    courses: "9 courses",
    salary: "$110k avg",
    demand: "Very high",
    gradient: "linear-gradient(140deg, #5f67ff 0%, #8f7dff 100%)",
    href: "/roadmap",
  },
  {
    title: "Backend Engineer",
    desc: "Design APIs, databases, and resilient backend systems.",
    duration: "7 months",
    courses: "10 courses",
    salary: "$118k avg",
    demand: "High demand",
    gradient: "linear-gradient(140deg, #06b6d4 0%, #3b82f6 100%)",
    href: "/roadmap",
  },
  {
    title: "ML Engineer",
    desc: "Train, evaluate, and deploy machine learning pipelines.",
    duration: "9 months",
    courses: "13 courses",
    salary: "$132k avg",
    demand: "Growing fast",
    gradient: "linear-gradient(140deg, #8b5cf6 0%, #d946ef 100%)",
    href: "/roadmap",
  },
  {
    title: "DevOps Engineer",
    desc: "Automate CI/CD and improve infrastructure reliability.",
    duration: "6 months",
    courses: "8 courses",
    salary: "$116k avg",
    demand: "High demand",
    gradient: "linear-gradient(140deg, #10b981 0%, #22c55e 100%)",
    href: "/roadmap",
  },
  {
    title: "Data Engineer",
    desc: "Build robust data platforms and ETL pipelines.",
    duration: "7 months",
    courses: "11 courses",
    salary: "$122k avg",
    demand: "Very high",
    gradient: "linear-gradient(140deg, #f59e0b 0%, #f97316 100%)",
    href: "/roadmap",
  },
];

export default function CareerPaths() {
  return (
    <div className={styles.wrapper}>
      <TextBlock
        title="Career Paths"
        desc="Structured roadmaps for specific job roles with clear outcomes."
      />

      <ul className={styles.cards}>
        {careerPaths.map((path) => (
          <CareerCard key={path.title} {...path} />
        ))}
      </ul>
    </div>
  );
}
