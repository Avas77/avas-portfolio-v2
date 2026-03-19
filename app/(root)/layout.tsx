import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";
import SideShapesGroup from "@/components/SideShapesGroup";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Avas Bajracharya",
  description:
    "Software Engineer specializing in data analytics, AI/ML, scalable applications, data pipelines, Python, SQL, and business-focused solutions",
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
