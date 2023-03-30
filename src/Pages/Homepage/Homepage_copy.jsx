import React, { useEffect } from "react";
// import "./Homepage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Swiper_One from "./Swiper_one";
import { useNavigate } from 'react-router-dom';
import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";

const Homepage = () => {

  return (
    <ChakraProvider>
    <Box className="Homepage">
      <Flex>
        <Swiper_One />
        <Box>
          <Flex>
            
          </Flex>
        </Box>
      </Flex>
    </Box>
    </ChakraProvider>
  );
};

export default Homepage;



