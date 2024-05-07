import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <Box className='flex justify-between bg-darkBlue20 py-3 pl-5 pr-4 h-16 mx-6 rounded-b-xl'>
      <Box>
        <Text className='font-extrabold text-[28px] text-white10' as="h1">
          Yummy    
          <span className='text-orange'>
            .
          </span> 
        </Text> 
      </Box>
      
      <Box className='flex gap-5 items-center'>
        <Button borderRadius="20px" colorScheme='pink' className='text-white10'>+ ADD PRODUCT</Button>
        <Box>
          <Image width={41} height={41} src="/englishlang.svg" alt="English Language" />
        </Box>
        <Box>
          <Image width={41} height={41} src="/user.png" alt="English Language" />

        </Box>
        <Box>
            <Text className='text-white10'>
                Admin
            </Text>
        </Box>
      </Box> 
    </Box>
  );
}

export default Header;
