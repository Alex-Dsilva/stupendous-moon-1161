import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, IconButton, Grid, ChakraProvider, Tag, TagLabel, Progress } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper";
import Swiper_One from "./Swiper_one";
import { Home } from '../../utils/catagorys'



const Homepage = () => {

  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  // const discount= 
  // ((el.strikedprice - el.price) / el.strikedprice) * 100 
  const heartIcon = liked ? <FaHeart color="red" /> : <FaRegHeart />;
  const handleLike = async () => {
    setLiked(!liked);
  };

  const handleClick = () => {
    navigate(`/singleproduct${el._id}`)
  }

  return (
    <ChakraProvider>
      <Box className="Homepage">
        <Flex gap={5} w='90vw'>
          <Swiper_One />
          <Box w='50%'  >
            <Box p='2' mb='5px' border='2px solid #76767680'>
              <Text fontSize={'19'} fontWeight={'400'} >Deal of the Day</Text>
              <Grid templateColumns='repeat(3,1fr)' gap={2} justifyContent='center'>
                {Home.deal.map((el, i) => {
                  return (
                    <Flex key={i} flexDir="column" gap='0.5' p={1}
                      overflow="hidden"
                      justify='center'
                      align={'left'}
                      border='none'
                      // _hover={{ shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                      transition="all 0.3s ease-in-out" borderWidth="1px">
                      <Image alignSelf='left' h='100px' w='100px' src={`${el.images[0]}`} alt={el.name} />
                      <Tag
                        size={'sm'}
                        key={'sm'}
                        w='fit-content'
                        borderRadius='full'
                        variant='solid'
                        colorScheme='red'
                      >
                        <TagLabel fontSize='11'>{(((el.strikedprice - el.price) / el.strikedprice) * 100).toFixed()}% off</TagLabel>
                      </Tag>
                      <Text fontSize='14'>
                        <b>₹{el.price || 2549} </b>
                      </Text>
                      <Text as='s' fontSize='12'>
                        ₹{el.strikedprice.toFixed(2) || 1249}
                      </Text>

                      <Progress borderRadius={'50px'} h='1.5' colorScheme='blue' size='sm' value={20} />
                      <Text fontSize={'11'} color='gray.400'>{el.qnty} Left</Text>

                    </Flex>
                  )
                })

                }
              </Grid>

            </Box>

            <Box p='2' border='2px solid #76767680'>
              <Text fontSize={'19'} fontWeight={'400'} >Featured Products</Text>
              <Grid templateColumns='repeat(3,1fr)' h='fit-content' gap={2} justifyContent='center'>
                {Home.featured.map((el, i) => {
                  return (
                    <Flex key={i} flexDir="column" gap='0.5' p={1}
                      overflow="hidden"
                      justify='center'
                      align={'left'}
                      border='none'
                      // _hover={{ shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                      transition="all 0.3s ease-in-out" borderWidth="1px">
                      <Image alignSelf='left' h='100px' w='100px' src={`${el.images[0]}`} alt={el.name} />
                      <Tag
                        size={'sm'}
                        key={'sm'}
                        w='fit-content'
                        borderRadius='full'
                        variant='solid'
                        colorScheme='red'
                      >
                        <TagLabel fontSize='13'>{(((el.strikedprice - el.price) / el.strikedprice) * 100).toFixed()}% off</TagLabel>
                      </Tag>
                      <Text fontSize='15'>
                        <b>₹{el.price || 2549} </b>
                      </Text>
                      <Text as='s' fontSize='13'>
                        ₹{el.strikedprice.toFixed(2) || 1249}
                      </Text>

                      <Progress borderRadius={'50px'} h='1.5' colorScheme='blue' size='sm' value={20} />
                      <Text fontSize={'11'} color='gray.400'>{el.qnty} Left</Text>

                    </Flex>
                  )
                })

                }
              </Grid>

            </Box>
          </Box>
        </Flex>
        <Box m='2'  border='1px solid' h='200'>
          <Text fontSize={'17'} fontWeight={'500'}>Trending Categories</Text>
                <Flex>

                </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Homepage;



