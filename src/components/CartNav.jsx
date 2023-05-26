import React, { useEffect } from 'react'
import CustomPopover from './CustomPopover'
import { Badge, Box, Button, Divider, Flex, Grid, Image, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import { IoCartOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../redux/App/AppAction'

import Emptycart from '../assets/Emptycart.jpg'
import Login from '../assets/Login.jpg'

const CartNav = () => {
  const { userId } = useSelector(store => store.Authreducer);
  const { carts, isLoading, isError, errorMsg } = useSelector(state => state.Appreducer);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(userId){
    dispatch(getCart(userId))
    }
  }, [userId])

  if (!isLoading) {
    console.log(carts)
  }

  const handleClick=(id)=>{
    navigate(`/singleproduct${id}`)
  }


  return (
    <CustomPopover
      trigger={(<Box
        size="sm"
        variant="ghost"
        colorscheme="blue"
        position="relative"
        display={["none", "none", "flex"]}
      >
        <IoCartOutline size={20} style={{ height: '25px', width: '25px', color: 'white' }} />
        {1 > 0 && (
          <Box position="absolute" top="-12px" right="-6px">
            <Badge borderRadius="full" fontSize='10' variant="solid" colorScheme="red">
              {carts.length}
            </Badge>
          </Box>
        )}
      </Box>)}
      height='fit-content'>
      <>
        <Flex className="cart_full" direction="column" justifyContent="space-between">
          {userId? (<><Box w='300px' h='220px' overflowY='scroll'>
            {isLoading ? (
              <Flex flexDir={'column'} gap={6} p="20px">
                {Array.from({ length: 10 }, (_, i) => (
                  <Flex key={i+1} w='100%' alignItems="center">
                  <Skeleton boxSize="100px" maxW={'100px'} >
                    <Image boxSize="100px" objectFit="contain" mr={4} />
                  </Skeleton>
                  <Flex flexDir={'column'} gap='1' justify={'center'} ml='2' w='100%' h='100px' >
                      <Skeleton height='0.7rem' w='90%' />
                      <Skeleton height='0.7rem' w='90%' />
                      <Skeleton height='0.7rem' w='90%' />
                      <Skeleton height='0.7rem' w='90%' />
                      <Skeleton height='0.7rem' w='70%' />
                  </Flex>
                  </Flex>
                ))}
              </Flex>
            ) : (
              <>
                {carts.length > 0 ? (
                  <Flex flexDir={'column'} gap={3} p="25px" >
                    {carts.map((product, i) => {
                      return (
                        <Box key={i+1}>
                          <Flex key={i+1} alignItems="center" onClick={()=>handleClick(product.product._id)}>
                            <Image src={product.product.images[0]} alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                            <Flex direction="column" justifyContent="space-between">
                              <Text fontSize="xs" noOfLines={2} fontWeight="500">
                                { product.product.name}
                              </Text>
                              <Text fontSize="xs"  mr={2}>₹ {product.product.price}</Text>
                              <Text fontSize="xs"  mr={2}>Qty : {product.quantity}</Text>
                            </Flex>
                          </Flex>
                          <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                        </Box>
                      )
                    })}
                  </Flex>
                ) : (
                  <Flex flexDir='column' gap='5' align='center' mb='10rem' justify='center' >
                    <Image src={Emptycart} w='50%' alt="No products found" />
                    <Text as='b' size='xs'>Cart is Empty </Text>
                  </Flex>
                )}
              </>
            )}
          </Box>
          <Flex justifyContent="space-between" mb='2' m='auto' w='90%' p='1' alignItems="center">
            <Text>{carts.length} Item(s)</Text>
            <Text fontWeight="bold">₹ 551832.4</Text>
          </Flex>
          <Link to={"cart"}><Button bg='#046381' w='100%' color='white' border='1px solid #b3b3b3'>View My Cart</Button></Link></>):(<Flex  w='300px' h='20rem' flexDir='column' gap='5' align='center' justify='center' >
                    <Image src={Login} w='50%' alt="No products found" />
                    <Text as='b' size='xs'>Please Login</Text>
                    <Link to='/login'><Button cursor='pointer' w='7.5rem' h='35px' bg='#046381' color='white' >Join</Button></Link>
                  </Flex>)}
        </Flex>

      </>
    </CustomPopover>
  )
}

export default CartNav