import React from "react";
import SecondaryButton from "../SecondaryButton";
import Image from "next/image";
import Link from "next/link";

interface ICodeButtonProps {
  url: string;
}

const CodeButton = ({ url }: ICodeButtonProps) => {
  const imgElement = (
    <Image src="/assets/code.svg" alt="Code image" width={68} height={21} />
  );
  return (
    <Link href={url} target="_blank">
      <SecondaryButton element={imgElement} />
    </Link>
  );
};

export default CodeButton;
