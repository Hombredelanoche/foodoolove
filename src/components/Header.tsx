import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col bg-slate-400">
      <nav className="flex justify-center p-5">
        <ul className="flex gap-16">
          <li>
            <Link href="/recettes">Nos recettes</Link>
          </li>
          <li>
            <Link href="/nousContacter">Nous contacter</Link>
          </li>
          <li>
            <Link href="/atelier">Atelier</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
