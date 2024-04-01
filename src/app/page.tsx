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
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
    direction: "down", // Trigger only when scrolling down
  });

  const [experienceRef, experienceInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
    direction: "down", // Trigger only when scrolling down
  });

  const [projectsRef, projectsInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
    direction: "down", // Trigger only when scrolling down
  });

  const [contactRef, contactInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
    direction: "down", // Trigger only when scrolling down
  });

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section
          id="About"
          ref={aboutRef}
          className={`${
            aboutInView ? "animate-fade-up opacity-100" : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <About />
        </section>
        <section
          id="Experience"
          ref={experienceRef}
          className={`${
            experienceInView ? "animate-fade-up opacity-100" : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <Experience />
        </section>
        <section
          id="Projects"
          ref={projectsRef}
          className={`${
            projectsInView ? "animate-fade-up opacity-100" : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <Projects />
        </section>
        <section
          id="Contact"
          ref={contactRef}
          className={`${
            contactInView ? "animate-fade-up opacity-100" : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
