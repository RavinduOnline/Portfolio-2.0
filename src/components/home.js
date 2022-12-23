import {React, useCallback} from 'react'
import Particles from "react-tsparticles";
import particlesConfig from './config/particlesConfig';
import { loadFull } from "tsparticles";
import Header from './headers/header'
import HomeBody from './body/home-body'
import About from './about/about'
import Skills from './skills/skills'

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
            <div className='px-52 py-12 bg-white'>
              <About/>
            </div>

            <div className='px-52 py-12'>
              <Skills/>
            </div>
             
           
          </div>
      </div>
    </div>
  )
}
