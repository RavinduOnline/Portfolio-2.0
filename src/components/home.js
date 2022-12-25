import {React, useCallback} from 'react'
import Particles from "react-tsparticles";
import particlesConfig from './config/particlesConfig';
import { loadFull } from "tsparticles";

import Header from './headers/header';
import HomeBody from './body/home-body';
import About from './about/about';
import Skills from './skills/skills';
import Education from './education/education';
import Experience from './experience/experience';
import Project from './project/project';
import Contact from './contact/contact'
import Footer from './footer/footer';
import ScrollToTop from './scroll-to-top/scroll-to-top'

export default function Home() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  
  return (
    <div className='scroll-mt-56'>
        <div className='absolute'>
            <Particles  init={particlesInit} loaded={particlesLoaded}  options={particlesConfig}/>
        </div>
         
        <div className=' relative'>
          <Header/>
       

          <div className='mt-3 w-full'>
            <section id="home" className="min-h-screen">
              <HomeBody/>
            </section>
            <section id="about" className='px-52 py-12 bg-gray-100 scroll-m-24'>
              <About/>
            </section>

            <section id="skills" className='px-52 py-12 scroll-m-24' style={{ background:"linear-gradient(to right, #DD2476, #FF512F)" }}>
              <Skills/>
            </section>
             
            <section id="education" className='px-52 py-12 bg-gray-100 scroll-m-24'>
              <Education/>
            </section>

            <section id="project" className='px-52 py-12 scroll-m-24' style={{ background:"linear-gradient(to right, #DD2476, #FF512F)" }}>
              <Project/>
            </section>

            <section id="experience" className='px-52 py-12 bg-gray-100 scroll-m-24'>
              <Experience/>
            </section>
            <section id="contact">
              <Contact/>
            </section>
            <Footer/>
            <ScrollToTop/>
          </div>
      </div>
    </div>
  )
}
