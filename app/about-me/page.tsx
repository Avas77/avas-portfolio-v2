import AboutDescription from "@/components/AboutDescription";
import AboutSkills from "@/components/AboutSkills";
import FunFacts from "@/components/FunFacts";
import React from "react";

const AboutMe = () => {
  return (
    <section className="mt-[53px] px-4 xl:px-0">
      <AboutDescription />
      <AboutSkills />
      <FunFacts />
    </section>
  );
};

export default AboutMe;
