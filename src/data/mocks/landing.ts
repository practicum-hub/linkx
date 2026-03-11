import type {
  LandingCatalogCourse,
  LandingFeature,
  LandingFooterColumn,
  LandingNavItem,
  LandingPathCard,
  SignupSocialProvider,
} from "@/types/landing";

export const landingNavItems: LandingNavItem[] = [
  { label: "Catalog", href: "/courses", hasArrow: true },
  { label: "AI Upskilling", href: "/explore", hasArrow: true },
  { label: "Resources", href: "/explore", hasArrow: true },
  { label: "Pricing", href: "/signup" },
  { label: "For Business", href: "/community" },
  { label: "For Universities", href: "/community" },
];

export const landingSignupSocialProviders: SignupSocialProvider[] = [
  { id: "google", label: "G" },
  { id: "linkedin", label: "in" },
  { id: "facebook", label: "f" },
  { id: "apple", label: "A" },
];

export const landingFeatures: LandingFeature[] = [
  {
    title: "Career paths",
    text: "Move from your current level to a target role with structured paths, milestones, and practical outcomes.",
  },
  {
    title: "Courses and programs",
    text: "Combine short courses, deeper programs, and guided sequences in one platform.",
  },
  {
    title: "Practice in every step",
    text: "Study with lessons, exercises, checkpoints, and progress tracking across the full journey.",
  },
  {
    title: "Flexible pace",
    text: "Learn on your own schedule, keep momentum in short sessions, and pick up where you left off.",
  },
];

export const landingCatalogCourses: LandingCatalogCourse[] = [
  {
    title: "Introduction to Python",
    level: "Basic",
    duration: "4 hr",
    text: "Master the basics of data analysis with Python in just four hours. This online course introduces the Python interface and popular packages.",
  },
  {
    title: "Introduction to SQL",
    level: "Basic",
    duration: "2 hr",
    text: "Learn how to create and query relational databases using SQL in focused short lessons with practical exercises.",
  },
  {
    title: "Introduction to Power BI",
    level: "Basic",
    duration: "4 hr",
    text: "Master Power BI fundamentals and learn to use modern data visualization tools for clear, impactful reports.",
  },
  {
    title: "Understanding Artificial Intelligence",
    level: "Basic",
    duration: "2 hr",
    text: "Learn key AI concepts, including machine learning, deep learning, NLP, and practical generative AI examples.",
  },
  {
    title: "Introduction to Tableau",
    level: "Basic",
    duration: "6 hr",
    text: "Start your Tableau journey with dashboards, dimensions, and data storytelling workflows used by analysts.",
  },
  {
    title: "Introduction to Excel",
    level: "Basic",
    duration: "4 hr",
    text: "Master Excel basics and use spreadsheets for everyday analysis tasks, reporting, and data organization.",
  },
];

export const landingPathCards: LandingPathCard[] = [
  {
    title: "I'm switching careers",
    text: "Move into a new field with guided career paths, core courses, and practical programs that build confidence.",
    cta: "Explore Career Paths",
    image: "/images/algorithms.png",
  },
  {
    title: "I'm a team leader",
    text: "Give your team clear development routes with role-based programs, shared progress, and upskilling plans.",
    cta: "For Teams",
    image: "/images/nextjs.webp",
  },
  {
    title: "I want to skill up",
    text: "Add new skills through focused courses and programs in data, AI, analytics, and technical foundations.",
    cta: "Browse Programs",
    image: "/images/rust.png",
  },
];

export const landingFooterColumns: LandingFooterColumn[] = [
  {
    title: "Learn",
    links: ["Catalog", "Skill Tracks", "Career Paths", "Projects", "Certifications"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Webinars", "Community", "Help Center"],
  },
  {
    title: "For Teams",
    links: ["For Business", "For Universities", "Enterprise", "Case Studies", "Pricing"],
  },
];
