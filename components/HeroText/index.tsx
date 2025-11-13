import React from "react";
import PrimaryButton from "../PrimaryButton";
import LinkButton from "../ImageButton";

const HeroText = () => {
  return (
    <section className="basis-full px-4 sm:px-6 xl:px-0">
      <h1 className="font-semibold text-[32px]">
        Turning data into actionable insights — Meet Avas&nbsp;
        <strong className="text-primary font-semibold">
          your Data Analytics & Engineering enthusiast.
        </strong>
      </h1>
      <p className="mt-[25px] sm:mt-8 text-gray">
        I help organizations make data-driven decisions by building scalable
        pipelines, uncovering insights, and developing AI models that turn data
        into measurable business value.
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
