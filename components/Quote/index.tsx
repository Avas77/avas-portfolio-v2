import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <section className="inline-flex flex-col mt-28 px-[22px] lg:px-0">
      <div className="border border-gray p-8 w-full lg:w-[712px] relative">
        <Image
          src="/assets/quote.png"
          alt="quote"
          width={41}
          height={28}
          className="absolute left-[11px] top-[-15px]"
        />
        <span className="text-sm sm:text-xl lg:text-2xl">
          With great power comes great electricity bill
        </span>
        <Image
          src="/assets/quote.png"
          alt="quote"
          width={41}
          height={28}
          className="absolute right-[15px] bottom-[-15px]"
        />
      </div>
      <div className="border border-gray p-4 text-sm sm:text-xl lg:text-2xl w-[110px] sm:w-36 lg:w-[165px] ml-auto">
        - Dr. Who
      </div>
    </section>
  );
};

export default Quote;
