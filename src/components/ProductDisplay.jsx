  import React, { useState, useRef } from 'react';
  import ReactImageZoom from 'react-image-zoom'
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
  import './ProductDisplay.css'
  import {
      Box,
      Image,
      Flex,
      HStack,
      useDisclosure,
      Text,
    } from '@chakra-ui/react';

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };
  
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block'}}
        onClick={onClick}
      />
    );
  };

  const ProductDisplay = ({images}) => {
  
    const [swiperRef, setSwiperRef] = useState(null);
  const [img, setImg] = useState(images[0]);

  const hoverHandler = (image, i) => {
    setImg(image);
  };

  const refs = useRef([]);

  refs.current = [];

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
    const settings = {
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };

    return (
      <Flex flexDir='column' gap={2} w='500px' justifyContent="center" p={5} >
        <ReactImageZoom {...{ 
                  width: 490,
                  height:420,
                  zoomLensStyle:`
                  background-image: radial-gradient(circle, rgba(137, 240, 163, 0.8) 0.1px, transparent 1.5px);
                  background-size: 2px 2px;
                  background-position: center;
                  opacity: 0.7;
                `,
                  zoomPosition:"right",
                  zoomWidth:380,
                  offset:{"vertical": 0, "horizontal": 10},
                  img:img
                  }} />
         
        <div style={{width:'25rem', height:'30px', marginLeft:'25px'}}>
      <Slider {...settings}>
        {images.map((image, i) => (
            <Box key={i}>
                  <Image 
                  key={i}
                  onMouseOver={() => hoverHandler(image, i)}
                  ref={addRefs}
                  cursor="pointer"
                  border={img === image ? '1px solid' : 'none'} 
                  src={image} alt="" />
                </Box>
              ))}
      </Slider>
    </div>
      </Flex>
    );
  }

  export default ProductDisplay




  


  


       {/* <ReactImageZoom {...{ 
                  width: 490,
                  height:390,
                  zoomLensStyle:`
                  background-image: radial-gradient(circle, rgba(137, 240, 163, 0.8) 0.1px, transparent 1.5px);
                  background-size: 2px 2px;
                  background-position: center;
                  opacity: 0.7;
                `,
                  zoomPosition:"default",
                  zoomWidth:380,
                  offset:{"vertical": 0, "horizontal": 10},
                  img:img
                  }} /> */}


        {/* <HStack>
        {images.map((image, i) => (
            <Box>
                  <Image 
                  key={i}
                  onMouseOver={() => hoverHandler(image, i)}
                  ref={addRefs}
                  cursor="pointer"
                  border={img === image ? '1px solid' : 'none'} src={image} alt="" />
                </Box>
              ))}
        </HStack>           */}


         {/* <Slider {...settings}>
  {images.map((image, i) => (
    <Box key={i}>
      <Image
        src={image}
        alt=""
        cursor="pointer"
      //   onClick={() => setImg(image)}
      //   opacity={img === image ? 1 : 0.5}
      //   transition="opacity 0.2s ease-in-out"
      //   _hover={{ opacity: 1 }}
      />  
    </Box>
  ))}
</Slider> */}