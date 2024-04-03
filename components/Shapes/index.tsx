import Image from "next/image";
import React from "react";

const Shapes = () => {
  return (
    <div className="relative flex-1">
      <div className="left-[5%]">
        <Image src="/assets/Dots.svg" alt="Dots" width={63} height={63} />
      </div>
      <Image
        src="/assets/purple-line.svg"
        alt="Purple Lines"
        width={113}
        height={113}
      />
      <Image src="/assets/rectangle.svg" alt="Dots" width={86} height={86} />
      <Image src="/assets/rectangle.svg" alt="Dots" width={52} height={52} />
      <Image src="/assets/Dots.svg" alt="Dots" width={63} height={63} />
    </div>
  );
};

export default Shapes;
