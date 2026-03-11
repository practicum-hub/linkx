export type LandingFeature = {
  title: string;
  text: string;
};

export type LandingCatalogCourse = {
  title: string;
  level: string;
  duration: string;
  text: string;
};

export type LandingPathCard = {
  title: string;
  text: string;
  cta: string;
  image: string;
};

export type LandingFooterColumn = {
  title: string;
  links: string[];
};

export type LandingNavItem = {
  label: string;
  href: string;
  hasArrow?: boolean;
};

export type SignupSocialProvider = {
  id: string;
  label: string;
};
