import React from "react";
import SideShapes from "../SIdeShapes";
import Image from "next/image";
import ILLLargeRectangle from "@/illustrations/ill-large-rectangle";

const AboutPageShapes = () => {
  return (
    <>
      <SideShapes classNames="left-0 top-[350px]">
        <Image src="/assets/small-dots.png" alt="dots" width={80} height={30} />
      </SideShapes>
      <SideShapes classNames="right-[-40px] top-[256px]">
        <ILLLargeRectangle width={155} height={155} />
      </SideShapes>
      <SideShapes classNames="right-[-45px] top-[767px]">
        <Image src="/assets/Dots.svg" alt="dots" width={103} height={103} />
      </SideShapes>
      <SideShapes classNames="left-[-35px] top-[1221px] rotate-180">
        <ILLLargeRectangle width={155} height={155} />
      </SideShapes>
      <SideShapes classNames="right-[-20px] top-[1390px]">
        <Image src="/assets/Dots.svg" width={103} height={103} alt="dots" />
      </SideShapes>
    </>
  );
};

export default AboutPageShapes;
