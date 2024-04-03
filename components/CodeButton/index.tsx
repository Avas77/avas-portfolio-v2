import React from "react";
import SecondaryButton from "../SecondaryButton";
import Image from "next/image";
import LinkButton from "../ImageButton";

interface ICodeButtonProps {
  url: string;
}

const CodeButton = ({ url }: ICodeButtonProps) => {
  const imgElement = (
    <Image src="/assets/code.svg" alt="Code image" width={68} height={21} />
  );
  return (
    <LinkButton url={url} openInNewtab>
      <SecondaryButton element={imgElement} />
    </LinkButton>
  );
};

export default CodeButton;
