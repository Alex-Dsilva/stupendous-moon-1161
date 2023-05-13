import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, ChakraProvider, Checkbox, Flex, Heading, IconButton, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import GridLoader from "react-spinners/GridLoader";
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai'
import { FaPaypal } from 'react-icons/fa';
import { modifyCartQty, removeitemCart } from '../redux/App/AppAction';

function Cart() {

  const { userId } = useSelector(store => store.Authreducer);
  const { carts, isLoading, isError, errorMsg } = useSelector(
    state => state.Appreducer
  );

  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch=useDispatch()

  const handleAddClick = (id, qty) => {
    alert(`item id ${id} qty ${qty} user ${userId} Qty Updated`);
    if (qty < 10) {
      dispatch(modifyCartQty({userId, id, obj:{quantity:qty+1}}))
    } else {
      alert('Max Limit is 10 Units');
    }
  };

  const handleMinusClick = (id, qty) => {
    alert(`item id ${id} qty ${qty} user ${userId} Qty Updated`);
    if (qty > 1) {
      dispatch(modifyCartQty({userId, id, obj:{quantity:qty-1}}))
    }
  };

  const handleDelete = i => {
    dispatch(removeitemCart({userId, id:i}))
    alert(`item id ${i} Deleted`);
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
    let totalPrice = 0;
    checkedItems.forEach((checked, index) => {
      if (checked) {
        const itemPrice = carts[index].product.price * carts[index].quantity;
        totalPrice += itemPrice;
      }
    });
    setTotalPrice(totalPrice);
  }, [checkedItems, carts]);

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
                  <Flex w={{base:"100%", lg:"2%"}} align={'center'} justify={{base:"left", lg:"initial"}} >
                    <Checkbox key={index}
                      isChecked={checkedItems[index]}
                      onChange={() => handleCheckedChange(index)} border={'1px solid'} borderRadius={'18%'}></Checkbox>
                  </Flex>
                  <Flex align={'center'} flexDir={{base:"column", md:'row', lg:"row"}} w={{base:"100%", lg:"48%"}}>
                    <Image h='8rem' w='8rem' src={el.product.images[0]} alt={'Product Image'} />
                    <Box ml='5' >
                      <Text fontWeight={'600'} mb='5'  >{el.product.name}</Text>
                      <Text mt='4' w='fit-content' fontWeight={'700'} py='2' px='3' borderRadius={'md'} border={'3px solid red'}>{el.product.brand}</Text>
                    </Box>
                  </Flex>
                  <Flex align={'center'} justify={'center'} gap='5' w={{base:"100%", lg:"13%"}} >
                    <Text as='b' display={{base:"block", lg:"none"}} color={'#999'} >Unit Price :  </Text>
                    <Text as='b' color={'#999'} >₹ {el.product.price}</Text>
                  </Flex>
                  <Flex align={'center'} justify={'center'} gap='5' w={{base:"100%", lg:"13%"}} >
                  <Text as='b' display={{base:"block", lg:"none"}} color={'#999'} >Quantity :  </Text>
                    <Flex align="center" borderRadius="3px" border='1px solid #c0c0c0' justify="center">
                      <IconButton
                        aria-label="minus"
                        icon={<MinusIcon color='gray.500' w={2} h={2} />}
                        onClick={()=>handleMinusClick(el._id, el.quantity)}
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
                        onClick={()=> handleAddClick(el._id, el.quantity)}
                        borderRadius="3px"
                        borderLeftRadius="0"
                      />
                    </Flex>
                  </Flex>
                  <Flex align={'center'} gap='5' justify={'center'} w={{base:"100%", lg:"13%"}} >
                  <Text as='b' display={{base:"block", lg:"none"}} color={'#999'} >Total :  </Text>
                    <Text as='b' color={'#999'} >₹ {(el.product.price * el.quantity).toFixed(2)}</Text>
                  </Flex>
                  <Flex flexDir={{base:"column", md:'row', lg:"column"}} gap='5' align={'center'} justify={'center'} w={{base:"100%", lg:"13%"}} >
                    <Button w='100%' onClick={()=>handleWishlist(el._id)} bg='#06f' leftIcon={< AiFillHeart />} color={'white'} >Wishlist</Button>
                    <Button w='100%' onClick={()=>handleDelete(el._id)} leftIcon={< DeleteIcon />} colorScheme='red'>Delete</Button>
                  </Flex>
                </Flex>)
              })}
            </Flex>
          )}

          <Flex flexDir={{base:'column-reverse', md:'column', lg:"row"}} border='1px solid #999' align={'center'} justify={'space-between'} gap='3' mt='2' p='2' py='8'  h='fit-content'>
            <Flex justify={{base:'space-around',md:'center', lg:'space-between'}} gap='5' mt={{base:"3" , lg:"0"}} align={'center'} w={{base:'100%', lg:'28%'}} >
                <Link to='/products/search/best'> <Text display={'flex'} _hover={{textDecor:"underline"}} alignItems={'center'} >Continue Shopping {">"} </Text></Link>
                <Text  color='#999' fontSize={'14px'}>You choose {checkedItems.filter(Boolean).length} item(s)</Text>
              </Flex>
            <Flex flexDir={{base:'column',md:"row", lg:"row"}}  w={{base:'100%', lg:'70%'}} gap='2' justify={{base:'center', lg:"space-around"}}>
              <Flex gap='1' align={'center'} justify={{base:'center', lg:"initial"}} >
                <Text as='b'fontSize={'15px'} >Total :</Text>
                <Text  color='red' fontWeight={'500'} fontSize={'xl'} >₹ {totalPrice}</Text>
              </Flex>
              <Flex flexDir="row" gap='3' align={'center'} justify={'center'} w={{base:"100%",md:"70%", lg:"80%"}}  >
                    <Button display={'flex'} gap='2' w='50%' bg='#f9db3a'  >Pay with  <Image h='50%' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4' alt='paypal'/></Button>
                    <Button w='50%' bg='#06f' fontWeight={'600'} color={'white'} >Proceed to Checkout</Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>

       
      </Box>
    </ChakraProvider>
  )
}

export default Cart