import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Contactslayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <section className="container">
        <Header />
        {children}
      </section>
      <Footer classNames={"fixed bottom-0 w-full"} />
    </>
  );
};

export default Contactslayout;
