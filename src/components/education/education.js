import React, { useEffect, useState } from 'react';
import EduData from '../../data/education'
import EduCard from  '../education/edu-card'

export default function Education() {

    const [educationData, setEducationData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(process.env.REACT_APP_PORTFOLIO_DATA_API_URL + "?data=education");
          console.log(response)

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setEducationData(data);
        } catch (error) {
          setError(error.message);
        } 
      };
  
      fetchData();
    }, []);

  return (
    <div>            
        
        <h1 className=' text-center text-5xl text-red-500 font-bold' data-aos="zoom-in"> - Education - </h1>
        
        <div className=' flex flex-col items-center py-12'>
            <div  className=' lg:max-w-7xl'>
                { educationData.map(data => (
                    <EduCard data={data} />
                ))}
            </div>
        </div>
</div>
  )
}
