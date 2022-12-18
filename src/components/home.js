import React from 'react'
import Header from './headers/header'
import HomeBody from './body/home-body'
import About from './about/about'

export default function Home() {
  return (
    <div>
        <Header/>

      <div className='mt-3 w-full'>
        <dib className="min-h-screen">
          <HomeBody/>
        </dib>

        <About/>
      </div>
    </div>
  )
}
