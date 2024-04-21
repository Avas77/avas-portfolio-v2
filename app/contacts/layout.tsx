import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideShapes from "@/components/SIdeShapes";
import SideLinks from "@/components/SideLinks";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Connect with Avas Bajracharya, a skilled frontend developer, through the contacts page of his portfolio. Reach out for inquiries, collaborations, or project discussions. Whether you're seeking frontend development services or simply want to explore potential opportunities, this page provides a direct line of communication. Start a conversation today and take the next step towards bringing your digital vision to life.",
};

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
