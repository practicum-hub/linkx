import type { AppSidebarContent } from "@/types/layout";

export const appSidebarContent: AppSidebarContent = {
  sections: [
    {
      items: [
        { name: "Explore", href: "/explore", iconSrc: "" },
        { name: "My progress", href: "/progress", iconSrc: "" },
      ],
    },
    {
      title: "Learn",
      items: [
        { name: "Courses", href: "/courses", iconSrc: "" },
        { name: "Careers", href: "/careers", iconSrc: "" },
      ],
    },
  ],
  cta: {
    href: "/learn",
    label: "Getting Started (3/4)",
  },
};
