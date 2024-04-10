import React from "react";
import PrimaryButton from "../PrimaryButton";

const HeroText = () => {
  return (
    <section className="basis-full px-4 sm:px-6 xl:px-0">
      <h1 className="font-semibold text-[32px]">
        Crafting seamless digital experiences - Meet Avas, your&nbsp;
        <strong className="text-primary font-semibold">
          full stack web development expert
        </strong>
      </h1>
      <p className="mt-[25px] sm:mt-8 text-gray">
        I make websites that load quickly and work well on all devices. I focus
        on making them easy for people to use and enjoy
      </p>
      <PrimaryButton
        element={"Contact me !!"}
        classNames="mt-6 hidden sm:block"
      />
    </section>
  );
};

export default HeroText;
