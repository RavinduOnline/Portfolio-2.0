import React from 'react'


export default function HomeBody() {

  return (
    <div style={{ 
        backgroundImage: 'url(/images/home-bg-design.png)' , 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',}}>
            
        <div className='w-full flex h-screen  px-52'>
            <div className='w-full h-auto flex items-center'>
                <div className='w-full h-auto'>
                    <h1 className=' text-7xl text-red-500 font-semibold'>Hello 👋</h1>
                    <h1 className=' text-8xl font-bold'>I'm <span className='text-red-500'>Ravindu</span></h1>
                    <h1 className=' text-5xl'>I'm a <span className=' text-stone-500'>Web Developer</span></h1>
                    <br/><br/><br/>
                    <a href='' className='px-12 py-4 bg-red-500 rounded-2xl text-white font-bold' > Contact Me </a>
                </div>
            </div>
            <div className='w-full h-full flex float-left'>
                <div className='flex justify-end items-end w-full'>
                    <img  className='h-5/6' src="./images/profile-card.png" alt="" />
                </div>
            </div>        
        

        </div>

    </div>
  )
}
