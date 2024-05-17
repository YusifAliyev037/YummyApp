import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';
import TableCategory from '@/shared/AdminComponents/TableCategory';
import MetaSeo from '@/shared/MetaSeo';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

function Category() {
 
  const customIds = Array.from({ length: 10 }, (_, i) => i);
 

  return (
    <Box className='bg-darkBlue10 h-screen p-2'>
      <Head>
        <title>Category</title>
        <MetaSeo
          title='Category'
          desc='Category Page'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <Box as='main' className='flex'>
        <PushModul />
        <Box className='w-full mr-8'>
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-full px-8 mt-20 rounded-lg h-16 '
          >
            <Text color='white'>Category</Text>
            <InputGroup className='flex justify-end  items-center gap-7'>
              <Button borderRadius={14} colorScheme='pink'>
                + ADD CATEGORY
              </Button>
            </InputGroup>
          </Box>
          <Box height={'464px'} overflow={'auto'} >
            <TableCategory customIds={customIds}  />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Category;
