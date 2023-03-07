import React, { useState, useRef } from 'react';
import ReactImageZoom from 'react-image-zoom'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Box,
  Image,
  Flex,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';


const images = [
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-1.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-2.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-4.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-7.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-5.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-6.jpg'
];

const ProductDisplay = () => {

  const [swiperRef, setSwiperRef] = useState(null);
  const [img, setImg] = useState(images[0]);

  const hoverHandler = (image, i) => {
    setImg(image);
    refs.current[i].classList.add('active');
    for (let j = 0; j < images.length; j++) {
      if (i !== j) {
        refs.current[j].classList.remove('active');
      }
    }
  };

  const refs = useRef([]);

  refs.current = [];

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <Flex justifyContent="center" p={5}>
      <Box maxW="1000px" w="100%"> 
             <ReactImageZoom {...{ 
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
                }} />

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide>
              <Box
                className={img === image ? 'img_wrap active' : 'img_wrap'}
                key={i}
                onMouseOver={() => hoverHandler(image, i)}
                ref={addRefs}
                cursor="pointer"
                w='90px'
                border={img === image ? '1px solid' : 'none'}
              >
                <Image src={image} alt="" />
              </Box>
              </SwiperSlide>
            ))}
      </Swiper>

          {/* <HStack align="start" w="100%" mr={5}>
            {images.map((image, i) => (
              <Box
                className={img === image ? 'img_wrap active' : 'img_wrap'}
                key={i}
                onMouseOver={() => hoverHandler(image, i)}
                ref={addRefs}
                cursor="pointer"
                w='90px'
                border={img === image ? '1px solid' : 'none'}
              >
                <Image src={image} alt="" />
              </Box>
            ))}
          </HStack> */}
      </Box>
    </Flex>
  );
}

export default ProductDisplay



