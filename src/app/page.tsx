"use client";

import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [aboutPreviousInView, setAboutPreviousInView] = useState(false);
  const [experiencePreviousInView, setExperiencePreviousInView] =
    useState(false);
  const [projectsPreviousInView, setProjectsPreviousInView] = useState(false);
  const [contactPreviousInView, setContactPreviousInView] = useState(false);

  const [aboutRef, aboutInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
  });

  const [experienceRef, experienceInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
  });

  const [projectsRef, projectsInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
  });

  const [contactRef, contactInView] = useInView({
    rootMargin: "-200px 0px",
    triggerOnce: true,
    delay: 150,
    initialInView: false,
    threshold: 0.1,
    trackVisibility: true,
  });

  useEffect(() => {
    setAboutPreviousInView(aboutInView);
  }, [aboutInView]);

  useEffect(() => {
    setExperiencePreviousInView(experienceInView);
  }, [experienceInView]);

  useEffect(() => {
    setProjectsPreviousInView(projectsInView);
  }, [projectsInView]);

  useEffect(() => {
    setContactPreviousInView(contactInView);
  }, [contactInView]);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section
          id="About"
          ref={aboutRef}
          className={`${
            aboutInView && !aboutPreviousInView
              ? "animate-fade-up opacity-100"
              : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <About />
        </section>
        <section
          id="Experience"
          ref={experienceRef}
          className={`${
            experienceInView && !experiencePreviousInView
              ? "animate-fade-up opacity-100"
              : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <Experience />
        </section>
        <section
          id="Projects"
          ref={projectsRef}
          className={`${
            projectsInView && !projectsPreviousInView
              ? "animate-fade-up opacity-100"
              : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <Projects />
        </section>
        <section
          id="Contact"
          ref={contactRef}
          className={`${
            contactInView && !contactPreviousInView
              ? "animate-fade-up opacity-100"
              : "opacity-0"
          } transition-opacity duration-2000`}
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
