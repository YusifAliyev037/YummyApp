import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <Box className='flex justify-between fixed top-0 left-0 right-0 z-10 bg-darkBlue20 py-3 pl-5 pr-4  h-16 mx-6 rounded-b-xl '>
      <Box>
        <Text className='font-extrabold text-[28px] text-white10' as="h1">
          Yummy    
          <span className='text-orange'>
            .
          </span> 
        </Text> 
      </Box>
      
      <Box className='flex gap-5 items-center'>
        <Button size="xs" borderRadius="20px" colorScheme='pink' className='text-white10' style={{ boxShadow: '0px 4px 4px 0px rgba(39, 174, 96, 0.2)' }}>+ ADD PRODUCT</Button>
        <Box>
          <Image width={41} height={41} src="/eng.svg" alt="English Language" />
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
