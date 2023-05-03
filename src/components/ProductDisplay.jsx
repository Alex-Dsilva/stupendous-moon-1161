  import React, { useState, useRef, useEffect } from 'react';
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
    import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
      <IoIosArrowBack className="arrow-icon-left" onClick={onClick} />
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
      <IoIosArrowForward className="arrow-icon-right" onClick={onClick} />
  );
};

const ProductDisplay = ({images}) => {
  
  const [swiperRef, setSwiperRef] = useState(null);
  const [img, setImg] = useState(images[0]);
  const [zoomPosition, setZoomPosition] = useState('right');

// define a media query using the window.matchMedia API
const mq = window.matchMedia('(max-width: 920px)');

// update the zoom position based on the media query
useEffect(() => {
  if (mq.matches) {
    setZoomPosition('original');
  } else {
    setZoomPosition('right');
  }
}, [mq.matches]);

  useEffect(() => {
    setImg(images[0])
  }, [images]);

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
      lazyLoad:true,
      adaptiveHeight:true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      prevArrow: <CustomPrevArrow className="custom-prev-arrow" />,
      nextArrow: <CustomNextArrow className="custom-next-arrow" />,
    };


    return (
      <Flex flexDir='column' gap={2} maxW={['100vw','100vw','500px']}  justifyContent="center" p={5} >
        <ReactImageZoom style={{ width: mq.matches ? '100vw' : '500px' }}{...{ 
                  height:420,
                  zoomLensStyle:`
                  background-image: radial-gradient(circle, rgba(137, 240, 163, 0.8) 0.1px, transparent 1.5px);
                  background-size: 2px 2px;
                  background-position: center;
                  opacity: 0.7;
                `,
                  zoomPosition:zoomPosition,
                  zoomWidth:450,
                  offset:{"vertical": 0, "horizontal": 10},
                  img:img,
                  }} />
         
      
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