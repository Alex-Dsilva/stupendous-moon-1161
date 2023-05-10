import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Button, ChakraProvider, Checkbox, Flex, Heading, IconButton, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import GridLoader from "react-spinners/GridLoader";
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { AiFillHeart } from 'react-icons/ai'

function Cart() {

  const { userId } = useSelector(store => store.Authreducer);
  const { carts, isLoading, isError, errorMsg } = useSelector(
    state => state.Appreducer
  );
  const [qty, setQty] = useState(1);

  const handleAddClick = () => {
    if (qty < 10) {
      setQty(qty + 1);
    } else {
      alert('Max Limit is 10 Units');
    }
  };

  const handleMinusClick = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleDelete = i => {
    alert(`item ${i} Deleted`);
  };

  const handleWishlist = i => {
    alert(`Added item ${i} to wishlist`);
  };

  const [checkedItems, setCheckedItems] = useState(
    Array(carts.length||0).fill(false)
  );

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean);
  const numChildCheckboxes = carts.length;

  const handleCheckedChange = index => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  useEffect(() => {
    const parentCheckbox = document.getElementById('parent-checkbox');
    if (parentCheckbox) {
      parentCheckbox.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  if (isLoading || !carts) {
    return (
      <Flex mt="40vh" mb="40vh" justify="center">
        <GridLoader color="#06f" />
      </Flex>
    );
  }

  

  return (
    <ChakraProvider>
      <Box maxW={{ sm: '700px', md: '1200px', lg: '1800px' }} m='auto' pt='2'>
        <Heading className="title" as="h3" fontWeight={'600'} p="20px">
          Cart
        </Heading>
        <Box h='fit-content' w='98%' m='auto' >
          <Flex h='3em' mb='2' align={'center'} bgColor={'#f1f1f1'} px='5' gap='5'>
            <Flex align={'center'}>
              <Checkbox id="parent-checkbox" isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={(e) =>
                  setCheckedItems(Array(numChildCheckboxes).fill(e.target.checked))
                } border={'1px solid'} borderRadius={'18%'}></Checkbox>
            </Flex>
            <Flex align={'center'} display={{base:"block", lg:"none"}} w='48%'>
              <Text as='b' color={'#999'} >Select All</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} w='48%'>
              <Text as='b' color={'#999'} >Product Name & Detail</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} justify={'center'} w='13%' >
              <Text as='b' color={'#999'} >Unit Price</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} justify={'center'} w='13%' >
              <Text as='b' color={'#999'} >Quantity</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} justify={'center'} w='13%' >
              <Text as='b' color={'#999'} >Total</Text>
            </Flex>
            <Flex align={'center'} display={{base:"none", lg:"block"}} justify={'center'} w='13%' >
              <Text as='b' color={'#999'} >Operation</Text>
            </Flex>
          </Flex>
          {isLoading ? ("") : (
            <Flex flexDir={'column'} gap='5'>
              {carts && carts.map((el, index) => {
                return (<Flex key={index + 1}   flexDir={{base:"column", lg:"row"}} h='fit-content' align={'center'} px='5' gap='5'>
                  <Flex align={'center'} justify={{base:"flex-start", lg:"initial"}} >
                    <Checkbox key={index}
                      isChecked={checkedItems[index]}
                      onChange={() => handleCheckedChange(index)} border={'1px solid'} borderRadius={'18%'}></Checkbox>
                  </Flex>
                  <Flex align={'center'} flexDir={{base:"column", lg:"row"}} w={{base:"100%", lg:"48%"}}>
                    <Image h='10rem' w='10rem' src={el.product.images[0]} alt={'Product Image'} />
                    <Box ml='5' >
                      <Text as='b' mb='5'  >{el.product.name}</Text>
                      <Text mt='4' w='fit-content' fontWeight={'700'} py='2' px='3' borderRadius={'md'} border={'3px solid red'}>{el.product.brand}</Text>
                    </Box>
                  </Flex>
                  <Flex align={'center'} justify={'center'} w={{base:"100%", lg:"13%"}} >
                    <Text as='b' color={'#999'} >₹ {el.product.price}</Text>
                  </Flex>
                  <Flex align={'center'} justify={'center'} w={{base:"100%", lg:"13%"}} >
                    <Flex align="center" borderRadius="3px" border='1px solid #c0c0c0' justify="center">
                      <IconButton
                        aria-label="minus"
                        icon={<MinusIcon color='gray.500' w={2} h={2} />}
                        onClick={handleMinusClick}
                        borderRadius="3px"
                        border='0.1px solid #c0c0c0'
                        h={'29px'}
                        minW='28px'
                        bg='none'
                        borderRightRadius="0"
                      />
                      <Text px={5} fontSize="lg">
                        {el.quantity}
                      </Text>
                      <IconButton
                        aria-label="add"
                        icon={<AddIcon color='gray.500' w={2} h={2} />}
                        h={'29px'}
                        border='0.1px solid #c0c0c0'
                        bg='none'
                        minW='28px'
                        onClick={handleAddClick}
                        borderRadius="3px"
                        borderLeftRadius="0"
                      />
                    </Flex>
                  </Flex>
                  <Flex align={'center'} justify={'center'} w={{base:"100%", lg:"13%"}} >
                    <Text as='b' color={'#999'} >₹ {el.product.price * el.quantity}</Text>
                  </Flex>
                  <Flex flexDir={'column'} gap='5' align={'center'} justify={'center'} w={{base:"100%", lg:"13%"}} >
                    <Button w='100%' bg='#3191f8' leftIcon={< AiFillHeart />} color={'white'} >Wishlist</Button>
                    <Button w='100%' leftIcon={< DeleteIcon />} colorScheme='red'>Delete</Button>
                  </Flex>
                </Flex>)
              })}
            </Flex>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Cart