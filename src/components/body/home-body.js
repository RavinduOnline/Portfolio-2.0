import React from 'react'
import AnimatedText from 'react-animated-text-content';



export default function HomeBody() {

  return (
    <div style={{ 
        backgroundImage: 'url(/images/home-bg-design.png)' , 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',}}>
           
        <div className='w-full md:min-h-screen lg:h-screen  flex flex-col lg:flex-row px-10 lg:px-52 pt-28 lg:pt-0'>
            <div className='w-full lg:h-full m-auto flex justify-center items-center'>
                <div className='lg:w-full h-auto'>
                


                    <h1 className=' text-3xl md:text-7xl text-red-500 font-semibold'>
                        <AnimatedText
                            type="words" // animate words or chars
                            animationType="float"
                            interval={0.06}
                            duration={1}
                            tag="p"
                            className="animated-paragraph"
                            includeWhiteSpaces
                            threshold={0.1}
                            rootMargin="20%"
                            >
                            Hello 👋
                            </AnimatedText>
                            </h1>
                    <h1 className=' text-5xl md:text-8xl font-bold flex'>
                        <AnimatedText
                                type="words" // animate words or chars
                                animationType="throw"
                                duration={1}
                                >
                           {"I'm " }
                        </AnimatedText>
                        <span className='text-red-500'>
                            <AnimatedText
                                type="words" // animate words or chars
                                animationType="wave"
                                duration={1.9}
                                >
                                Ravindu
                            </AnimatedText>
                        </span>
                        </h1>
                    <h1 className=' text-2xl md:text-5xl flex'>
                            <AnimatedText
                                    type="words" // animate words or chars
                                    animationType="float"
                                    duration={2}
                                    >
                            {"I'm a " }
                            </AnimatedText>
                        <span className=' text-stone-500'>
                            <AnimatedText
                                        type="words" // animate words or chars
                                        animationType="float"
                                        duration={2}
                                        >
                                Software Developer
                            </AnimatedText>
                        </span>
                    </h1>
                    <a href='#contact' className='mt-10 mb-10 text-sm md:text-lg lg:mb-0 px-5 py-3 md:px-12 md:py-4 bg-red-500 rounded-2xl text-white font-bold inline-block shadow-lg hover:bg-red-600' ><i class="ri-phone-fill align-middle"></i> &nbsp; Contact Me</a>
                    
                </div>
            </div>
            <div className='lg:w-full lg:h-full lg:flex float-left'>
                <div className='flex justify-center lg:justify-end items-end w-full'>
                    <img  className=' h-auto w-auto md:h-5/6' src="./images/profile-card.png" alt="" />
                </div>
            </div>        
        

        </div>

    </div>
  )
}
