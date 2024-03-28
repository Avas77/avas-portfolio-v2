import Image from "next/image";

const Home = () => {
  return (
    <main className="flex h-[423px] justify-between items-center mt-[62px]">
      <section className="basis-full">
        <h1 className="font-semibold text-[32px]">
          Crafting seamless digital experiences - Meet Avas, your&nbsp;
          <strong className="text-primary font-semibold">
            full stack web development expert
          </strong>
        </h1>
        <p className="mt-8 text-gray">
          I make websites that load quickly and work well on all devices. I
          focus on making them easy for people to use and enjoy
        </p>
        <button className="mt-6 border border-primary py-2 px-4">
          Contact me!!
        </button>
      </section>
      <section className="basis-9/12">
        <div className="relative">
          <Image
            src={"/assets/purple-line.svg"}
            alt="purple lines"
            width={155}
            height={155}
            className="absolute top-20"
          />
          <Image
            src={"/assets/home-img.png"}
            alt="Hoodie Man"
            width={457}
            height={386}
            className="relative z-10 ml-auto"
          />
          <Image
            src="/assets/Dots.svg"
            alt="Dots"
            width={84}
            height={84}
            className="absolute right-4 z-20 bottom-14"
          />
        </div>
        <div className="flex items-center gap-[10px] border border-gray px-2 py-2 w-11/12">
          <div className="bg-primary w-4 h-4" aria-hidden="true"></div>
          <span className="text-gray before:">Currently working on </span>
          <strong className="font-semibold">Portfolio</strong>
        </div>
      </section>
    </main>
  );
};

export default Home;
