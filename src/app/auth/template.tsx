"use client";
import "@/styles/globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Connexion", href: "login" },
  { name: "Inscription", href: "register" },
  { name: "Mot de passe oublié", href: "forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <>
      <article>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </article>
      <ul className="flex justify-center gap-5 ">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                title={link.name}
                className={
                  isActive ? "font-bold text-white" : "font-sans text-black"
                }
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <section>{children}</section>
    </>
  );
}
