import React from 'react'

export default function MobileHeader( {isOpen , setIsOpen, navItems }) {
    return (
      <div className='top-0 fixed' style={{ zIndex: 9999}}>
        
        <div className='w-screen right-0 bg-black flex items-center justify-between'>
                  <div className='max-w-fit  pt-6 pb-4 pl-6'>
                      <img className='h-12' src="./images/ravindu-logo.png" alt="" />
                  </div>
                  <div className='mr-5'>
                        <div className=' text-white text-4xl' onClick={() => setIsOpen(!isOpen)} >
                            {!isOpen ? <i className="ri-menu-fill align-middle"></i>
                            :   <i className="ri-close-line"></i>
                            }
                        </div>
                  </div>
        </div>

        {isOpen &&
            <nav className='right-0 bg-black ml-auto w-2/3' style={{ zIndex: 9999}}>
                <div className='w-full'>
                    <div className='flex flex-col'>
                        {navItems.map(item=>{
    
                            return(
                            <a href={item.link} onClick={() => setIsOpen(!isOpen)}  className='text-white  flex items-center text-center font-bold pt-6 pb-4 px-6  hover:bg-red-500 active:bg-red-500 focus:bg-red-500' onMouseOver="this.style.color='#0F0'"
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
        }
      </div>
    )
  }
  