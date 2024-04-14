import React from "react";

interface IPageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: IPageHeaderProps) => {
  return (
    <section className="flex flex-col gap-[14px]">
      <h2 className="font-semibold text-3xl">
        <span className="text-primary">/</span>
        {title}
      </h2>
      <p>{description}</p>
    </section>
  );
};

export default PageHeader;
