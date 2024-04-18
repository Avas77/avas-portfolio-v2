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
      <p className="flex flex-col gap-7 text-gray lg:pr-16 text-justify md:text-left">
        <span>Hello, i&apos;m Avas!</span>
        <span>
          I&apos;m a self-taught full-stack developer based in Kathmandu, Nepal.
          I can develop responsive websites and web applications from scratch
          and raise them into modern user-friendly web experiences.
        </span>
        <span>
          Turning creativity and skills into awesome websites is what I love
          doing most. It&apos;s been my passion since day one in this exciting
          field. With a track record of empowering clients to establish their
          online presence, I&apos;m committed to staying ahead of the curve by
          continually embracing the latest technologies and frameworks.
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
