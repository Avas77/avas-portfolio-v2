import React from "react";
import PrimaryButton from "../PrimaryButton";

const Description = () => {
  const showMoreDescButton = (
    <div>
      <p>Read more</p>
    </div>
  );
  return (
    <div className="mt-[23px]">
      <p className="flex flex-col gap-7 text-gray pr-16">
        <span>Hello, i’m Avas!</span>
        <span>
          I’m a self-taught full-stack developer based in Kathmandu, Nepal. I
          can develop responsive websites and web applications from scratch and
          raise them into modern user-friendly web experiences.
        </span>
        <span>
          Turning creativity and skills into awesome websites is what I love
          doing most. It's been my passion since day one in this exciting field.
          With a track record of empowering clients to establish their online
          presence, I'm committed to staying ahead of the curve by continually
          embracing the latest technologies and frameworks.
        </span>
      </p>
      <PrimaryButton element={showMoreDescButton} classNames="mt-[27px]" />
    </div>
  );
};

export default Description;
