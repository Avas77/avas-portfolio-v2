import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import NavItems from "../NavItems";
import SocialLinks from "../SocialLinks";

interface IMobileNavProps {
  closeMenu: VoidFunction;
}

const MobileNav = ({ closeMenu }: IMobileNavProps) => {
  return (
    <section className="fixed w-screen h-full top-0 left-0 bg-background z-30">
      <div className="flex justify-between pt-[19px] px-4 pb-2">
        <Logo />
        <button onClick={closeMenu}>
          <Image
            src="/assets/close.svg"
            alt="close sign"
            width={24}
            height={24}
          />
        </button>
      </div>
      <nav className="mt-[47px] px-4">
        <NavItems />
      </nav>
      <section className="mt-[107px]">
        <SocialLinks />
      </section>
    </section>
  );
};

export default MobileNav;
