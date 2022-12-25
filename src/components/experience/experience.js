import React from 'react';
import LeftCard from './left-card';
import RightCard from './right-card';
import WorkData from '../../data/work-data';


export default function Experience() {
  return (
    <div>
         <h1 className=' text-center text-5xl text-red-500 font-bold'> - Experience - </h1>

         <div>
            <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
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
         </div>

    </div>
  )
}
