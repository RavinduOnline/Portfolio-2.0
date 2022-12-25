import {React, useState} from 'react'

export default function ProjectCard( { data }) {

  const [ isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleBtn = () => {
    setIsReadMoreShown(prevState => !prevState)
  }


  return (
    <div>
        <div className="p-10">  
            {/*Card 1*/}
            <div className="max-w-sm h-full rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={data.image} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{data.title}</div>
                <p className="text-gray-700 text-base mb-2">{data.date}</p>
                <p className="text-gray-700 text-base">
                     { isReadMoreShown ?  data.about : data.about.substr(0, 100) }
                     <button onClick={toggleBtn} className=" text-red-500"> {isReadMoreShown ?  "..Read Less" :"...Read More"}</button>
                </p>
            </div>

            <div className="px-4 py-2 w-full flex">
              {
                data.github ? 
                  <a href={data.github} target="_blank" rel="noopener noreferrer" className=' text-center w-full bg-gray-800 text-white p-1 rounded-md text-base font-semibold mr-2'>Github</a>
                : <></>
              }

              {
                data.demo ? 
                  <a href={data.demo}  target="_blank" rel="noopener noreferrer" className=' text-center w-full bg-gray-800 text-white p-1 rounded-md text-base font-semibold'>Demo</a>
                : <></>
              }
                
            </div>

            <div className="px-6 pt-4 pb-2">
                {data.tags.map(data => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data}</span>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}
