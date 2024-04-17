import React from "react";
import Logo from "../Logo";
import Image from "next/image";

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
          <p>full-stack developer</p>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-bold text-2xl">Media</h5>
          <div className="flex gap-2">
            <Image
              src="/assets/social-links/Linkedin.svg"
              alt="LinkedIn"
              width={32}
              height={32}
            />
            <Image
              src="/assets/social-links/Github.svg"
              alt="Github"
              width={32}
              height={32}
            />
            <Image
              src="/assets/social-links/Twitter.svg"
              alt="Twitter"
              width={32}
              height={32}
            />
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
