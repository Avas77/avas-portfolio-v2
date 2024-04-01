import React from "react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import Link from "next/link";

interface ILiveButtonProps {
  url: string;
}

const LiveButton = ({ url }: ILiveButtonProps) => {
  const imgElement = (
    <Image src="/assets/live.svg" alt="Live image" width={77} height={21} />
  );
  return (
    <Link href={url} target="_blank">
      <PrimaryButton element={imgElement} />
    </Link>
  );
};

export default LiveButton;
