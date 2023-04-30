import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
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
            allowTouchMove={true}
            modules={[Navigation, Pagination]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image
                src="https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
        <Grid gap='2' templateColumns={['repeat(1,1fr)','repeat(2,1fr)', 'repeat(4,1fr)' ]}>
          <Image
            src="https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg"
            alt=""
          />
          <Image
            src="https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg"
            alt=""
          />
          <Image
            src="https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg"
            alt=""
          />
          <Image
            src="https://img.gkbcdn.com/bb/roborock-20221007152405384._p1_.jpg"
            alt=""
          />
        </Grid>
    </Box>
  )
}

export default PopularBrands