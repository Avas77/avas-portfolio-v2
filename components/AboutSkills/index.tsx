import React from "react";
import BlockHeader from "../BlockHeader";
import SkillsList from "../SkillsList";

const AboutSkills = () => {
  return (
    <section className="flex flex-col mb-[83px]">
      <BlockHeader classNames="hidden" title="skills" />
      <SkillsList
        classNames="flex flex-wrap gap-4 mt-12"
        boxClassNames="w-full md:w-[192px]"
      />
    </section>
  );
};

export default AboutSkills;
