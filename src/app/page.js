import Contact from "./contact/Contact";
import Education from "./education/Education";
import Experiences from "./experiences/Experiences";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Experiences />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
