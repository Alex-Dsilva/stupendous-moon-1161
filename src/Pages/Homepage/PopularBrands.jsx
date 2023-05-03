import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const PopularBrands = () => {
  return (
    <Box>
        <Flex align={'baseline'} gap='4' mt='5' mb='3'>
            <Text fontSize={'18'} fontWeight={'600'}>Popular Brands</Text>
        </Flex> 
        <Flex mb='2'>
        <Swiper
            pagination={{ clickable: true }}
            loop={true}
            allowTouchMove={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Link to='/products/search/creality'><Image
                src="https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg"
                alt=""
                w='100%'
              /></Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to='/products/search/engwe'><Image
                src="https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg"
                alt=""
                w='100%'
              /></Link>
            </SwiperSlide>
            
          </Swiper>
        </Flex>
        <Grid gap='2' templateColumns={['repeat(1,1fr)','repeat(2,1fr)', 'repeat(4,1fr)' ]}>
        <Link to='/products/search/sculpfun'><Box overflow={'hidden'} position={'relative'}>
          <Image
            _hover={{transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}
            src="https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg"
            alt=""
          />
          </Box></Link>
          <Link to='/products/search/tronsmart'><Box overflow={'hidden'} position={'relative'}>
          <Image
            _hover={{transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}
            src="https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg"
            alt=""
          />
          </Box></Link>
          <Link to='/products/search/creality'><Box overflow={'hidden'} position={'relative'}>
          <Image
            _hover={{transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}
            src="https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg"
            alt=""
          />
          </Box></Link>
          <Link to='/products/search/roborock'><Box overflow={'hidden'} position={'relative'}>
          <Image
            _hover={{transform: 'scale(1.2)', transition: 'transform 0.2s ease-in-out'}}
            src="https://img.gkbcdn.com/bb/roborock-20221007152405384._p1_.jpg"
            alt=""
          /></Box></Link>
        </Grid>
    </Box>
  )
}

export default PopularBrands