import React from "react";

interface IPrimaryButtonProps {
  element: string | React.ReactNode;
  classNames?: string;
}

const PrimaryButton = ({ element, classNames }: IPrimaryButtonProps) => {
  return (
    <button className={`border border-primary py-2 px-4 ${classNames}`}>
      {element}
    </button>
  );
};

export default PrimaryButton;
