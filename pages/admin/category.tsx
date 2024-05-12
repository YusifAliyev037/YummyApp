import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';
import TableCategory from '@/shared/AdminComponents/TableCategory';
import MetaSeo from '@/shared/MetaSeo';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

function category() {
  let TableNames = ['ID', 'Image', 'Name', 'Slog'];
  let testData = [
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
    {
      Id: 9177,
      Image: '',
      Name: 'Pizza',
      Slog: 'Yummy-pizza',
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
    {
      Id: 9178,
      Image: '',
      Name: 'pizza',
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
    {
      Id: 9178,
      Image: '',
      Name: 'Sendvic',
      Slog: 'Sendvic',
    },
  ];

  return (
    <Box className=' bg-darkBlue10 h-screen p-2'>
      <Box as='header'>
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
      </Box>
      <Box
        as='main'
        className='flex  '
      >
        <PushModul />

        <Box
          as='section'
          className='w-full'
        >
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-5/5 px-8 mt-20 mr-8'
            borderRadius={16}
            height={73}
          >
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
          <Box height={"464px"} overflow={"auto"} className='mr-8'>
         <TableCategory  order={testData} name={TableNames} />
         </Box>
         
        </Box>
      </Box>
    </Box>
  );
};
export default category;
