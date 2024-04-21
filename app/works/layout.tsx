import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import WorksPageShapes from "@/components/WorksPageShapes";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Works",
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
