import AboutPageShapes from "@/components/AboutPageShapes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import React from "react";

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
