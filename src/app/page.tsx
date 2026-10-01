import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Domain from "@/components/Domain";
import Expertise from "@/components/Experience";
import Certificates from "@/components/Certificates";
import LinkedIn from "@/components/LinkedIn";
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
      <Certificates />
      <LinkedIn />
      <Contact />
      <Footer />
    </>
  );
}