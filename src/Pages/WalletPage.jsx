import React from 'react';
import { Box, Heading, Grid, GridItem, Button, ChakraProvider, Text, Image, Flex } from '@chakra-ui/react';
import Wallet from "../assets/wallet1.gif"
import { IoReceipt } from 'react-icons/io5';


const WalletPage = () => {
  return (
    <ChakraProvider>
    <Box p={8}>
      <Heading as="h1" mb={3}>Wallet</Heading>
      <Grid  templateColumns="repeat(2, 1fr)" h='fit-content' gap={8}>
        <GridItem  >
          {/* Wallet Summary */}
          <Box h='100%' bg="gray.100" p={8} borderRadius="md">
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
          <Box h='100%' bg="gray.100" p={4} borderRadius="md">
            {/* Additional options */}
            <Heading as="h3" size="md" mb={4}>Options</Heading>
            <Flex justifyContent={'space-between'} h='78%' gap='8'> 
            <Button  h='100%'
                  w='100%'
                  display={'flex'}
                  flexDir={'column'}
                  borderWidth={6}
                  borderStyle='double'
                  borderColor='#51515162'
                  size="sm"
                  _hover={{ boxShadow: 'xl' }}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(0.95)' }}> <IoReceipt style={{width:'100px'}}/> Security Settings</Button>
            <Button h='100%'
                  w='100%'
                  borderWidth={6}
                  borderStyle='double'
                  borderColor='#51515162'
                  size="sm"
                  _hover={{ boxShadow: 'xl' }}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(0.95)' }}>Account Settings</Button>
            <Button h='100%'
                  w='100%'
                  borderWidth={6}
                  borderStyle='double'
                  borderColor='#51515162'
                  size="sm"
                  _hover={{ boxShadow: 'xl' }}
                  _focus={{ outline: 'none' }}
                  _active={{ transform: 'scale(0.95)' }}>Security Settings</Button></Flex>
          </Box>
        </GridItem>
      </Grid>
      <Box h='fit-content' mt='5'  border='1px solid'>
        <Image h='40vh'm='auto' w='100%' src={Wallet} alt="Wallet_Banner"/>
      </Box>
    </Box>
    </ChakraProvider>
  );
};

export default WalletPage;
