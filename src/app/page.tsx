// Home.jsx

'use client'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from 'react'

import AOS from "aos";
import styles from "aos/dist/aos.module.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section
          id="About"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <About />
        </section>
        <section
          id="Experience"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Experience />
        </section>
        <section
          id="Projects"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Projects />
        </section>
        <section
          id="Contact"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
