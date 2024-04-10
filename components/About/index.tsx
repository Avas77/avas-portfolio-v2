import React from "react";
import AboutHero from "../AboutHero";
import Description from "../Description";
import BlockHeader from "../BlockHeader";

const About = () => {
  return (
    <section className="flex">
      <section className="lg:basis-7/12">
        <BlockHeader title="about-me" classNames="w-[326px] hidden md:block" />
        <Description />
      </section>
      <AboutHero />
    </section>
  );
};

export default About;
