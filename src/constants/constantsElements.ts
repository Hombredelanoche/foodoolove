import { NavLink, RecetteProps } from "@/interfaces/type";
export { navLinksElements, recetteElements };

const navLinksElements: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Nos recettes", href: "/recettes" },
  { name: "En savoir plus", href: "/" },
  { name: "Nous rejoindre", href: "/auth/register" },
];

const recetteElements: RecetteProps[] = [
  {
    id: 1,
    name: "Biryani agneaux",
    src: "@@/public/photoRecettes/biryani-agneau.jpg",
    cookingTime: 160,
    persons: 4,
    chef: "Lasurprise",
  },
  {
    id: 2,
    name: "Dhal",
    src: "@@/public/photoRecettes/dhal.jpg",
    cookingTime: 40,
    persons: 4,
    chef: "Lasurprise",
  },
  {
    id: 3,
    name: "Chana Masala",
    src: "@@/public/photoRecettes/chana-masala.jpg",
    cookingTime: 90,
    persons: 4,
    chef: "Lasurprise",
  },
  {
    id: 4,
    name: "Raïta",
    src: "@@/public/photoRecettes/raita.jpg",
    cookingTime: 15,
    persons: 4,
    chef: "MCB",
  },
  {
    id: 5,
    name: "Lassi à la mangue",
    src: "@@/public/photoRecettes/lassi-mangue.jpg",
    cookingTime: 10,
    persons: 4,
    chef: "MCB",
  },
  {
    id: 6,
    name: "Chicken Korma",
    src: "@@/public/photoRecettes/chicken-korma.jpg",
    cookingTime: 60,
    persons: 4,
    chef: "Lasurprise",
  },
  {
    id: 7,
    name: "Chicken Tandoori",
    src: "@@/public/photoRecettes/tandoori.jpg",
    cookingTime: 150,
    persons: 4,
    chef: "Lasurprise",
  },
  {
    id: 8,
    name: "Chicken 65",
    src: "@@/public/photoRecettes/chicken65.jpg",
    cookingTime: 45,
    persons: 4,
    chef: "Lasurprise",
  },
];
