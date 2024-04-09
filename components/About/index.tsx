import React from "react";
import AboutHero from "../AboutHero";
import Description from "../Description";
import BlockHeader from "../BlockHeader";

const About = () => {
  return (
    <section className="flex">
      <section className="basis-7/12">
        <BlockHeader title="about-me" classNames="w-[326px]" />
        <Description />
      </section>
      <AboutHero />
    </section>
  );
};

export default About;
