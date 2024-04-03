import React from "react";

interface IBlockHeaderProps {
  title: string;
  classNames: string;
}

const BlockHeader = ({ title, classNames }: IBlockHeaderProps) => {
  return (
    <div className="flex items-center">
      <h2 className="text-[32px] mr-4">
        <span className="text-primary">#</span>
        {title}
      </h2>
      <div className={`bg-primary h-[1px] ${classNames}`}></div>
    </div>
  );
};

export default BlockHeader;
