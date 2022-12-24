import React from 'react'
import EduData from '../../data/education'
import EduCard from  '../education/edu-card'

export default function Education() {
  return (
    <div>            
        
        <h1 className=' text-center text-5xl text-red-500 font-bold'> - Education - </h1>
        
        <div className=' flex flex-col items-center py-12'>
            <div  className=' max-w-7xl'>
                { EduData.map(data => (
                    <EduCard data={data} />
                ))}
            </div>
        </div>
</div>
  )
}
