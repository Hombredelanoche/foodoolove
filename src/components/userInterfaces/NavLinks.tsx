"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { navLinksElements } from "@/constants/constantsElements";

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const [activeName, setActiveName] = useState<string>("");
  const handleClick = (name: string) => {
    setActiveName(name);
  };
  return (
    <>
      <ul className={clsx("flex gap-10", className)}>
        {navLinksElements.map((item) => (
          <li key={item.name} className="cursor-pointer">
            <Link
              href={item.href}
              title={item.name}
              className={clsx(
                `text-lg font-playwritePr text-white font-semibold hover:text-primaryLight transition `,
                {
                  "active:text-primaryLight font-bold underline":
                    activeName === item.name,
                },
                className
              )}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
