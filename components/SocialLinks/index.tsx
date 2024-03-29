import { socialLinks } from "@/constants/SocialLinks";
import Image from "next/image";
import React from "react";

const SocialLinks = () => {
  return (
    <ul className="flex justify-center gap-2">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <Image src={link.imgPath} alt={link.label} width={64} height={64} />
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
