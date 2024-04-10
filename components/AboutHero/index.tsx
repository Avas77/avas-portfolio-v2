import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="flex-1 relative hidden lg:block">
      <Image
        src="/assets/Dots.svg"
        alt="Dots"
        width={84}
        height={84}
        className="absolute top-16 left-[5.5rem]"
      />
      <div className="relative">
        <Image
          src={"/assets/about-img.png"}
          alt="About Image"
          width={339}
          height={507}
          className="ml-[90px]"
        />
        <div
          className={`bg-primary h-[1px] w-[271px] absolute left-[8.3rem]`}
        ></div>
      </div>
      <Image
        src="/assets/horizontal-dot.svg"
        alt="Dots"
        width={104}
        height={56}
        className="absolute bottom-[172px] right-3"
      />
    </div>
  );
};

export default AboutHero;
