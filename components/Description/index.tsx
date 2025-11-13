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
          I started my career as a software engineer, building responsive
          applications and modern web experiences. Fascinated by the power of
          data I help businesses unlock the power of their data. From building
          efficient data pipelines to developing predictive models, I focus on
          transforming data into actionable insights that drive measurable
          impact. Based in Johnson City, Tennessee, I&apos;m passionate about
          continuous learning and leveraging modern data technologies to solve
          complex challenges.
        </span>
        <span>
          I thrive at the intersection of data and innovation — designing
          solutions that not only reveal what&apos;s happening, but also predict
          what&apos;s next. By continuously learning emerging technologies and
          refining my technical skills, I aim to help organizations make
          smarter, faster, and evidence-based decisions.
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
