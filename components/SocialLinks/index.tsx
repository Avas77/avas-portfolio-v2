import { socialLinks } from "@/constants/SocialLinks";
import Image from "next/image";
import React from "react";

interface ISocialLinkProps {
  classNames: string;
  size: number;
}

const SocialLinks = ({ classNames, size }: ISocialLinkProps) => {
  return (
    <ul className={`flex justify-center gap-2 ${classNames}`}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <Image
            src={link.imgPath}
            alt={link.label}
            width={size}
            height={size}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
