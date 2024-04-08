import React from "react";
import SkillBox from "../SkillBox";
import { skillsList } from "@/constants/SkillsList";

const SkillsList = () => {
  return (
    <div className="flex-1 grid grid-cols-3 gap-4 auto-rows-[84px]">
      {skillsList.map((item, index) => (
        <SkillBox
          key={item.skillGroup}
          groupName={item.skillGroup}
          skills={item.skills}
          classNames={`item-${index.toString()}`}
        />
      ))}
    </div>
  );
};

export default SkillsList;
