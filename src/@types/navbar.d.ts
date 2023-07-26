export type NavigationPath = "hero" | "specialties" | "greet" | "contact";

export interface INavbarItem {
  id: NavigationPath;
  title: string;
  href: string;
  isExternal?: boolean;
}

export type INavbar = INavbarItem[]; 