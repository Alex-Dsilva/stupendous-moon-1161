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
    dispatch(getCart(userId))

  }, [userId])

  if (!isLoading) {
    console.log(carts)
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
              {0}
            </Badge>
          </Box>
        )}
      </Box>)}
      height='fit-content'>
      <>
        <Flex className="cart_full" direction="column" justifyContent="space-between">
          {userId? (<><Box w='300px' h='220px' overflowY='scroll'>
            {isLoading ? (
              <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6} p="20px">
                {Array.from({ length: 10 }, (_, i) => (
                  <Flex key={i} alignItems="center">
                  <Skeleton boxSize="100px" >
                    <Image boxSize="100px" objectFit="contain" mr={4} />
                  </Skeleton>
                  <Flex direction="column" justifyContent="space-between">
                    <SkeletonText height="20px" />
                    <SkeletonText height="20px"/>
                    <SkeletonText height="20px"/>
                  </Flex>
                  </Flex>
                ))}
              </Grid>
            ) : (
              <>
                {carts.length > 0 ? (
                  <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={3} p="25px" >
                    {carts.map((product, i) => {
                      return (
                        <>
                          <Flex key={i} alignItems="center">
                            <Image src="//img.gkbcdn.com/p/2022-09-09/DUOTTS-C29-Electric-Bike-750W-Mountain-Bike-516948-0._w280_.jpg" alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                            <Flex direction="column" justifyContent="space-between">
                              <Text fontSize="sm" fontWeight="500">
                                DUOTTS C29 Electric Bike 29 Inch 750W Mountain Bike
                              </Text>
                              <Flex alignItems="center">
                                <Text mr={2}>₹ 78833.20</Text>
                                <Text>X7</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                          <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                        </>
                      )
                    })}
                  </Grid>
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
            <Text>7 Item(s)</Text>
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