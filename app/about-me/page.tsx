import AboutDescription from "@/components/AboutDescription";
import AboutSkills from "@/components/AboutSkills";
import FunFacts from "@/components/FunFacts";
import React from "react";

const AboutMe = () => {
  return (
    <section className="mt-[53px]">
      <AboutDescription />
      <AboutSkills />
      <FunFacts />
    </section>
  );
};

export default AboutMe;
