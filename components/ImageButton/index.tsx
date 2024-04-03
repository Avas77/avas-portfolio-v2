import Link from "next/link";
import React from "react";

interface ILinkButtonProps {
  url: string;
  classNames?: string;
  children: React.ReactNode;
  openInNewtab?: boolean;
}

const LinkButton = ({
  url,
  classNames,
  children,
  openInNewtab = false,
}: ILinkButtonProps) => {
  return (
    <Link
      href={url}
      className={classNames}
      target={openInNewtab ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
