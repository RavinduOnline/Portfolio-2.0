import React from 'react';
import LeftCard from './left-card';
import RightCard from './right-card';
import WorkData from '../../data/work-data';
import ExperienceMobile from './mobile/experience-mobile';


export default function Experience() {
  return (
    <div>
         <h1 className=' text-center text-5xl text-red-500 font-bold' data-aos="zoom-in"> - Experience - </h1>

         <div>
            <div className="hidden flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                {
                    WorkData.map((data, index) =>(
                        <>
                        {index%2 === 0 ?
                            <LeftCard data={data} />
                        : 
                            <RightCard data={data}/>
                        }
                        </>
                    ))
                }
               
            </div>
            <div className=' mt-12 md:mt-0 md:hidden'>
                {
                    WorkData.map((data) =>(
                        <ExperienceMobile data={data} />
                    ))
                }
            </div>

         </div>

    </div>
  )
}
