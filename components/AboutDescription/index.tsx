import React from "react";
import PageHeader from "../PageHeader";
import Description from "../Description";
import AboutHero from "../AboutHero";

const AboutDescription = () => {
  return (
    <section className="mb-28">
      <PageHeader title="about-me" description="Who am i?" />
      <div className="flex items-center mt-2">
        <div className="lg:basis-7/12">
          <Description showButton={false} />
        </div>
        <AboutHero />
      </div>
    </section>
  );
};

export default AboutDescription;
