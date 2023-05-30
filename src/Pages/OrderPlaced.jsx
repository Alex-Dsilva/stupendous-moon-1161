import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const OrderPlacedPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Image borderRadius={'100px'} w='100px' src={"https://media0.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.gif?cid=ecf05e47vy6i9lult7idfbhf3fxitnhbe03upvh6on8rsp2s&ep=v1_gifs_related&rid=giphy.gif&ct=g"} alt="Order Placed" />
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Order Placed Successfully!
      </Text>
      <Text fontSize="lg" mb={8} textAlign={'center'}>
        Thank you for your order. Your order has been successfully placed.
      </Text>
      <Link to='/products/new/newarrival'><Text colorScheme="teal" mt={8} textDecoration="underline" size="lg">
          Continue Shopping
        </Text></Link>
      </Box>
    );
};

export default OrderPlacedPage;