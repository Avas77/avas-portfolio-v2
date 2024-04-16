import React from "react";
import PageHeader from "../PageHeader";
import Description from "../Description";
import AboutHero from "../AboutHero";

const AboutDescription = () => {
  return (
    <section className="mb-28">
      <PageHeader title="about-me" description="Who am i?" />
      <div className="flex items-center mt-[55px] lg:mt-2">
        <Description showButton={false} classNames="lg:basis-7/12" />
        <AboutHero />
      </div>
    </section>
  );
};

export default AboutDescription;
