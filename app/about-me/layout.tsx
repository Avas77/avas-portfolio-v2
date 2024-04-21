import AboutPageShapes from "@/components/AboutPageShapes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SideLinks />
      <AboutPageShapes />
      <section className="container">
        <Header />
        {children}
      </section>
      <Footer />
    </>
  );
};

export default AboutLayout;
