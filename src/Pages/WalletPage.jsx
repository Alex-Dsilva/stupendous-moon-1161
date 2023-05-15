import React from 'react';
import { Box, Heading, Grid, GridItem, Button } from '@chakra-ui/react';

const WalletPage = () => {
  return (
    <Box p={8}>
      <Heading as="h1" mb={8}>Wallet</Heading>
      <Grid templateColumns="1fr 300px" gap={8}>
        <GridItem>
          {/* Wallet Summary */}
          <Box bg="gray.100" p={4} borderRadius="md">
            {/* Display wallet balance */}
            <Heading as="h2" size="lg" mb={4}>$500.00</Heading>
            {/* Quick action buttons */}
            <Button colorScheme="blue" size="sm" mb={2}>Add Funds</Button>
            <Button colorScheme="green" size="sm">Withdraw Funds</Button>
          </Box>

          {/* Transaction History */}
          <Box mt={8} bg="white" borderRadius="md">
            {/* Transaction history table */}
            <table>
              {/* Table headers */}
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Reference</th>
                </tr>
              </thead>
              {/* Table rows */}
              <tbody>
                <tr>
                  <td>2023-05-15</td>
                  <td>Deposit</td>
                  <td>$100.00</td>
                  <td>123456789</td>
                </tr>
                {/* More transaction rows */}
              </tbody>
            </table>
          </Box>
        </GridItem>

        {/* Side Panel */}
        <GridItem>
          <Box bg="gray.100" p={4} borderRadius="md">
            {/* Additional options */}
            <Heading as="h3" size="md" mb={4}>Options</Heading>
            <Button colorScheme="purple" size="sm" mb={2}>Account Settings</Button>
            <Button colorScheme="teal" size="sm">Security Settings</Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default WalletPage;
