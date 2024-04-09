import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="flex-1 relative">
      <Image
        src={"/assets/about-img.png"}
        alt="About Image"
        width={339}
        height={507}
        className="ml-[90px]"
      />
    </div>
  );
};

export default AboutHero;
