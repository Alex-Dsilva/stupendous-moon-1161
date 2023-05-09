import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CartComp from '../components/CartComp'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, ChakraProvider, Checkbox, Flex, Heading, IconButton, Image, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import GridLoader from "react-spinners/GridLoader";
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { AiFillHeart } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'

function Cart() {

  const { userId } = useSelector(store => store.Authreducer);
  const { carts, isLoading, isError, errorMsg } = useSelector(state => state.Appreducer);

  const [selected, setSelected] = useState([])
  const [qty, setQty] = useState(1)

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelected = [0]
      setSelected(newSelected)
    } else {
      setSelected([])
    }
  }

  const handleSelectOne = (e, i) => {
    if (e.target.checked) {
      setSelected([...selected, i])
    } else {
      setSelected(selected.filter((s) => s !== i))
    }
  }

  const handleAddClick = () => {
    if (qty < 10) {
      setQty(qty + 1)
    } else {
      alert('Max Limit is 10 Units')
    }
  }

  const handleMinusClick = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }

  const handleDelete = (i) => {
    setSelected(selected.filter((s) => s !== i))
  }

  const handleWishlist = (i) => {
    alert(`Added item ${i} to wishlist`)
  }


  if (isLoading || carts === null || carts === undefined) {
    return <Flex mt="40vh" mb='40vh' justify='center' >
      <GridLoader color="#06f" />
    </Flex>;
  }

  return (
    <ChakraProvider>
      <Box maxW={{ sm: '700px', md: '1200px', lg: '1800px' }} m='auto' pt='2'>
        <Heading className="title" as="h3" fontWeight={'600'} p="20px">
          Cart
        </Heading>
        <Box h='fit-content' w='100%' border='1px solid'>
          <TableContainer maxW='100vw'>
            <Table variant='unstyled' >
              <Thead>
                <Tr>
                  <Th>
                    <Checkbox
                      isChecked={selected.length === carts.length}
                      onChange={handleSelectAll}
                    />
                  </Th>
                  <Th >Product Name &amp; Detail</Th>
                  <Th>Unit Price</Th>
                  <Th>Quantity</Th>
                  <Th>Total</Th>
                  <Th>Operation</Th>
                </Tr>
              </Thead>
              <Tbody>
                {carts.map((cartItem) => (
                  <Tr key={cartItem.id} >
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td>
                    <Flex align='center'>
    <Box ml={2} mr={4}>
      <Image src={cartItem.product.images[0]} alt={cartItem.product.name} width={200} height={200} />
    </Box>
    <Flex maxW={'50%'} h='fit-content' wrap={'wrap'} >
      <Text style={{wordWrap: 'break-word'}}>{cartItem.product.name}</Text>
    </Flex>   
  </Flex>
                    </Td>
                    <Td>${cartItem.product.price}</Td>
                    <Td>
                      <Flex align='center'>
                        <IconButton
                          aria-label='minus'
                          icon={<MinusIcon color='gray.500' w={2} h={2} />}
                          onClick={() => handleMinusClick(cartItem.id)}
                          borderRadius='3px'
                          border='0.1px solid #c0c0c0'
                          h={'29px'}
                          minW='28px'
                          bg='none'
                          borderRightRadius='0'
                        />
                        <Text px={5} fontSize='lg'>
                          {cartItem.quantity}
                        </Text>
                        <IconButton
                          aria-label='add'
                          icon={<AddIcon color='gray.500' w={2} h={2} />}
                          h={'29px'}
                          border='0.1px solid #c0c0c0'
                          bg='none'
                          minW='28px'
                          onClick={() => handleAddClick(cartItem.id)}
                          borderRadius='3px'
                          borderLeftRadius='0'
                        />
                      </Flex>
                    </Td>
                    <Td>${cartItem.price * cartItem.quantity}</Td>
                    <Td>
                      <Flex direction='column'>
                        <IconButton
                          aria-label='delete'
                          icon={<RiDeleteBin6Line color='gray.500' w={2} h={2} />}
                          h={'29px'}
                          bg='none'
                          minW='28px'
                          onClick={() => handleDelete(cartItem.id)}
                          mb={2}
                        />
                        <IconButton
                          aria-label='add to wishlist'
                          icon={<AiFillHeart color='gray.500' w={2} h={2} />}
                          h={'29px'}
                          bg='none'
                          minW='28px'
                          onClick={() => handleWishlist(cartItem.id)}
                        />
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default Cart

// {const Head = styled.div`
//     text-align: left;
//     width: 80%;
//     margin: auto;
//     margin-top: 20px;
//     >h1 {
//         text-align: left;
//     }
// `

// const Headersdiv = styled.div`
//     display: flex;
//     border: 1px solid #e9e9e9;
//     align-items: center;
//     >h4:first-child{
//         width: 40%;
//         text-align: left;
//         padding-left: 25px;
//     }
//     >button{
//         background-color: #06f;
//         font-size: 20px;
//         width: 30%;
//         color: #fff;
//         vertical-align: middle;
//         padding-left: 70px;
//         padding-right: 70px;
//         border: none;
//         height: 45px;
//         margin-bottom: 20px;
//         display: inline-block;
//         font-size: 17px;
//         font-weight: 700;
//         border-radius: 4px;
//     }
//     >h4:nth-child(2){
//         width: 10%;
//         text-align: center;
//         padding-left: 100px;
//     }
//     >h4:nth-child(3){
//         width: 10%;
//         padding-left: 10px;
//     }
//     >h4:nth-child(4){
//         width: 10%;
//     }
//     .ContinueShopping{
//         display: flex;
//         text-align:left;
//         width: 100%;
//         align-items: center;
//         padding-left: 25px;
//         text-decoration: underline;
//         font-size: 15px;
//         color: #666666;
//         > svg{
//             color: #666666;
//         }
//     }
//     >h5{
//     width: 35%;
//     text-align: center;
//     }
// `

// const Listdiv = styled.div`
//     margin-bottom:107px ;
// `
// const Paymentdiv = styled.div`
//     display: flex;
//     border: 1px solid #e9e9e9;
//     align-items: center;
//     position: fixed;
//     background-color:#fff;
//     width: 100%;
//     bottom: 0;
//     >h4:first-child{
//         width: 40%;
//         text-align: left;
//         padding-left: 25px;
//     }
//     >button{
//         background-color: #06f;
//         font-size: 20px;
//         width: 30%;
//         color: #fff;
//         vertical-align: middle;
//         padding-left: 70px;
//         padding-right: 70px;
//         border: none;
//         height: 45px;
//         margin-bottom: 20px;
//         display: inline-block;
//         font-size: 17px;
//         font-weight: 700;
//         border-radius: 4px;
//     }
//     >h4:nth-child(2){
//         width: 10%;
//         text-align: center;
//         padding-left: 50px;
//     }
//     >h4:nth-child(3){
//         width: 10%;
//         padding-left: 10px;
//     }
//     >h4:nth-child(4){
//         width: 10%;
//     }
//     .ContinueShopping{
//         display: flex;
//         text-align:left;
//         width: 100%;
//         align-items: center;
//         padding-left: 25px;
//         text-decoration: underline;
//         font-size: 15px;
//         color: #666666;
//         > svg{
//             color: #666666;
//         }
//     }

//     >h5{
//     width: 35%;
//     text-align: center;
//     }
// `

// const PayWall = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding-top: 20px;
//     width: 30%;
//     padding-bottom: 20px;
//     padding-right: 2%;
//     >button{
//         background-color: #FFD700;
//         border: none;
//         width: 100%;
//         padding-left: 70px;
//         padding-right: 70px;
//         font-family: 'Times New Roman', serif;
//         height: 45px;
//         display: inline-block;
//         font-size: 17px;
//         font-weight: 700;
//         border-radius: 4px;
//     }`}