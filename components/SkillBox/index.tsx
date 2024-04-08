import React from "react";

interface ISKillBoxProps {
  groupName: string;
  skills: string;
  classNames: string;
}

const SkillBox = ({ groupName, skills, classNames }: ISKillBoxProps) => {
  return (
    <section
      className={`${classNames} [&:nth-child(4)]:col-start-3 [&:nth-child(4)]:col-end-4 [&:nth-child(5)]:col-start-2 [&:nth-child(5)]:col-end-3 [&:nth-child(5)]:row-start-2 [&:nth-child(5)]:row-end-3 [&:nth-child(4)]:mt-[73px]`}
    >
      <h4 className="font-semibold border border-white p-2">{groupName}</h4>
      <p className="text-gray border border-white p-2">{skills}</p>
    </section>
  );
};

export default SkillBox;
