import { Box, Image, IconButton, Flex, Heading, Text, Button, Spacer, Icon, Tag, Badge, Divider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {FaBolt, FaHeart, FaRegHeart} from 'react-icons/fa'
import {MdTabletAndroid } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../components/ProductDisplay";
import { getProductQuestions, getProductReviews, getProductsByID } from "../../redux/App/AppAction";
import { ChakraProvider } from "@chakra-ui/react";
import { StarIcon, QuestionIcon } from "@chakra-ui/icons";
import { MinusIcon, AddIcon, } from "@chakra-ui/icons";
import ProductDetails from "../../components/ProductDetails";
import GridLoader from "react-spinners/GridLoader";

const images = [
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-1.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-2.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-4.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-7.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-5.jpg',
  'https://img.gkbcdn.com/s3/p/2022-05-11/ELEGLIDE-T1-Electric-Bike-36V-12-5AH-250W-MTB-Bike-500404-6.jpg'
];

const Shiping=['China']

const Option=["i3-1115G4 CPU 8+256GB", "i5-1135G7 CPU 8+256GB", "i5-1135G7 CPU 10+512GB"]

export const SingleProduct = () => {
  const { singleproduct, reviews, isLoading, isError, errorMsg } = useSelector(state => state.Appreducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const heartIcon = liked ? <FaHeart color="red" style={{height:'20px', width:"20px"}}/> : <FaRegHeart style={{height:'20px', width:"20px"}} />;
  const handleLike = async () => {
      setLiked(!liked);
  };

  useEffect(() => {
    dispatch(getProductsByID(id));
    dispatch(getProductReviews(id))
    dispatch(getProductQuestions(id))
  }, [id]);

  if (isLoading || singleproduct === null || singleproduct === undefined) {
    return <Flex mt="150px" justify='center' >
      <GridLoader color="#06f" />
    </Flex>;
  }

  if (isError) {
    return <Box mt="90px">Error: {errorMsg}</Box>;
  }


  return (
    <ChakraProvider>
  <Flex  flexDir={['column','column','row']}>
    <ProductDisplay images={singleproduct.images}/>
    <Box  w={['100vw', '100vw', '60vw']} m={['0','5','5']} >
      <Text fontSize={'xl'} p='5' fontWeight={500}>{singleproduct.name}</Text>
      <Flex mb="10px" pl='5' gap={'5'} wrap='wrap' align='center'>
        <Text fontSize={17} style={{ wordSpacing: "0.5px" }}><StarIcon color={'yellow.400'} />{" "}{reviews.length}{" "} Reviews</Text>
        <Text fontSize={17} style={{ wordSpacing: "0.5px" }}> Brand: {" "}{singleproduct.brand}</Text>
        <Text fontSize={17} style={{ wordSpacing: "0.5px" }}><QuestionIcon color={'Black.400'} />{" "}{0}{" "} Answered Questions</Text>
        <Text fontSize={16} color={'gray.400'} style={{ wordSpacing: "0.5px" }}>Item Code:499844</Text>
      </Flex>
      <Flex mb="10px" pl='5'  gap={'3'} align={'center'}>
        <Icon as={FaBolt} w={5} h={5} color={'#F1403C'} mr='-4' />
        <Text fontSize={18} color={'#F1403C'} fontWeight={600} style={{ wordSpacing: "0.5px" }}>Flash Deal </Text>
        <Text fontSize={16} color={'#F1403C'} style={{ wordSpacing: "0.5px" }}>Ends In: </Text>
      </Flex>
      <Flex gap={'2'} pl='5'  align={'center'} >
        <Heading as='h6' size='lg'>₹{singleproduct.price}</Heading>
        <Text as='del' color='gray.400' fontSize={'16'}>₹{singleproduct.strikedprice}</Text>
        <Tag size={'md'} fontWeight={700} fontSize={15} variant='solid' colorScheme='red'>14% OFF</Tag>
      </Flex>
      <Flex mb="10px" pl='5'  gap={1}>
        <Icon h='6' w='5' color="gray.500" as={MdTabletAndroid}/>
        <Text fontWeight={600} fontSize="17px">₹{singleproduct.price-250} </Text>
        <Text>Exclusive app price!</Text>
      </Flex>
      <Flex mb="20px" gap={7} pl='5'  align={'center'} >
        <Badge color={'green.600'} fontWeight={400} p='3px 10px'> 2% OFF New User </Badge>
        <Text color={'#046381'}>Get Coupons</Text>
      </Flex>
      <Divider  w={['95vw','100%','100%']} zIndex='-999' variant="solid" borderWidth='0.5px' borderColor="#d8d8d8" />
      <Flex mt="40px" pl='5' mb="20px" gap={5} align={'center'}>
        <Text mr="10px" fontSize="17">Ship from:</Text>
        { singleproduct.shiping.length? singleproduct.shiping.map((el, i)=><Button key={i} zIndex='-1' bg='none' p='0px 15px' size='sm' color={i==0?"#06f":"#818181"} fontSize={16}  fontWeight={400} border={i==0?'1px solid #06f':'1px dashed #a0a0a0'}>{el}</Button>):"N/A"  }
      </Flex>
      <Flex mb="20px" pl='5'  gap={9} >
        <Text mr="10px" fontSize="17">Option:</Text>
        <Flex wrap={"wrap"} gap={5}>
          { singleproduct.option.length? singleproduct.option.map((el,i)=><Button key={i} zIndex='-1' bg='none' p='0px 15px' size='sm' color={i==1?"#06f":"#818181"} fontSize={16}  fontWeight={400} border={i==1?'1px solid #06f':'1px dashed #a0a0a0'}>{el}</Button>):"N/A"  }
        </Flex>
      </Flex>
      <Flex mb="20px" pl='5'  gap={5} >
        <Text mr="47px" fontSize="17">QTY:</Text>
        <Flex align="center" justify="center">
      <IconButton
        aria-label="minus"
        icon={<MinusIcon color='gray.500' w={2} h={2}/>}
        // onClick={handleMinusClick}
        borderRadius="3px"
        border='0.1px solid #c0c0c0'
        h={'29px'}
        minW='28px'
        bg='none'
        borderRightRadius="0"
      />
      <Text px={5} border='1px solid #c0c0c0' fontSize="lg">
        {1}
      </Text>
      <IconButton
        aria-label="add"
        icon={<AddIcon color='gray.500' w={2} h={2}/>}
        h={'29px'}
        border='0.1px solid #c0c0c0'
        bg='none'
        minW='28px'
        // onClick={handleAddClick}
        borderRadius="3px"
        borderLeftRadius="0"
      />
    </Flex>
      </Flex>
      <Flex align='center' pl='5' mt='50px' >
      <Button mr="10px" zIndex='-1' size={'lg'} fontSize={'20px'} w='200px' border={'3px solid #06f'} bg='none' color={'#06f'} >Add to Cart</Button>
      <Button mr="10px" zIndex='-1' size={'lg'} fontSize={'20px'} w='200px' color='white' bg="#06f">Buy Now</Button>
      <IconButton
                icon={heartIcon}
                aria-label="Like"
                alignItems='center'
                cursor='pointer'
                bg={'none'}
                _hover={{bg:"none", border:'none'}}
                _focus={{bg:"none", border:'none'}}
                onClick={(e) => {
                    e.stopPropagation();
                    handleLike();
                }}
            />
        </Flex>
    </Box>
  </Flex>


  <ProductDetails  productId={singleproduct._id} />
  </ChakraProvider>
  );
};
