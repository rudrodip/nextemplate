export type DefaultNavbarItem = {
  title: string;
  href: string;
  disabled?: boolean;
  children: DefaultNavbarItem[];
};
