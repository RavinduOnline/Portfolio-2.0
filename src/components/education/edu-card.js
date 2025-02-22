import React from 'react';

const status = {
  Pursuing: 'text-orange-600',
  Completed: 'text-green-600',
  Graduated: 'text-green-600',
};

export default function EduCard({ data }) {
  return (
    <div data-aos="fade-up">
      <div className='shadow-black shadow-sm rounded-lg bg-white mt-6'>
        <div className="md:flex">
          {/* Image */}
          <img
            style={{
              backgroundImage: 'url(/images/edu-bg.png)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="w-full md:w-64 p-4 rounded-lg"
            src={data.logo}
            alt=""
          />

          {/* Text */}
          <div className="flex flex-col justify-between px-4 py-6 lg:mx-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-red-600"> {data.qualification} </h1>
              <h2 className="text-xl font-semibold"> {data.name} </h2>
              <h2 className="text-xl font-semibold text-gray-500"> {data.range} </h2>
              <h2 className={`text-xl font-light ${status[data.status]}`}> {data.status} </h2>
            </div>
            <span className="text-sm dark:text-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
