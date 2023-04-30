import { Box, Card, CardBody, Flex, Image, Stack, Tag, TagLabel, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getbest } from '../../redux/App/AppAction';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import "./BestSeller.css";
import ProductCard from '../../components/ProductCard';
import { StarIcon } from '@chakra-ui/icons';

const BestSeller = () => {

    const { homebest, isLoading } = useSelector(state => state.Appreducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getbest());
    }, []);

    return (
        <Box>
            <Flex align={'baseline'} gap='4' mt='5' mb='3'>
                <Text fontSize={'18'} fontWeight={'600'}>Best Sellers</Text>
                <Link style={{ fontSize: '13px', color: "#2c83e6" }} to='/products/best/bestselling'>See More </Link>
            </Flex>

            <Flex id='bestslider' gap='3' p='4' h={'fit-content'} >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                        },
                        "@0.50": {
                          slidesPerView: 2,
                        },
                        "@1.00": {
                          slidesPerView: 4,
                        },
                        "@1.50": {
                          slidesPerView: 4,
                        },
                      }}
                >
                    {homebest && homebest.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                                {/* <ProductCard product={el}/> */}
                                <Card bg='#fff' borderRadius={'sm'} h='fit-content'>
                                    <CardBody p={0}>
                                        <Image
                                            src={el.images[0]}
                                            alt='Green double couch with wooden legs'
                                            h='40%'
                                        />
                                        <Stack p='0px 15px' mt='0.5em' mb='0.5em'>
                                            <Tag
                                                size={'sm'}
                                                key={'sm'}
                                                w='fit-content'
                                                borderRadius='full'
                                                variant='solid'
                                                colorScheme='red'
                                            >
                                                <TagLabel fontSize='16' p='1'>{(((el.strikedprice - el.price) / el.strikedprice) * 100).toFixed()}% off</TagLabel>
                                            </Tag>
                                            <Text noOfLines={2}>
                                                {el.name}
                                            </Text>
                                            <Flex>
                                                <Text fontWeight="bold">
                                                    {Array(5)
                                                        .fill('')
                                                        .map((_, i) => (
                                                            <StarIcon
                                                                key={i}
                                                                color={i < el.rating ? 'yellow.400' : 'gray.300'}
                                                            />
                                                        )) || "No Reviews"}   {el.ratingCount}
                                                </Text>

                                            </Flex>
                                            <Text fontWeight={600} mb='-5' fontSize={'19px'} >
                                                {el.price}
                                            </Text>
                                            <Text fontSize={'13px'}  color={'#b6b6b6'}>
                                                <s> ₹{el.strikedprice.toFixed(2) || 1249}</s>{"  "}
                                            </Text>
                                        </Stack>
                                    </CardBody>


                                </Card>
                            </SwiperSlide>
                        )
                    })

                    }
                </Swiper>
            </Flex>

        </Box>
    )
}

export default BestSeller