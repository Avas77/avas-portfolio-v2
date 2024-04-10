import About from "@/components/About";
import HeroImage from "@/components/HeroImage";
import HeroText from "@/components/HeroText";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <>
      <main className="flex flex-col sm:flex-row h-auto sm:h-[423px] justify-between items-center mt-[34px] sm:mt-[62px] gap-6 sm:gap-0">
        <HeroText />
        <HeroImage />
      </main>
      <section className="flex justify-center relative mb-[74px]">
        <Quote />
      </section>
      <article className="mb-[106px] px-4 xl:px-0">
        <Projects />
      </article>
      <section className="mb-28 px-4 xl:px-0 lg:min-h-[405px]">
        <Skills />
      </section>
      <section className="mb-28 h-full px-4 xl:px-0">
        <About />
      </section>
    </>
  );
};

export default Home;
