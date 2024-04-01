import HeroImage from "@/components/HeroImage";
import HeroText from "@/components/HeroText";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";

const Home = () => {
  return (
    <>
      <main className="flex flex-col sm:flex-row h-auto sm:h-[423px] justify-between items-center mt-[34px] sm:mt-[62px] gap-6 sm:gap-0">
        <HeroText element={"Contact me!!"} />
        <HeroImage />
      </main>
      <section className="flex justify-center relative">
        <Quote />
      </section>
      <article className="mt-[74px]">
        <Projects />
      </article>
    </>
  );
};

export default Home;
