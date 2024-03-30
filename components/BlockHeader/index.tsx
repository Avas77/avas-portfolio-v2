import React from "react";

interface IBlockHeaderProps {
  title: string;
  lineWidth: number;
}

const BlockHeader = ({ title, lineWidth }: IBlockHeaderProps) => {
  return (
    <div className="flex items-center">
      <h2 className="text-[32px] mr-4">
        <span className="text-primary">#</span>
        {title}
      </h2>
      <div className={`bg-primary w-[${lineWidth}px] h-[1px]`}></div>
    </div>
  );
};

export default BlockHeader;
