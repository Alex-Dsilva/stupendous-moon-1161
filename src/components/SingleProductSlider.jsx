import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";


const SingleProductSlider = ({images}) => {    
    console.log(images)
    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: "100px",
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 984,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
        
      ]
    };
    return (
      <Box w='100%'>
        
        <Slider {...settings}>
        {
          images.map((image,i)=> <Image 
                key={i}
                // onMouseOver={() => hoverHandler(image, i)}
                // ref={addRefs}
                cursor="pointer"
                // border={img === image ? '1px solid' : 'none'} 
                src={image} alt="hi" />
          )
        }
        </Slider>
      </Box>
          
          
          
          
      
    );
}

export default SingleProductSlider