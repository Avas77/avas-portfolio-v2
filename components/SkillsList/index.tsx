import React from "react";
import SkillBox from "../SkillBox";
import { skillsList } from "@/constants/SkillsList";

interface ISkillsListProps {
  classNames: string;
  boxClassNames: string;
}

const SkillsList = ({ classNames, boxClassNames }: ISkillsListProps) => {
  return (
    <div className={classNames}>
      {skillsList.map((item, index) => (
        <SkillBox
          key={item.skillGroup}
          groupName={item.skillGroup}
          skills={item.skills}
          classNames={boxClassNames}
        />
      ))}
    </div>
  );
};

export default SkillsList;
