import React from "react";

interface ISKillBoxProps {
  groupName: string;
  skills: string;
  classNames: string;
}

const SkillBox = ({ groupName, skills, classNames }: ISKillBoxProps) => {
  return (
    <section className={classNames}>
      <h4 className="font-semibold border border-white p-2">{groupName}</h4>
      <p className="text-gray border border-white p-2">{skills}</p>
    </section>
  );
};

export default SkillBox;
