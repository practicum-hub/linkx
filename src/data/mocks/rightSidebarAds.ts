import type { RightSidebarAd } from "@/types/layout";

export const rightSidebarAds: RightSidebarAd[] = [
  {
    id: "frontend-pack",
    tag: "Sponsored",
    title: "Frontend Interview Pack",
    text: "120 practical tasks with mock interviews and clear answer breakdowns.",
    actionLabel: "Start Trial",
    actionHref: "/explore",
    tone: "primary",
  },
  {
    id: "algorithms-booster",
    tag: "Ad",
    title: "Algorithms Booster",
    text: "Strengthen DSA fundamentals in 4 weeks with mentor-checked practice.",
    actionLabel: "Learn More",
    actionHref: "/courses",
  },
  {
    id: "cv-review",
    tag: "Partner",
    title: "CV Review by Mentors",
    text: "Receive actionable feedback for your resume and LinkedIn profile within 24 hours.",
    actionLabel: "Book Review",
    actionHref: "/careers",
  },
  {
    id: "pro-deal",
    tag: "Deal",
    title: "Pro Plan -40%",
    text: "Unlock all learning paths with one annual subscription.",
    actionLabel: "Claim",
    actionHref: "/signup",
    compact: true,
    tone: "secondary",
  },
];
