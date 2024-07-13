import { NavLink } from "@/interfaces/type";

export { navLinksElements };

const navLinksElements: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Nos recettes", href: "/recettes" },
  { name: "En savoir plus", href: "/" },
  { name: "Nous rejoindre", href: "/auth/register" },
];
