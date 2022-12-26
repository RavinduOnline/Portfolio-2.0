import React from 'react'


export default function HomeBody() {

  return (
    <div style={{ 
        backgroundImage: 'url(/images/home-bg-design.png)' , 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',}}>
           
        <div className='w-full min-h-screen lg:h-screen  flex flex-col lg:flex-row px-10 lg:px-52 pt-28 lg:pt-0'>
            <div className='w-full lg:h-full m-auto flex justify-center items-center'>
                <div className='lg:w-full h-auto'>
                    <h1 className='text-7xl text-red-500 font-semibold'>Hello 👋</h1>
                    <h1 className='text-8xl font-bold'>I'm <span className='text-red-500'>Ravindu</span></h1>
                    <h1 className='text-5xl'>I'm a <span className=' text-stone-500'>Software Developer</span></h1>
                    <a href='#contact' className='mt-10 mb-10 lg:mb-0 px-12 py-4 bg-red-500 rounded-2xl text-white font-bold inline-block shadow-lg hover:bg-red-600' ><i class="ri-phone-fill align-middle"></i> &nbsp; Contact Me</a>
                </div>
            </div>
            <div className='lg:w-full lg:h-full lg:flex float-left'>
                <div className='flex justify-center lg:justify-end items-end w-full'>
                    <img  className='h-5/6' src="./images/profile-card.png" alt="" />
                </div>
            </div>        
        

        </div>

    </div>
  )
}
