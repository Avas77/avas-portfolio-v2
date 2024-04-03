import React from "react";
import ImageButton from "../ImageButton";
import Image from "next/image";

const ViewAllButton = () => {
  return (
    <ImageButton url={"/projects"} classNames="self-center">
      <Image
        src={"/assets/view-all.svg"}
        alt="view all btn"
        width={116}
        height={21}
      />
    </ImageButton>
  );
};

export default ViewAllButton;
