
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CheckoutOr = () => {
  return (
    <Box
      width='1031px'
      height='515px'
      bg='#F3F4F6'
      display='flex'
      alignItems='center'
      justifyContent='center'
 marginTop='20px'
    >
        <Box  >
            <img src="/orderCheck.svg" alt="image" />
        </Box>
      <Text fontSize='xl' color='#4F4F4F'>Your order has been received</Text>
    </Box>
  );
}

export default CheckoutOr;