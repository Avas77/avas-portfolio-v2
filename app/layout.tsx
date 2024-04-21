import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Full Stack Developer Portfolio",
    default: "Avas Bajracharya - Full Stack Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} bg-background text-white relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
