import Image from "next/image";
import Header from "./(components)/Header";
import Courses from "./(components)/Courses";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <main className="text-white bg-gradient-to-b from-[#101212] to-[#08201D]">
      <Header/>
      <Courses/>
      <Footer/>
    </main>
  );
}
