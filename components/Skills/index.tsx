import React from "react";
import Shapes from "../Shapes";
import BlockHeader from "../BlockHeader";
import SkillsList from "../SkillsList";

const Skills = () => {
  return (
    <>
      <BlockHeader title="skills" classNames="w-[213px] hidden md:block" />
      <div className="flex gap-[59px] min-h-[300px] mt-8 lg:mt-0">
        <Shapes />
        <SkillsList
          classNames="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:auto-rows-[84px]"
          boxClassNames="skillBox"
        />
      </div>
    </>
  );
};

export default Skills;
