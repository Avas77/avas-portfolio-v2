import { headerLinks } from "@/constants/HeaderLinks";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  return (
    <ul className="flex flex-col sm:flex-row gap-8 ">
      {headerLinks.map((link) => (
        <li key={link.id} className="text-[32px] sm:text-base">
          <Link href={link.path}>
            <span className="text-primary">#</span>
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
