import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';
import TableCategory from '@/shared/AdminComponents/TableCategory';
import MetaSeo from '@/shared/MetaSeo';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

function Category() {
  const tableNames = ['ID', 'Image', 'Name', 'Slog'];

  const testData = [
    {
      Id: 9177,
      Image: '',
      Name: 'Pizza',
      Slog: 'Yummy-Pizza',
    },
    {
      Id: 9178,
      Image: '',
      Name: 'Sendvic',
      Slog: 'Sendvic',
    },
    {
      Id: 9178,
      Image: '',
      Name: 'Fries',
      Slog: 'Fries',
    },
  ];

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
      <Box className='flex'>
        <PushModul />
        <Box className='w-full'>
          <Box className='bg-darkBlue10 flex items-center mb-12 w-full px-8 mt-20 mr-8 rounded-lg h-16'>
            <Text color='white'>Category</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Box>
                <Button
                  borderRadius={14}
                  colorScheme='pink'
                >
                  + ADD RESTAURANTS
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box
            height={'464px'}
            overflow={'auto'}
            className='mr-8'
          >
            <TableCategory
              order={testData}
              name={tableNames}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Category;
