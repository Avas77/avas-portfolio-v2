import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="container">
        <Header />
        {children}
      </section>
      <Footer />
    </>
  );
}
