import React from "react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";
import LinkButton from "../ImageButton";

interface IDescriptionProps {
  classNames?: string;
  showButton: boolean;
}

const Description = ({ classNames, showButton }: IDescriptionProps) => {
  const showMoreDescButton = (
    <Image
      src={"/assets/read-more.svg"}
      alt="Read more"
      width={116}
      height={21}
    />
  );
  return (
    <div className={classNames}>
      <p className="flex flex-col gap-4 text-gray lg:pr-16 text-justify md:text-left">
        <span>Hello, i&apos;m Avas!</span>
        <span>
         I started my career as a software engineer, building scalable applications and modern web experiences. 
         Over time, I became increasingly interested in how data drives better decisions, which led me to expand 
         into data engineering, analytics, and AI/ML.
        </span>
        <span>
          Today, I build end-to-end solutions—developing applications, designing data pipelines, and creating 
          models that turn data into actionable insights and real business value. Based in Johnson City, Tennessee,
          I&apos;m passionate about continuous learning and using technology to solve complex, real-world problems.
        </span>
        <span>
          I enjoy working at the intersection of software, data, and business; designing systems that not only 
          explain what&apos;s happening, but also help predict what&apos;s next and enable smarter decision-making.
        </span>
      </p>
      {showButton ? (
        <LinkButton url={"/about-me"}>
          <PrimaryButton element={showMoreDescButton} classNames="mt-[27px]" />
        </LinkButton>
      ) : null}
    </div>
  );
};

export default Description;
