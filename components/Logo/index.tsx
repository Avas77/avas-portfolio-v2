import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex justify-center items-center">
      <Image
        src={"/assets/logo/avas-new.svg"}
        alt="Avas Logo"
        width={16}
        height={16}
      />
      <span className="font-bold ml-2">Avas</span>
    </Link>
  );
};

export default Logo;
