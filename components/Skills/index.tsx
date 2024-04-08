import React from "react";
import Shapes from "../Shapes";
import BlockHeader from "../BlockHeader";
import SkillsList from "../SkillsList";

const Skills = () => {
  return (
    <>
      <BlockHeader title="skills" classNames="w-[213px]" />
      <div className="flex gap-[59px] min-h-[300px]">
        <Shapes />
        <SkillsList />
      </div>
    </>
  );
};

export default Skills;
