import { Box, Card, CardBody, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNew } from '../../redux/App/AppAction';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import "./Foryou.css";

const Foryou = () => {

    const { homenew, isLoading } = useSelector(state => state.Appreducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNew());
    }, []);

    console.log(homenew, isLoading);

    return (
        <Box>
            <Flex align={'baseline'} gap='4' mt='5' mb='3'>
                <Text fontSize={'18'} fontWeight={'600'}>New For You </Text>
                <Link style={{ fontSize: '13px', color: "#2c83e6" }} to='/products/new/newarrival'>See More </Link>
            </Flex>
            <Flex id='newslider' gap='3' flexDir={['column', 'column', 'row']} p='4' h={'fit-content'} bgImage={'linear-gradient(to bottom, #f1f6fd, #e0edff)'}>
                <Box id='Imageban' w={{base:"50%", md:"50%", lg:"23.5%"}}>
                    <Image h='100%' src="https://img.gkbcdn.com/bn/2304/2-6437bcb52b40c92fb84b1064._p1_.jpg" alt='Banner' />
                </Box>
                <Box w={{md:"48.5%", lg:"73%"}}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                        },
                        "@0.75": {
                          slidesPerView: 1,
                        },
                        "@1.00": {
                          slidesPerView: 3,
                        },
                        "@1.50": {
                          slidesPerView: 3,
                        },
                      }}
                >
                    {homenew && homenew.map((el, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Card bg='#fff' borderRadius={'sm'} h='100%'>
                                    <CardBody p={0}>
                                        <Image
                                            src={el.images[0]}
                                            alt='Green double couch with wooden legs'
                                            h='70%'
                                        />
                                        <Stack p='0px 15px' mt='0.5em' mb='0.5em'>
                                            <Text noOfLines={2}>
                                                {el.name}
                                            </Text>
                                            <Text fontWeight={600} fontSize={'18px'} >
                                                {el.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>


                                </Card>
                            </SwiperSlide>
                        )
                    })

                    }
                </Swiper>
                </Box>
            </Flex>
        </Box>
    )
}

export default Foryou;
