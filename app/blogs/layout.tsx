import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Welcome to the Technical Blogs of Avas Bajracharya, a software engineer specializing in front-end development. Explore insightful articles, tutorials, and the latest industry trends designed to help developers enhance their skills and stay ahead in the ever-evolving tech landscape. Join the community and dive into topics ranging from coding best practices to advanced software architectures.",
};

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="container">
        <Header />
        <section className={space_grotesk.className}>{children}</section>
      </section>
      <Footer />
    </>
  );
}
