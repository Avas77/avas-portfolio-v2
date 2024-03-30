import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <section className="basis-9/12 px-[22px] lg:px-0">
      <div className="relative">
        <Image
          src={"/assets/purple-line.svg"}
          alt="purple lines"
          width={155}
          height={155}
          className="absolute top-20"
        />
        <Image
          src={"/assets/home-img.png"}
          alt="Hoodie Man"
          width={457}
          height={386}
          className="relative z-10 ml-auto"
        />
        <Image
          src="/assets/Dots.svg"
          alt="Dots"
          width={84}
          height={84}
          className="absolute right-4 z-20 bottom-14"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:gap-[10px] border border-gray px-2 py-2 w-auto sm:w-11/12">
        <div className="bg-primary w-4 h-4" aria-hidden="true"></div>
        <span className="text-gray">Currently working on </span>
        <strong className="font-semibold">Portfolio</strong>
      </div>
    </section>
  );
};

export default HeroImage;
