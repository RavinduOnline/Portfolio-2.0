

import React, { useEffect, useState } from 'react';

export default function Skills() {
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_PORTFOLIO_DATA_API_URL  + '?data=skills'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSkillsData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="py-12" style={{ zIndex: 800 }}>
      {/* Heading */}
      <h1 className=' text-center text-5xl text-white font-bold' data-aos="zoom-in">- Skills & Abilities -</h1>
      <br/> <br/>

      {/* Skills Grid */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {skillsData.map((data, index) => (
              <div
                key={index}
                data-aos="zoom-out"
                className="group transform transition-all duration-300 hover:scale-105 h-full"
              >
                <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg hover:bg-opacity-30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex flex-col justify-center items-center p-4 md:p-6 flex-grow">
                    <img
                      src={data.Icon}
                      alt={`${data.Name} icon`}
                      className="h-16 md:h-20 lg:h-24 mb-4"
                      loading="lazy"
                    />
                    <div className="text-center text-sm md:text-base lg:text-lg text-white font-semibold">
                      {data.Name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}