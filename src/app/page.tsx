import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Domain from "@/components/Domain";
import Expertise from "@/components/Experience";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Domain />
      <Expertise />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}