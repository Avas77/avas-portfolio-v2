import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import WorksPageShapes from "@/components/WorksPageShapes";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore a curated selection of projects showcasing Avas Bajracharya's expertise in frontend development. Discover innovative web applications and dynamic websites crafted with precision and creativity. Dive into the world of HTML, CSS, JavaScript, and frontend frameworks, and witness the fusion of design and functionality in each project. Whether you seek inspiration or collaboration, this collection exemplifies a dedication to delivering exceptional digital experiences.",
};

const WorksLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <SideLinks />
      <WorksPageShapes />
      <section className="container">
        <Header />
        {children}
      </section>
      <Footer />
    </>
  );
};

export default WorksLayout;
