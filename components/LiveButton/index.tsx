import React from "react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";

const LiveButton = () => {
  const imgElement = (
    <Image src="/assets/live.svg" alt="Live image" width={77} height={21} />
  );
  return <PrimaryButton element={imgElement} />;
};

export default LiveButton;
