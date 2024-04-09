import React from "react";
import SideShapes from "../SIdeShapes";
import ILLSmallRectangle from "@/illustrations/ill-small-recatngle";
import ILLLargeRectangle from "@/illustrations/ill-large-rectangle";
import Image from "next/image";

const SideShapesGroup = () => {
  return (
    <>
      <SideShapes classNames="right-0 top-[672px]">
        <ILLSmallRectangle width={91} height={91} />
      </SideShapes>
      <SideShapes classNames="right-[-40px] top-[1160px]">
        <ILLLargeRectangle width={155} height={155} />
      </SideShapes>
      <SideShapes classNames="left-[-40px] rotate-180 top-[2255px]">
        <ILLLargeRectangle width={155} height={155} />
      </SideShapes>
      <SideShapes classNames="top-[2435px] right-[-20px] rotate-90">
        <Image
          src="/assets/horizontal-dot.svg"
          alt="dots"
          width={103}
          height={103}
        />
      </SideShapes>
    </>
  );
};

export default SideShapesGroup;
