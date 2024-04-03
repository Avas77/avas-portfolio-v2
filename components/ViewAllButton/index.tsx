import React from "react";
import Image from "next/image";
import LinkButton from "../ImageButton";

const ViewAllButton = () => {
  return (
    <LinkButton url={"/projects"} classNames="self-center">
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
