import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./(components)/Footer";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovatech Academy",
  description: "Master the Skills that Power the Modern World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-white bg-gradient-to-b from-[#101212] to-[#08201D]">
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
