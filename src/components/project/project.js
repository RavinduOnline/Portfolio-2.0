import React from 'react'
import ProjectCard from './project-card';
import ProjectData from '../../data/project-data'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SlideConfig from '../config/slide-config';

export default function Project() {

    const settings = SlideConfig;

  return (
    <div>
        <h1 className=' text-center text-5xl text-white font-bold'>- Projects -</h1>

      
        <Slider {...settings}>

        {
                ProjectData.map((data,index) =>(


                        <ProjectCard data={data} />

                ))
            }
        </Slider>
        

    </div>
  )
}
