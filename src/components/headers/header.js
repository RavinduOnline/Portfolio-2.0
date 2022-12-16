import React from 'react'

const navItems = [
    {
      text:"Home",
      link:"/"
    },
    {
      text:"About",
      link:"/about"
    },
    {
      text:"Education & Experience",
      link:"/educationandexperience"
    },
    {
      text:"Projects",
      link:"/projects"
    },
    {
      text:"Contact",
      link:"/contact"
    }
]

export default function Header() {


  return (
    <div className='w-100 '>
        <nav className='mx-auto px-52  flex pb-4 justify-between border-b-4 border-gray-200'>
            <div className='flex w-full'>
                <div className=' mr-16 bg-black max-w-fit  pt-6 pb-4 px-6 rounded-br-2xl rounded-bl-2xl'>
                    <img className='h-20' src="https://pokedexnet.web.app/static/media/dev-logo.6c5009b22e2e76d077ab.png" alt="" />
                </div>

                <div className='flex'>
                    {navItems.map(item=>{

                      return(
                        <a href={item.link} className='font-bold pt-6 pb-4 px-6 rounded-br-2xl rounded-bl-2xl flex items-end hover:bg-red-500 hover:text-white ' onMouseOver="this.style.color='#0F0'"
                        >
                            {item.text}
                        </a>
                      )
                    })}
                </div>
            </div>

            <div>
              nnn
            </div>
        </nav>
    </div>
  )
}
