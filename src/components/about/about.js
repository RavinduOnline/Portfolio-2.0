import React from 'react'

const  CV = "/Document/CV of Ravindu Rasanga.pdf";

const socialMedia = [
  {
    name:"Linkedin",
    link:"https://www.linkedin.com/in/ravinduonline",
    logo:"./images/social-media-logos/linkedin.svg"
  },
  {
    name:"Facebook",
    link:"https://www.facebook.com/ravinduonline1",
    logo:"./images/social-media-logos/facebook.svg"
  },
  {
    name:"Instagram",
    link:"https://www.instagram.com/ravindu_online",
    logo:"./images/social-media-logos/instagram.svg"
  },
  {
    name:"Twitter",
    link:"https://twitter.com/ravindu_online",
    logo:"./images/social-media-logos/twitter.svg"
  },
  {
    name:"YouTube",
    link:"https://www.youtube.com/channel/UCrlP3tAKACwkQd7YC4x3LLg",
    logo:"./images/social-media-logos/youtube.svg"
  },
  {
    name:"GitHub",
    link:"https://github.com/RavinduOnline",
    logo:"./images/social-media-logos/github.svg"
  },
]

export default function About() {
  return (
    <div> 
        <h1 className=' text-center text-5xl text-red-500 font-bold  drop-shadow-xl shadow-black' data-aos="zoom-in">- About Me -</h1>
      
        <div className='w-full h-auto flex flex-col lg:flex-row my-0 lg:my-12'>
            <div className='w-full my-10 lg:my-0'>
                <h1 className='text-4xl text-black font-bold' data-aos="fade-right">Who am I ? 🤔</h1>

                <p className=' lg:max-w-xl text-justify text-lg mt-6' data-aos="fade-up">
                    I'm mostly interested in Web Designing & Development and Mobile 
                    Application Development. I like always curious about new things and enjoy learning.
                </p>

                <br/><br/>

                <a data-aos="fade-up"  target="_blank" href="https://drive.google.com/drive/folders/1FPCvW728mGT-ZChPn0gK6dP48xi0Nz6R?usp=sharing" className='px-7 py-4 bg-red-500 rounded-xl text-lg text-white font-bold' download={true} rel="noreferrer" >Download CV</a>
            </div>

            <div className='w-full'>
                <h1 className='text-4xl text-red-500 font-bold' data-aos="fade-right"> Connect with Me 🔗</h1>

                <div className='flex lg:px-8 mt-6 justify-evenly w-full' data-aos="fade-up">
                    {socialMedia.map((data, index) => (
                      <a
                        key={index} // Add a unique key for each item
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${data.name}`} 
                        className='transition-transform duration-300 hover:scale-110' 
                      >
                        <img
                          className='h-12 md:h-16 lg:h-14 xl:h-20 w-auto' 
                          src={data.logo}
                          alt={`${data.name} logo`} 
                          loading="lazy" 
                        />
                      </a>
                    ))}
                  </div>
            </div>
            
        </div>
    </div>
  )
}
