import React from "react";
import Image from "next/image";
import LinkButton from "../ImageButton";

interface IViewAllButtonProps {
  classNames?: string;
}

const ViewAllButton = ({ classNames }: IViewAllButtonProps) => {
  return (
    <LinkButton url={"/works"} classNames={`self-center ${classNames}`}>
      <Image
        src={"/assets/view-all.svg"}
        alt="view all btn"
        width={116}
        height={21}
      />
    </LinkButton>
  );
};

export default ViewAllButton;
