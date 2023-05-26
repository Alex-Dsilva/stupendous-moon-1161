import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const OrderPlacedPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Order Placed Successfully!
      </Text>
      <Text fontSize="lg" mb={8}>
        Thank you for your order. Your order has been successfully placed.
      </Text>
      <Button colorScheme="teal" size="lg">
        Continue Shopping
      </Button>
    </Box>
  );
};

export default OrderPlacedPage;