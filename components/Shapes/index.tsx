import Image from "next/image";
import React from "react";

const Shapes = () => {
  return (
    <div className="relative basis-[349px] hidden lg:block">
      <Image
        src="/assets/Dots.svg"
        alt="Dots"
        width={63}
        height={63}
        className="absolute left-8 top-[50px]"
      />
      <Image
        src="/assets/purple-line.svg"
        alt="Purple Lines"
        width={113}
        height={113}
        className="absolute bottom-0 left-[47px]"
      />
      <Image
        src="/assets/rectangle.svg"
        alt="Rectangle"
        width={86}
        height={86}
        className="absolute top-3 right-[46px]"
      />
      <Image
        src="/assets/rectangle.svg"
        alt="Rectangle"
        width={52}
        height={52}
        className="absolute bottom-[37px] right-0"
      />
      <Image
        src="/assets/Dots.svg"
        alt="Dots"
        width={63}
        height={63}
        className="absolute bottom-[76px] right-[90px]"
      />
    </div>
  );
};

export default Shapes;
