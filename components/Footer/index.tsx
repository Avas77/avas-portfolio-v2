import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import { socialLinks } from "@/constants/SocialLinks";
import LinkButton from "../ImageButton";

const Footer = ({ classNames }: { classNames?: string }) => {
  return (
    <footer
      className={`flex flex-col border-t border-gray px-4 xl:px-0 ${classNames}`}
    >
      <div className="flex flex-col md:flex-row justify-between container mt-8 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <Logo />
            <p className="text-gray">avasbajracharya9@gmail.com</p>
          </div>
          <p>Web designer and frontend developer</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-2xl">Media</h5>
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <LinkButton openInNewtab url={link.url} key={link.id}>
                <Image
                  src={link.imgPath}
                  alt={link.label}
                  width={32}
                  height={32}
                />
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-12 mb-8 text-center text-gray">
        © Copyright 2022. Made by Avas
      </p>
    </footer>
  );
};

export default Footer;
