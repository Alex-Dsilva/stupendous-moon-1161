import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, ChakraProvider, Checkbox, Flex, Heading, IconButton, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import GridLoader from "react-spinners/GridLoader";
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai'
import { FaPaypal } from 'react-icons/fa';
import { addToCart, modifyCartQty, removeitemCart } from '../redux/App/AppAction';

function Wishlist() {

  const { userId } = useSelector(store => store.Authreducer);
  const { carts, isLoading, isError, errorMsg } = useSelector(
    state => state.Appreducer
  );

  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  // const handleAddClick = (id, qty) => {
  //   alert(`item id ${id} qty ${qty} user ${userId} Qty Updated`);
  //   if (qty < 10) {
  //     dispatch(modifyCartQty({userId, id, obj:{quantity:qty+1}}))
  //   } else {
  //     alert('Max Limit is 10 Units');
  //   }
  // };

  // const handleMinusClick = (id, qty) => {
  //   alert(`item id ${id} qty ${qty} user ${userId} Qty Updated`);
  //   if (qty > 1) {
  //     dispatch(modifyCartQty({userId, id, obj:{quantity:qty-1}}))
  //   }
  // };

  const handleDelete = i => {
    dispatch(removeitemCart({userId, id:i}))
    alert(`item id ${i} Deleted`);
  };

  // const handleWishlist = i => {
  //   alert(`Added item ${i} to wishlist`);
  // };

  // const [checkedItems, setCheckedItems] = useState(
  //   Array(carts.length||0).fill(false)
  // );

  // const allChecked = checkedItems.every(Boolean);
  // const isIndeterminate = checkedItems.some(Boolean);
  // const numChildCheckboxes = carts.length;

  // const handleCheckedChange = index => {
  //   const newCheckedItems = [...checkedItems];
  //   newCheckedItems[index] = !newCheckedItems[index];
  //   setCheckedItems(newCheckedItems);
  // };

  // useEffect(() => {
  //   let totalPrice = 0;
  //   checkedItems.forEach((checked, index) => {
  //     if (checked) {
  //       const itemPrice = carts[index].product.price * carts[index].quantity;
  //       totalPrice += itemPrice;
  //     }
  //   });
  //   setTotalPrice(totalPrice);
  // }, [checkedItems, carts]);

  // useEffect(() => {
  //   const parentCheckbox = document.getElementById('parent-checkbox');
  //   if (parentCheckbox) {
  //     parentCheckbox.indeterminate = isIndeterminate;
  //   }
  // }, [isIndeterminate]);

  if (isLoading || !carts) {
    return (
      <Flex mt="40vh" mb="40vh" justify="center">
        <GridLoader color="#06f" />
      </Flex>
    );
  }

  const orderplaced=()=>{
    navigate("/OrderPlaced")
  }

  const handleAddToCart=(id, qty)=>{
    let obj={ product:id, quantity:qty}
    console.log(userId, obj)
    dispatch(addToCart({userId, obj}))
  }
  

  return (
    <ChakraProvider>
      <Box maxW={{ sm: '700px', md: '1200px', lg: '1800px' }} m='auto' pt='2'>
        <Heading className="title" as="h3" fontWeight={'600'} p="20px">
          Wishlist
        </Heading>
        <Box h='fit-content' w='98%' m='auto' >
          <Flex h='3em' mb='2' align={'center'} bgColor={'#f1f1f1'} px='5' gap='5'>
            <Flex align={'center'} display={{base:"none", lg:"block"}} w='55%'>
              <Text as='b' color={'#999'} >Product Name & Detail</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} justify={'center'} w='22.5%' >
              <Text as='b' display={'block'} textAlign={'center'} color={'#999'} >Unit Price</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} justify={'center'} w='22.5%' >
              <Text as='b' display={'block'} textAlign={'center'} color={'#999'} >Operation</Text>
            </Flex>
          </Flex>
          {isLoading ? ("") : (
            <Flex flexDir={'column'} gap='5'>
              {carts && carts.map((el, index) => {
                return (<Flex key={index + 1}   flexDir={{base:"column", lg:"row"}} h='fit-content' align={'center'} px='5' gap='5'>
                  <Flex align={'center'} flexDir={{base:"column", md:'row', lg:"row"}} w={{base:"100%", lg:"55%"}}>
                    <Image h='8rem' w='8rem' src={el.product.images[0]} alt={'Product Image'} />
                    <Box ml='5' >
                      <Text fontWeight={'600'} mb='5' w='80%'  >{el.product.name}</Text>
                      <Text mt='4' w='fit-content' fontWeight={'700'} py='2' px='3' borderRadius={'md'} border={'3px solid red'}>{el.product.brand}</Text>
                    </Box>
                  </Flex>
                  <Flex align={'center'} justify={'center'} gap='5' w={{base:"100%", lg:"22.5%"}} >
                    <Text as='b' display={{base:"block", lg:"none"}} color={'#999'} >Unit Price :  </Text>
                    <Text as='b' color={'#999'} >₹ {el.product.price}</Text>
                  </Flex>
                  <Flex flexDir={{base:"column", md:'row', lg:"row"}} gap='5' align={'center'} justify={'center'} w={{base:"100%", lg:"22.5%"}} >
                    <Button w='100%' onClick={()=>handleAddToCart(el.product._id, el.quantity)} bg='#06f' leftIcon={< AiFillHeart />} color={'white'} >Add to Cart</Button>
                    <Button w='100%' onClick={()=>handleDelete(el._id)} leftIcon={< DeleteIcon />} colorScheme='red'>Delete</Button>
                  </Flex>
                </Flex>)
              })}
            </Flex>
          )}

          <Flex flexDir={{base:'column-reverse', md:'column', lg:"row"}} border='1px solid #c3c3c3' borderRadius={'5px'} align={'center'} justify={'right'} gap='3' mt='5' p='2' py='8'  h='fit-content'>
            <Flex flexDir={{base:'column',md:"row", lg:"row"}}  w={{base:'100%', lg:'70%'}} gap='2' justify={{base:'center', lg:"right"}}>
              <Flex flexDir={{base:'column', md:"column", lg:"row" }} gap='3' align={'center'} justify={'right'} w={{base:"100%",md:"70%", lg:"60%"}}  >
                    <Button onClick={orderplaced} w={{base:'100%', md:"100%", lg:"50%" }}  bg='#06f' fontWeight={'600'} color={'white'} >Proceed to Checkout</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Wishlist