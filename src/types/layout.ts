import type { SidebarItemType } from "@/types/roadmap";

export type SidebarSection = {
  title?: string;
  items: SidebarItemType[];
};

export type AppSidebarCta = {
  href: string;
  label: string;
};

export type AppSidebarContent = {
  sections: SidebarSection[];
  cta: AppSidebarCta;
};

export type RightSidebarAdTone = "primary" | "secondary";

export type RightSidebarAd = {
  id: string;
  tag: string;
  title: string;
  text: string;
  actionLabel: string;
  actionHref: string;
  tone?: RightSidebarAdTone;
  compact?: boolean;
};
