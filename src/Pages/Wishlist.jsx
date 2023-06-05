import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, ChakraProvider, Checkbox, Flex, Heading, IconButton, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import GridLoader from "react-spinners/GridLoader";
import { DeleteIcon } from '@chakra-ui/icons'
import { MdShoppingCart } from 'react-icons/md';
import { addToCart, getWishlist, removeWishlist, removeitemCart } from '../redux/App/AppAction';

function Wishlist() {

  const { userId } = useSelector(store => store.Authreducer);
  const { wishlist, isLoading, isError, errorMsg } = useSelector(
    state => state.Appreducer
  );

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = i => {
    dispatch(removeWishlist({ userId, id: i }))
    alert(`item id ${i} Deleted`);
  };

  useEffect(() => {
    dispatch(getWishlist(userId))
  }, [])

  console.log("Wishlist",wishlist)

  if (isLoading) {
    return (
      <Flex mt="40vh" mb="40vh" justify="center">
        <GridLoader color="#06f" />
      </Flex>
    );
  }

  const orderplaced = () => {
    navigate("/OrderPlaced")
  }

  const handleAddToCart = (id, qty) => {
    let obj = { product: id, quantity: qty }
    console.log(userId, obj)
    dispatch(addToCart({ userId, obj }))
    dispatch(removeWishlist({ userId, id: id }))
  }


  return (
    <ChakraProvider>
      <Box maxW={{ sm: '700px', md: '1200px', lg: '1800px' }} m='auto' pt='2'>
        <Heading className="title" as="h3" fontWeight={'600'} p="20px">
          Wishlist
        </Heading>
        <Flex flexDir={'column'} h='fit-content' justifyContent={'space-between'} m='auto' >
          <Box h='70vh'>
            <Flex h='3em' mb='2' display={wishlist.length === 0 ? "none" : "flex"} align={'center'} bgColor={'#f1f1f1'} px='5' gap='5'>
              <Flex align={'center'} display={{ base: "none", lg: "block" }} w='55%'>
                <Text as='b' color={'#999'} >Product Name & Detail</Text>
              </Flex>
              <Flex align={'center'} display={{ base: "none", lg: "block" }} justify={'center'} w='12%' >
                <Text as='b' display={'block'} textAlign={'center'} color={'#999'} >Unit Price</Text>
              </Flex>
              <Flex align={'center'} display={{ base: "none", lg: "block" }} justify={'center'} w='32.5%' >
                <Text as='b' display={'block'} textAlign={'center'} color={'#999'} >Operation</Text>
              </Flex>
            </Flex>
            {isLoading ? ("") : (
              <Flex flexDir={'column'} gap='5'>
                {wishlist && wishlist.length === 0 ? (
                  <Flex flexDir="column" mb='5' align="center" gap="3">
                    <Image h='12rem' src="https://img.freepik.com/free-vector/reading-list-concept-illustration_114360-2657.jpg?w=360&t=st=1685467167~exp=1685467767~hmac=8ad865d900769b2994f4be4d5638f725460fac5763993208c3338f2c76162ee9" alt="Empty Wishlist" />
                    <Heading size="lg">Wishlist empty</Heading>
                    <Text>Find products to add to your wishlist</Text>
                    <Link to='/products/new/newarrival'><Text colorScheme="teal" mt={8} textDecoration="underline" size="lg">
                      Continue Shopping
                    </Text></Link>
                  </Flex>
                ) : (
                  <Flex flexDir="column" gap="5">
                    {wishlist && wishlist.map((el, index) => {
                      return (<Flex key={index + 1} flexDir={{ base: "column", lg: "row" }} h='fit-content' align={'center'} px='5' gap='5'>
                        <Flex align={'center'} flexDir={{ base: "column", md: 'row', lg: "row" }} w={{ base: "100%", lg: "55%" }}>
                          <Image h='8rem' w='8rem' src={el.product.images[0]} alt={'Product Image'} />
                          <Box ml='5' >
                            <Text fontWeight={'600'} mb='5' w='80%'  >{el.product.name}</Text>
                            <Text mt='4' w='fit-content' fontWeight={'700'} py='2' px='3' borderRadius={'md'} border={'3px solid red'}>{el.product.brand}</Text>
                          </Box>
                        </Flex>
                        <Flex align={'center'} justify={'center'} gap='5' w={{ base: "100%", lg: "12%" }} >
                          <Text as='b' display={{ base: "block", lg: "none" }} color={'#999'} >Unit Price :  </Text>
                          <Text as='b' color={'#999'} >₹ {el.product.price}</Text>
                        </Flex>
                        <Flex flexDir={{ base: "column", md: 'row', lg: "row" }} gap='5' align={'center'} justify={'center'} w={{ base: "100%", lg: "32.5%" }} >
                          <Button w='100%' onClick={() => handleAddToCart(el.product._id, el.quantity)} bg='#06f' leftIcon={< MdShoppingCart />} color={'white'} >Add to Cart</Button>
                          <Button w='100%' onClick={() => handleDelete(el.product._id)} leftIcon={< DeleteIcon />} colorScheme='red'>Delete</Button>
                        </Flex>
                      </Flex>);
                    })}
                  </Flex>
                )}
              </Flex>
            )}
          </Box>
          {/* <Flex w='95%' display={wishlist.length === 0 ? "none" : "flex"} marginX={'auto'} flexDir={{ base: 'column-reverse', md: 'column', lg: "row" }} border='1px solid #c3c3c3' borderRadius={'5px'} align={'center'} justify={'right'} gap='3' mt='5' mb='5' p='2' py='8' h='fit-content'>
            <Flex flexDir={{ base: 'column', md: "row", lg: "row" }} w={{ base: '100%', lg: '70%' }} gap='2' justify={{ base: 'center', lg: "right" }}>
              <Flex flexDir={{ base: 'column', md: "column", lg: "row" }} gap='3' align={'center'} justify={'right'} w={{ base: "100%", md: "70%", lg: "60%" }}  >
                <Button onClick={orderplaced} w={{ base: '100%', md: "100%", lg: "50%" }} bg='#06f' fontWeight={'600'} color={'white'} > Clear the Wishlist</Button>
              </Flex>
            </Flex>
          </Flex> */}
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

export default Wishlist