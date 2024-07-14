export interface NavLink {
  name: string;
  href: string;
}

export interface RecetteProps {
  id: number;
  name: string;
  src: string;
  cookingTime: number;
  persons: number;
  chef: string;
}
