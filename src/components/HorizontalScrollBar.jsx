import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ExercisesCard from './ExercisesCard';
const HorizontalScrollBar = (props) => {

  const settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    rt: false,
    // prevArrow: (
    //   <BsChevronLeft />
    // ),
    // nextArrow: (
    //   <BsChevronRight  />
    // ),
  };
  return (
    <Slider {...settings}>
        {props.data.map((item)=>(
            <Box key={item.id||item}
            itemId={item.id||item}
            title={item.id||item}
            // m='0 40px'
            >
              {props.isShowBodyPart ? 
               <BodyPart item={item} bodyPart={props.bodyPart}setBodyPart={props.setBodyPart}/>
               :
               <ExercisesCard exercise={item} />
               }
            </Box>
        ))}
    </Slider>
  )
}

export default HorizontalScrollBar