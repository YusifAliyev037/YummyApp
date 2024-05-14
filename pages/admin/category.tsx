import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';
import TableCategory from '@/shared/AdminComponents/TableCategory';
import MetaSeo from '@/shared/MetaSeo';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

function Category() {
  const TableNames = [
    'ID',
    'Image',
    'Name',
    'Slog',
  ];

  const testData = [
    {
      Id: 9177,
      Image: 'https://media-cdn.tripadvisor.com/media/photo-s/19/1e/1a/3a/pizza-hut.jpg',
      Name: 'Pizza',
      Slog: 'Yummy-Pizza',
    },
    {
      Id: 9178,
      Image: 'https://static.1000.menu/img/content-v2/af/5d/38399/sendvich-s-vetchinoi_1616239118_15_max.jpg',
      Name: 'Sendvic',
      Slog: 'Sendvic',
    },
    {
      Id: 9178,
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjoSVNB_BEyjWqN8umQJmSReK4nHHG7Vg_goGSBzE-w&s',
      Name: 'Fries',
      Slog: 'Fries',
    },
    {
      Id: 9177,
      Image: 'https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg',
      Name: 'Pizza',
      Slog: 'Yummy-pizza',
    },
    {
      Id: 9178,
      Image: 'https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg',
      Name: 'Sendvic',
      Slog: 'Sendvic',
    },
    {
      Id: 9178,
      Image: 'https://img.taste.com.au/ol2Jq8ZQ/taste/2016/11/rachel-87711-2.jpeg',
      Name: 'Fires',
      Slog: 'Fires',
    },
    {
      Id: 9178,
      Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZpPaGzAGR1cB1IL0KZd3cg6G6Jv7tHyyFKKoEHEQbQ&s',
      Name: 'Pizza',
      Slog: 'Yummu-Pizza',
    },
    {
      Id: 9178,
      Image: 'https://www.kudaeda.su/d/0457451.jpg',
      Name: 'Sendvic',
      Slog: 'Sendvic',
    },
    {
      Id: 9178,
      Image: 'https://theeburgerdude.com/wp-content/uploads/2023/08/McDons-Fries-1-scaled.jpg',
      Name: 'Fires',
      Slog: 'Fires',
    },
    {
      Id: 9178,
      Image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Sandwich.jpg',
      Name: 'Sendvic',
      Slog: 'Sendvic',
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
                + ADD RESTAURANTS
              </Button>
            </InputGroup>
          </Box>
          <Box height={'464px'} overflow={'auto'} >
            <TableCategory  />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Category;
