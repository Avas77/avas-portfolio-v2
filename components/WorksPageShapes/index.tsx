import React from "react";
import SideShapes from "../SIdeShapes";
import Image from "next/image";
import ILLLargeRectangle from "@/illustrations/ill-large-rectangle";

const WorksPageShapes = () => {
  return (
    <>
      <SideShapes classNames="left-0 top-[350px]">
        <Image src="/assets/small-dots.png" alt="dots" width={80} height={30} />
      </SideShapes>
      <SideShapes classNames="right-[-40px] top-[256px]">
        <ILLLargeRectangle width={155} height={155} />
      </SideShapes>
      <SideShapes classNames="left-[-40px] top-[1560px] rotate-180">
        <ILLLargeRectangle width={155} height={155} />
      </SideShapes>
      <SideShapes classNames="right-[-20px] top-[1720px]">
        <Image src="/assets/Dots.svg" width={103} height={103} alt="dots" />
      </SideShapes>
      <SideShapes classNames="left-[-50px] top-[2230px]">
        <Image src="/assets/Dots.svg" width={103} height={103} alt="dots" />
      </SideShapes>
    </>
  );
};

export default WorksPageShapes;
