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

export default function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  
  return (
    <div>

        <div className='absolute'>
            <Particles  init={particlesInit}  options={particlesConfig}/>
        </div>

        <div className=' relative'>
          <Header/>
       

          <div className='mt-3 w-full'>
            <dib className="min-h-screen">
              <HomeBody/>
            </dib>
            <div className='px-52 py-12 bg-gray-100'>
              <About/>
            </div>

            <div className='px-52 py-12' style={{ background:"linear-gradient(to right, #DD2476, #FF512F)" }}>
              <Skills/>
            </div>
             
            <div className='px-52 py-12 bg-gray-100'>
              <Education/>
            </div>

            <div className='px-52 py-12' style={{ background:"linear-gradient(to right, #DD2476, #FF512F)" }}>
              <Project/>
            </div>

            <div className='px-52 py-12 bg-gray-100'>
              <Experience/>
            </div>
            <div>
              <Contact/>
            </div>

            <Footer/>

          </div>
      </div>
    </div>
  )
}
