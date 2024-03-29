import Image from "next/image";
import React from "react";
import SocialLinks from "../SocialLinks";

const SideLinks = () => {
  return (
    <aside className="absolute left-4 hidden xl:block">
      <div
        className="bg-gray w-0.5 h-[155px] ml-auto mr-auto mb-2"
        aria-hidden={true}
      ></div>
      <SocialLinks classNames="flex-col" size={32} />
    </aside>
  );
};

export default SideLinks;
