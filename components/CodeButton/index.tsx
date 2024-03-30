import React from "react";
import SecondaryButton from "../SecondaryButton";
import Image from "next/image";

const CodeButton = () => {
  const imgElement = (
    <Image src="/assets/code.svg" alt="Code image" width={68} height={21} />
  );
  return <SecondaryButton element={imgElement} />;
};

export default CodeButton;
