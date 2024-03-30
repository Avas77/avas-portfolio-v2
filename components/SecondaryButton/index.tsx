import React from "react";

interface ISecondaryButtonProps {
  element: string | React.ReactNode;
}

const SecondaryButton = ({ element }: ISecondaryButtonProps) => {
  return (
    <button className="border border-gray text-gray py-2 px-4">
      {element}
    </button>
  );
};

export default SecondaryButton;
