import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import SideShapesGroup from "@/components/SideShapesGroup";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Full Stack Developer Portfolio",
    default: "Avas Bajracharya - Full Stack Developer Portfolio",
  },
  description:
    "Explore the impressive portfolio of Mr. Avas Bajracharya, showcasing his expertise as a seasoned full stack developer. Dive into a collection of innovative projects, demonstrating proficiency in front-end and back-end development, along with a keen eye for design and functionality. Discover the fusion of creativity and technical prowess evident in each project, reflecting Mr. Bajracharya's dedication to delivering high-quality solutions in the digital realm.",
  metadataBase: new URL("https://avas-portfolio-v2.vercel.app/"),
  openGraph: {
    url: "https://avas-portfolio-v2.vercel.app/",
    type: "website",
  },
};

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SideLinks />
      <SideShapesGroup />
      <div className="container">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
