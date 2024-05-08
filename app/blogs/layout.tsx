import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

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
