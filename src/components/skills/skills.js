import React from 'react'
import SkillsData from '../../data/skills-data'




export default function Skills() {

  return (
    <div  style={{ zIndex: 800}}>
        
        <h1 className=' text-center text-5xl text-white font-bold' data-aos="zoom-in">- Skills & Abilities -</h1>

        <div className='w-full h-auto flex'>
            <div className='w-full h-auto my-12'>
              <div className="grid grid-cols-3 gap-1 md:grid-cols-4 md:gap-2 lg:grid-cols-7 lg:gap-4">
                  
                  {SkillsData.map(data => (
                        <div  data-aos="zoom-out">
                            <div  className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
                                <div className=' min-w-full flex flex-col justify-center items-center p-5'>
                                    <img src={data.icon} alt=""  className=' h-16 md:h-20 lg:h-28 mb-2'/>
                                    <div  className=' text-center text-sm md:text-lg lg:text-xl text-white font-semibold'> {data.name} </div>
                                </div>
                            </div>
                        </div>
                  ))}
                  
              </div>
            </div>
        </div>
        

    </div>
  )
}
