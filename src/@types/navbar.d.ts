export interface INavbarItem {
  id: string;
  title: string;
  href: string;
  isExternal?: boolean;
}

export type INavbar = INavbarItem[]; 