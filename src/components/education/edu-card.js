import React from 'react'

const status = {
    Pursuing: 'text-orange-600',
    Completed: 'text-green-600',
 };

export default function EduCard({ data }) {
  return (
    <div>
        <div className=' shadow-black shadow-sm rounded-lg bg-white mt-6'>
                <div class="lg:flex">
                    <img style={{ 
                        backgroundImage: 'url(/images/edu-bg.png)' , 
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }} 
                    class="p-4 rounded-lg lg:w-64" src={data.logo} alt=""/>

                    <div class="flex flex-col justify-between py-6 lg:mx-6">
                        <div className=' flex flex-col'>
                            <h1  class="text-2xl font-bold text-red-600"> {data.qualification} </h1>
                            <h2  class="text-xl font-semibold "> {data.name} </h2>
                            <h2  class="text-xl font-semibold text-gray-500 "> {data.range} </h2>
                            <h2  class={`text-xl font-light ${status[data.status]}`}> {data.status} </h2>
                        </div>

                        <span class="text-sm  dark:text-gray-300"></span>
                    </div>
                </div>
            </div>
    </div>
  )
}
