import HeroImage from "@/components/HeroImage";
import HeroText from "@/components/HeroText";
import Quote from "@/components/Quote";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="flex flex-col sm:flex-row h-auto sm:h-[423px] justify-between items-center mt-[34px] sm:mt-[62px] gap-6 sm:gap-0">
        <HeroText />
        <HeroImage />
      </main>
      <section className="flex justify-center">
        <Quote />
      </section>
    </>
  );
};

export default Home;
