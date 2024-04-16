import Image from "next/image";
import React from "react";

const AboutShapes = () => {
  return (
    <div className="relative flex-1 h-[169px] mr-[85px] hidden lg:block">
      <Image src="/assets/Dots.svg" alt="dots" width={64} height={64} />
      <Image
        src="/assets/purple-line.svg"
        alt="purple"
        width={113}
        height={113}
        className="absolute right-2 bottom-0"
      />
    </div>
  );
};

export default AboutShapes;
