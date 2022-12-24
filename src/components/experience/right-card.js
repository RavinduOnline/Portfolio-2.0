import React from 'react'

export default function RightCard({data}) {
  return (
          <div className="flex md:contents">
                    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-red-600 pointer-events-none" />
                        </div>
                        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow" />
                    </div>
                    <div className=" min-w-full bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                        <h3 className="font-extrabold text-xl mb-1">{data.position}</h3>
                        <p className=" font-semibold text-xl">{data.company}</p>
                        <p className=" font-normal text-xl">{data.type}</p>
                        <p className="leading-tight ">{data.range}</p>
                    </div>
            </div> 
    )
}
