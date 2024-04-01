import React from "react";

interface ISideShapes {
  children: React.ReactNode;
  classNames: string;
}

const SideShapes = ({ children, classNames }: ISideShapes) => {
  return <div className={`absolute ${classNames}`}>{children}</div>;
};

export default SideShapes;
