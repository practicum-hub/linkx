export type SidebarSubitemType = {
  name: string;
  href: string;
};

export type SidebarItemType = {
  title: string | null;
  subItems: SidebarSubitemType[];
};
