import Image from "next/image";
import Header from "./(components)/Header";
import Courses from "./(components)/Courses";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Courses/>
    </main>
  );
}
