import React from "react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import LinkButton from "../ImageButton";

interface ILiveButtonProps {
  url: string;
}

const LiveButton = ({ url }: ILiveButtonProps) => {
  const imgElement = (
    <Image src="/assets/live.svg" alt="Live image" width={77} height={21} />
  );
  return (
    <LinkButton url={url} openInNewtab>
      <PrimaryButton element={imgElement} />
    </LinkButton>
  );
};

export default LiveButton;
