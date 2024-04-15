import { funFacts } from "@/constants/FunFacts";
import React from "react";
import BlockHeader from "../BlockHeader";
import AboutShapes from "../AboutShapes";

const FunFacts = () => {
  return (
    <section className="mb-[162px]">
      <BlockHeader classNames="hidden" title="my-fun-facts" />
      <div className="flex gap-[75px]">
        <div className="flex text-gray mt-[26px] gap-4 flex-wrap lg:basis-8/12">
          {funFacts.map((facts) => (
            <div key={facts.id} className="border border-gray p-2">
              {facts.fact}
            </div>
          ))}
        </div>
        <AboutShapes />
      </div>
    </section>
  );
};

export default FunFacts;
