import Link from "next/link";
import React from "react";

interface IImageButtonProps {
  url: string;
  classNames: string;
  children: React.ReactNode;
}

const ImageButton = ({ url, classNames, children }: IImageButtonProps) => {
  return (
    <Link href={url} className={classNames}>
      {children}
    </Link>
  );
};

export default ImageButton;
