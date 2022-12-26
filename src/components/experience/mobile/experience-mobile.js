import React from 'react'

export default function ExperienceMobile({data}) {
  return (
    <div>
        <div data-aos="fade-up" className=" min-w-full bg-red-500 col-start-6 col-end-10 p-4 rounded-xl text-white my-4 mr-auto shadow-md">
                        <h3 className="font-extrabold text-xl mb-1">{data.position}</h3>
                        <p className=" font-semibold text-xl">{data.company}</p>
                        <p className=" font-normal text-xl">{data.type}</p>
                        <p className="leading-tight ">{data.range}</p>
        </div>
    </div>
  )
}
