import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Head from "./head";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Frontend Developer Portfolio",
    default: "Avas Bajracharya - Frontend Developer Portfolio",
  },
  metadataBase: new URL("https://avasbajracharya.com.np/"),
  openGraph: {
    url: "https://avasbajracharya.com.np/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <meta
        name="google-site-verification"
        content="nuGI4rjLYF7lGE8_K9xP3CoCEqbScYSeE02f3F_VzJ0"
      />
      <body
        className={`${firaCode.className} bg-background text-white relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
