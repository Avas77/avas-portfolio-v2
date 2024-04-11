import Image from "next/image";
import React from "react";

interface ISocialContactProps {
  path: string;
  label: string;
  width: number;
  height: number;
  classNames?: string;
}

const SocialContact = ({
  path,
  label,
  width,
  height,
  classNames,
}: ISocialContactProps) => {
  return (
    <div className="flex items-center gap-[5px]">
      <Image
        src={path}
        alt={label}
        width={width}
        height={height}
        className={classNames}
      />
      <p className="text-gray">{label}</p>
    </div>
  );
};

export default SocialContact;
