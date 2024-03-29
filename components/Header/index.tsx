"use client";
import Image from "next/image";
import NavItems from "../NavItems";
import Logo from "../Logo";
import { useState } from "react";
import MobileNav from "../MobileNav";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full flex justify-between items-center px-4 lg:px-0 pt-[19px] pb-2 lg:pt-8">
      <Logo />
      <nav className="hidden sm:block">
        <NavItems />
      </nav>
      <button className="block sm:hidden" onClick={() => setShowMenu(true)}>
        <Image src="/assets/menu.svg" alt="menu" width={24} height={24} />
      </button>
      {showMenu && <MobileNav closeMenu={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;
