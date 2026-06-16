import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import AIProject from "@/components/AIProject";
import AcademyAward from "@/components/AcademyAward";
import Honors from "@/components/Honors";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Experience />
        <AIProject />
        <AcademyAward />
        <Honors />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
