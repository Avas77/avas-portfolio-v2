import React from "react";
import Shapes from "../Shapes";
import BlockHeader from "../BlockHeader";
import SkillsList from "../SkillsList";

const Skills = () => {
  return (
    <>
      <BlockHeader title="skills" classNames="w-[213px]" />
      <div className="flex">
        <Shapes />
        <SkillsList />
      </div>
    </>
  );
};

export default Skills;
