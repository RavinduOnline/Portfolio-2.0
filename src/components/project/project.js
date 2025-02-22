import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from './project-card'; 
import SlideConfig from '../config/slide-config'; 

export default function Project() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_PORTFOLIO_DATA_API_URL + "?data=projects");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-16">
      <h1 className="text-center text-5xl text-white font-bold mb-12" data-aos="zoom-in">
        - Projects -
      </h1>

      <div data-aos="fade-up">
        <Slider {...SlideConfig}>
          {projectData.map((data) => (
            <div key={data.id}>
              <ProjectCard data={data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
