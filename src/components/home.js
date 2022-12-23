import React from 'react'
import Header from './headers/header'
import HomeBody from './body/home-body'
import About from './about/about'
import Skills from './skills/skills'

export default function Home() {
  return (
    <div>
        <Header/>

      <div className='mt-3 w-full'>
        <dib className="min-h-screen">
          <HomeBody/>
        </dib>
        <div className='px-52'>
          <About/>

          <Skills/>
        </div>
      </div>
    </div>
  )
}
