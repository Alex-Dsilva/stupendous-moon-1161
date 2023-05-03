import React from 'react'
import CustomPopover from './CustomPopover'
import { Badge, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const CartNav = () => {
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
                <Box w='300px' h='220px' overflowY='scroll'>
                  <Flex alignItems="center">
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
                  <Flex alignItems="center">
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
                  <Flex alignItems="center">
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
                  <Flex alignItems="center">
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
                  <Flex alignItems="center">
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
                </Box>
                <Flex justifyContent="space-between" mb='2' alignItems="center">
                  <Text>7 Item(s)</Text>
                  <Text fontWeight="bold">₹ 551832.4</Text>
                </Flex>
                <Link to={"cart"}><Button bg='#046381' color='white' border='1px solid #b3b3b3'>View My Cart</Button></Link>
              </Flex>

            </>
          </CustomPopover>
  )
}

export default CartNav