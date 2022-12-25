import {React,  useState} from 'react'
import { NavLink, Link } from 'react-router-dom';

const navItems = [
    {
      text:"Home",
      link:"#home"
    },
    {
      text:"About",
      link:"#about"
    },
    {
      text:"Skills",
      link:"#skills"
    },
    {
      text:"Education",
      link:"#education"
    },
    {
      text:"Projects",
      link:"#project"
    },
    {
      text:"Experience",
      link:"#experience"
    },
    {
      text:"Contact",
      link:"#contact"
    }
]

export default function Header() {

  const [navbar, setNavbar] = useState(false);
  const [navbarCSS, setNavbarCSS] = useState("");
  const [navbarItemCSS, setNavbarItemCSS] = useState("text-black");



  const changeBackground = () => {
    if(window.scrollY >= 7 ){
        setNavbar(true);
        setNavbarCSS("bg-black");
        setNavbarItemCSS("text-white");
    }
    else{
      setNavbar(false);
      setNavbarCSS("");
      setNavbarItemCSS("text-black")
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={`w-full fixed top-0 ${navbarCSS}`} style={{ zIndex: 999}}>
        <nav className='mx-auto px-52  flex pb-4 justify-between '>
            <div className='flex w-full'>
                <div className=' mr-16 bg-black max-w-fit  pt-6 pb-4 px-6 rounded-br-2xl rounded-bl-2xl'>
                    <img className='h-12' src="./images/ravindu-logo.png" alt="" />
                </div>

                <div className='flex'>
                    {navItems.map(item=>{

                      return(
                        <a href={item.link}  className={` ${navbarItemCSS}  font-bold pt-6 pb-4 px-6 rounded-br-2xl rounded-bl-2xl flex items-end hover:bg-red-500 hover:text-white`} onMouseOver="this.style.color='#0F0'"
                        >
                            {item.text}
                        </a>
                      )
                    })}
                </div>
            </div>

            <div>
              {/* nnn */}
            </div>
        </nav>
    </div>
  )
}
