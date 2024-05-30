import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const CheckoutOr = () => {
  return (
    <Box
      width='1031px'
      height='515px'
      bg='#F3F4F6'
      marginTop='20px'
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        flexDirection='column'
        marginTop='80px'
      >
        <Box display='flex' justifyContent='center' alignItems='center' borderRadius='100px' bg=' #6FCF97;
' width='200px' height='200px'>
          <img
         
            src='/orderCheck.svg'
            alt='image'
          />
        </Box>
        <Box>
          <Text
            fontSize='30px'
            color='#4F4F4F'
          >
            Your order has been <br /> received
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutOr;
