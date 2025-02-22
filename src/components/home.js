import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particlesConfig';

import Header from './headers/header';
import HomeBody from './body/home-body';
import About from './about/about';
import Skills from './skills/skills';
import Education from './education/education';
import Experience from './experience/experience';
import Project from './project/project';
import Contact from './contact/contact';
import Footer from './footer/footer';
import ScrollToTop from './scroll-to-top/scroll-to-top';

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Optional: You can use this for debugging or additional setup
    // console.log('Particles container loaded:', container);
  }, []);

  return (
    <div className="scroll-mt-56">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />

        <div className="w-full">
          {/* Home Section */}
          <section id="home" className="min-h-screen scroll-mt-24" aria-labelledby="home-heading">
            <HomeBody />
          </section>

          {/* About Section */}
          <section id="about" className="px-6 lg:px-32 py-12 bg-gray-100 scroll-mt-24" aria-labelledby="about-heading">
            <About />
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="px-6 lg:px-32 py-12 scroll-mt-24 bg-gradient-to-r from-[#DD2476] to-[#FF512F]"
            aria-labelledby="skills-heading"
          >
            <Skills />
          </section>

          {/* Education Section */}
          <section id="education" className="px-6 lg:px-32 py-12 bg-gray-100 scroll-mt-24" aria-labelledby="education-heading">
            <Education />
          </section>

          {/* Project Section */}
          <section
            id="project"
            className="px-6 lg:px-32 py-12 scroll-mt-24 bg-gradient-to-r from-[#DD2476] to-[#FF512F]"
            aria-labelledby="project-heading"
          >
            <Project />
          </section>

          {/* Experience Section */}
          <section id="experience" className="px-6 lg:px-32 py-12 bg-gray-100 scroll-mt-24" aria-labelledby="experience-heading">
            <Experience />
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24" aria-labelledby="contact-heading">
            <Contact />
          </section>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Button */}
          <ScrollToTop />
        </div>
      </div>
    </div>
  );
}