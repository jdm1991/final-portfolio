"use client";

import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section
          id="About"
          ref={aboutRef}
          className={`${aboutInView ? "animate-fadeUp" : "opacity-0"}`}
        >
          <About />
        </section>
        <section
          id="Experience"
          ref={experienceRef}
          className={`${experienceInView ? "animate-fadeUp" : "opacity-0"}`}
        >
          <Experience />
        </section>
        <section
          id="Projects"
          ref={projectsRef}
          className={`${projectsInView ? "animate-fadeUp" : "opacity-0"}`}
        >
          <Projects />
        </section>
        <section
          id="Contact"
          ref={contactRef}
          className={`${contactInView ? "animate-fadeUp" : "opacity-0"}`}
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
