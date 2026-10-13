import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Experience from "./sections/Experince";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}
