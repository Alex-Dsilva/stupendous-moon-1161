import { Box, Image, Flex, Heading, Text, Button, Spacer } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../components/ProductDisplay";
import { getProductsByID } from "../../redux/App/AppAction";
import { ChakraProvider } from "@chakra-ui/react";


const demoImage={
  image_url:"	https://img.gkbcdn.com/p/2022-05-11/ELEGLIDE-T1-El…e-36V-12-5AH-250W-MTB-Bike-500404-1._w500_p1_.jpg",
  images:["	https://img.gkbcdn.com/p/2022-05-11/ELEGLIDE-T1-El…e-36V-12-5AH-250W-MTB-Bike-500404-1._w500_p1_.jpg", ]
}

export const SingleProduct = () => {
  const { singleproduct, isLoading, isError, errorMsg } = useSelector(state => state.Appreducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(singleproduct?.images[0]);
  const [zoomed, setZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    dispatch(getProductsByID(id));
  }, [dispatch, id]);

  const handleImageChange = (image) => {
    setSelectedImage(image);
    setZoomed(false);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };


  useEffect(() => {
    dispatch(getProductsByID(id));
  }, [dispatch, id]);

  if (isLoading || singleproduct === null || singleproduct === undefined) {
    return <Box mt="100px">
      Loading...
    </Box>;
  }

  if (isError) {
    return <Box mt="90px">Error: {errorMsg}</Box>;
  }


  return (
    <ChakraProvider>
  <Flex >
    <ProductDisplay/>
    <Box  m="30px" >
      <Heading as='h4' size='md'>{singleproduct.name}{singleproduct.name} {singleproduct.name}</Heading>
      <Flex mb="10px">
        <Text mr="10px" fontSize="xl" fontWeight="semibold">${singleproduct.discountPrice}</Text>
        <Text textDecoration="line-through" color="gray.500">${singleproduct.price}</Text>
      </Flex>
      <Flex mb="10px">
        <Text mr="10px" color="gray.500" fontSize="sm">Brand:</Text>
        <Text>{singleproduct.brand}</Text>
      </Flex>
      <Flex mb="10px">
        <Text mr="10px" color="gray.500" fontSize="sm">Rating:</Text>
        <Text>{singleproduct.rating}/5</Text>
      </Flex>
      <Button mb="20px" mr="10px" colorScheme="blue">Add to Cart</Button>
      <Button mb="20px" mr="10px" colorScheme="blue">Buy Now</Button>
      {/* <Button mb="20px" colorScheme="gray"></Button> */}
    </Box>
  </Flex>
  </ChakraProvider>
  );
};
