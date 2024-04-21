import AboutPageShapes from "@/components/AboutPageShapes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Explore the impressive portfolio of Mr. Avas Bajracharya, showcasing his expertise as a seasoned full stack developer. Dive into a collection of innovative projects, demonstrating proficiency in front-end and back-end development, along with a keen eye for design and functionality. Discover the fusion of creativity and technical prowess evident in each project, reflecting Mr. Bajracharya's dedication to delivering high-quality solutions in the digital realm.",
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
