import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, IconButton, Grid, ChakraProvider, Tag, TagLabel, Progress, CardBody, Stack, Heading, Card } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper";
import Swiper_One from "./Swiper_one";
import { Home } from '../../utils/catagorys'
import Foryou from './Foryou';
import BestSeller from './BestSeller';
import PopularBrands from './PopularBrands';



const Homepage = () => {

  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  // const discount= 
  // ((el.strikedprice - el.price) / el.strikedprice) * 100 
  const heartIcon = liked ? <FaHeart color="red" /> : <FaRegHeart />;
  const handleLike = async () => {
    setLiked(!liked);
  };

  const handleClick = (id) => {

    navigate(`/singleproduct${id}`)
  }

  return (
    <ChakraProvider>
      <Box maxW={{sm:'700px', md:'1200px', lg:'1800px'}} m='auto' pt='2'>
        <Flex flexDir={["column", "column", "row"]} justify={'center'} m='auto' align={'center'} gap={5} maxW='95%' h='fit-content' >
          <Swiper_One />
          <Box w={['100%', '100%', '50%']}  >
            <Box p='2' mb='5px' h='fit-content' >
              <Text fontSize={'19'} fontWeight={'600'} >Deal of the Day</Text>
              <Grid templateColumns='repeat(3,1fr)' gap={5} justifyContent='center'>
                {Home.deal.map((el, i) => {
                  return (
                    <Link to={`/singleproduct${el._id}`}><Flex key={i} flexDir="column" gap='0.5' p={1}
                      overflow="hidden"
                      justify='center'
                      align={'left'}
                      border='none'
                      // _hover={{ shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                      transition="all 0.3s ease-in-out" borderWidth="1px">
                      <Image alignSelf='left' h='100%' w='100%' src={`${el.images[0]}`} alt={el.name} />
                      <Tag
                        size={'xs'}
                        key={'sm'}
                        w='fit-content'
                        borderRadius='full'
                        variant='solid'
                        colorScheme='red'
                      >
                        <TagLabel fontSize='9' p='1'>{(((el.strikedprice - el.price) / el.strikedprice) * 100).toFixed()}% off</TagLabel>
                      </Tag>
                      <Text fontSize={['14', '14', '17']}>
                        <b>₹{el.price || 2549} </b>
                      </Text>
                      <Text as='s' fontSize='15'>
                        ₹{el.strikedprice.toFixed(2) || 1249}
                      </Text>

                      <Progress borderRadius={'50px'} mt='2' h='2.5' colorScheme='blue' size='sm' value={el.qnty} />
                      <Text fontSize={'13'} color='gray.400'>{el.qnty} Left</Text>

                    </Flex></Link>
                  )
                })

                }
              </Grid>

            </Box>
            <Box p='2' h='fit-content' >
              <Text fontSize={'19'} fontWeight={'600'} >Featured Products</Text>
              <Grid templateColumns='repeat(3,1fr)' h='fit-content' gap={5} justifyContent='center'>
                {Home.featured.map((el, i) => {
                  return (
                    <Flex onClick={()=> handleClick(el._id)} cursor={'pointer'} key={i} flexDir="column" gap='0.5' p={1}
                      overflow="hidden"
                      justify='center'
                      align={'left'}
                      border='none'
                      // _hover={{ shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                      transition="all 0.3s ease-in-out" borderWidth="1px">
                      <Image alignSelf='left' h='100%' w='100%' src={`${el.images[0]}`} alt={el.name} />
                      <Text whiteSpace={'nowrap'}  >{el.name}</Text>
                      <Text fontSize='17'>
                        <b>₹{el.price || 2549} </b>
                      </Text>
                      <Text as='s' fontSize='15'>
                        ₹{el.strikedprice.toFixed(2) || 1249}
                      </Text>
                    </Flex>
                  )
                })

                }
              </Grid>

            </Box>
          </Box>
        </Flex>
        <Box maxW='95%' m={'auto'}  h='fit-content'>
          <Text fontSize={'18'} fontWeight={'600'}>Trending Categories</Text>
          <Flex p='2' gap='2' mt='2' flexDir={['column', 'column', 'row']}>
            <Card _hover={{transform:'scale(0.9)', transition: 'transform 0.5s ease-in-out'}}  w={['100%', '100%','33%']} borderRadius='lg' overflow={'hidden'} border='0.5px solid #e3e3e3'>
              <CardBody p={0}>
                <Image
                  src='https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg'
                  alt='Green double couch with wooden legs'
                  h='60%'
                />
                <Stack spacing='3' p='15px 15px' >
                  <Heading size='md' fontWeight={'600'}>Smart Home & Garden</Heading>
                  <Text>
                  Smart cleaning robots and vacuums, living room furniture, patio &
                  garden supplies, upto 60% off!
                  </Text>

                </Stack>
              </CardBody>

            </Card>
            <Card _hover={{transform:'scale(0.9)', transition: 'transform 0.5s ease-in-out'}} w={['100%', '100%','33%']} borderRadius='lg' overflow={'hidden'} border='0.5px solid #e3e3e3'>
              <CardBody p={0}>
                <Image
                  src='https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg'
                  alt='Green double couch with wooden legs'
                  h='60%'
                />
                <Stack spacing='3' p='15px 15px'>
                  <Heading size='md' fontWeight={'600'}>E-transport</Heading>
                  <Text>
                  New e-rides for less.Skip gas prices with electric bikes,scooters
                  & beyond
                  </Text>

                </Stack>
              </CardBody>

            </Card>
            <Card _hover={{transform:'scale(0.9)', transition: 'transform 0.5s ease-in-out'}} w={['100%', '100%','33%']} borderRadius='lg' overflow={'hidden'} border='0.5px solid #e3e3e3'>
              <CardBody p={0}>
                <Image
                  src='https://img.gkbcdn.com/bn/2304/5-6437b5c42b40c92fb8758062._p1_.jpg'
                  alt='3D printer'
                  h='60%'
                />
                <Stack spacing='3' p='15px 15px'>
                  <Heading size='md' fontWeight={'600'}>3D Printers</Heading>
                  <Text>
                  3D printers allow you to bring digitally modeled desings to life
                  by using highly detailed filament printing.
                  </Text>

                </Stack>
              </CardBody>

            </Card>

          </Flex>
        </Box>
        <Box maxW='95%' m={'auto'}>
          <Foryou/>
        </Box>
        <Box maxW='95%' m={'auto'}>
          <BestSeller/>
        </Box>
        <Box maxW='95%' m={'auto'}>
          <PopularBrands/>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Homepage;



