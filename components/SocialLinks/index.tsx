import { socialLinks } from "@/constants/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ISocialLinkProps {
  classNames: string;
  size: number;
}

const SocialLinks = ({ classNames, size }: ISocialLinkProps) => {
  return (
    <ul className={`flex justify-center gap-2 ${classNames}`}>
      {socialLinks.map((link) => (
        <Link key={link.id} href={link.url} target="_blank">
          <li>
            <Image
              src={link.imgPath}
              alt={link.label}
              width={size}
              height={size}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialLinks;
