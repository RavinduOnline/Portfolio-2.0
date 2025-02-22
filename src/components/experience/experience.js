import React, { useEffect, useState } from 'react';
import LeftCard from './left-card';
import RightCard from './right-card';
// import WorkData from '../../data/work-data';
import ExperienceMobile from './mobile/experience-mobile';

export default function Experience() {
  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_PORTFOLIO_DATA_API_URL + '?data=experience');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-center text-5xl text-red-500 font-bold" data-aos="zoom-in">
        - Experience -
      </h1>

      <div>
        {/* Desktop View */}
        <div className="hidden flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {workData.map((data, index) => (
            <React.Fragment key={data.id}>
              {index % 2 === 0 ? <LeftCard data={data} /> : <RightCard data={data} />}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="mt-12 md:mt-0 md:hidden">
          {workData.map((data) => (
            <ExperienceMobile key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}