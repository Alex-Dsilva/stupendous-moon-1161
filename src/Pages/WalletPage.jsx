import React from 'react';
import { Box, Heading, Grid, GridItem, Button, ChakraProvider, Text, Image, Flex } from '@chakra-ui/react';
import Wallet from "../assets/wallet1.gif"
import { IoReceipt } from 'react-icons/io5';
import { RiCoupon3Fill } from 'react-icons/ri';
import { FaQuestionCircle } from 'react-icons/fa';


const WalletPage = () => {
  return (
    <ChakraProvider>
    <Box p={8} maxW='100vw'>
      <Heading as="h1" mb={3}>Wallet</Heading>
      <Grid w='100%' templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} h='fit-content' gap={8}>
        <GridItem  >
          {/* Wallet Summary */}
          <Box h='100%' w={{base:"88vw", lg:'100%'}} bg="gray.100" p={8} borderRadius="md">
            {/* Display wallet balance */}
            <Text>Your available Wallet Balance </Text>
            <Heading as="h2" size="lg" mb={4}>$500.00</Heading>
            {/* Quick action buttons */}
            <Flex gap='5'>
            <Button colorScheme="blue" size="sm" mb={2}>Add Funds</Button>
            <Button colorScheme="green" size="sm">Withdraw Funds</Button>
            </Flex>
          </Box>
        </GridItem>

        {/* Side Panel */}
        <GridItem>
          <Box h='100%' w={{base:"88vw", lg:'100%'}}  bg="gray.100" p={4} borderRadius="md" >
            {/* Additional options */}
            <Heading as="h3" size="md" mb={4}>Options</Heading>
            <Flex justifyContent={'space-between'} flexDir={{base:"row",md:"row", lg:"row"}} h='78%' gap='8'> 
            <Button  h='100%'
                  w='100%'
                  mb='5'
                  display={{base:"none", md:'flex'}}
                  gap='2'
                  flexDir={'column'}
                  borderWidth={6}
                  borderStyle='double'
                  borderColor='#51515162'
                  size="sm"
                  _hover={{ boxShadow: 'xl' }}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(0.95)' }}> <IoReceipt style={{width:'100px', height:'35px'}}/>Transactions</Button>
            <Button h='100%'
                  w='100%'
                  mb='5'
                  borderWidth={6}
                  borderStyle='double'
                  borderColor='#51515162'
                  size="sm"
                  display={'flex'}
                  gap='2'
                  flexDir={'column'}
                  _hover={{ boxShadow: 'xl' }}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(0.95)' }}><RiCoupon3Fill style={{width:'100px', height:'35px'}}/> Coupons</Button>
            <Button h='100%'
                  w='100%'
                  mb='5'
                  borderWidth={6}
                  borderStyle='double'
                  borderColor='#51515162'
                  size="sm"
                  display={'flex'}
                  gap='2'
                  flexDir={'column'}
                  _hover={{ boxShadow: 'xl' }}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(0.95)' }}> <FaQuestionCircle style={{width:'100px', height:'35px'}}/> Help and FAQs</Button></Flex>
          </Box>
        </GridItem>
      </Grid>
        
    </Box>
    </ChakraProvider>
  );
};

export default WalletPage;
