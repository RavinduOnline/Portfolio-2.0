import React from 'react'

export default function LeftCard({ data }) {
    
  return (
    <div className="flex flex-row-reverse md:contents">
        <div className=" min-w-full bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-extrabold text-xl mb-1">{data.position}</h3>
            <p className=" font-semibold text-xl">{data.company}</p>
            <p className=" font-normal text-xl">{data.type}</p>
            <p className="leading-tight ">{data.range}</p>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-red-600 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow" />
        </div>
    </div>
  )
}
