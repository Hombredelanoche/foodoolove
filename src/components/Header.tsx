import NavLinks from "@/components/userInterfaces/NavLinks";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col bg-secondary p-3 rounded-sm">
      <nav className="flex justify-center items-center gap-10">
        <Image
          src="/LogoStatic.jpg"
          width={115}
          height={115}
          alt="LogoFoodolove"
          unoptimized
          className=""
        />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
