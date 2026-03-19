import React from "react";
import PrimaryButton from "../PrimaryButton";
import LinkButton from "../ImageButton";

const HeroText = () => {
  return (
    <section className="basis-full px-4 sm:px-6 xl:px-0">
      <h1 className="font-semibold text-[32px]">
        Building scalable software & driving business value with data — Meet Avas&nbsp;
        <strong className="text-primary font-semibold">
          your Software Engineer with a focus on Data & Analytics.
        </strong>
      </h1>
      <p className="mt-[25px] sm:mt-8 text-gray">
        I help organizations solve real-world problems by developing scalable applications, building robust data 
        pipelines, uncovering insights, and creating AI/ML solutions that drive smarter decision-making.
      </p>
      <LinkButton url={"/contacts"}>
        <PrimaryButton
          element={"Contact me !!"}
          classNames="mt-6 hidden sm:block"
        />
      </LinkButton>
    </section>
  );
};

export default HeroText;
