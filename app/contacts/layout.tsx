import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideShapes from "@/components/SIdeShapes";
import SideLinks from "@/components/SideLinks";
import Image from "next/image";
import React from "react";

const Contactslayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SideLinks />
      <SideShapes classNames="left-[-7px] top-[401px]">
        <Image
          src="/assets/small-dots.png"
          width={109}
          height={49}
          alt="dots"
        />
      </SideShapes>
      <SideShapes classNames="right-[-80px] top-64">
        <Image
          src={"/assets/small-rectangle.svg"}
          alt="rectangle"
          width={155}
          height={155}
        />
      </SideShapes>
      <section className="container">
        <Header />
        {children}
      </section>
      <Footer classNames={"md:fixed bottom-0 w-full"} />
    </>
  );
};

export default Contactslayout;
