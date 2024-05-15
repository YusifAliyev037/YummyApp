import AdminModal from '@/shared/AdminComponents/AdminModal';
import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';
import OfferInputs from '@/shared/AdminComponents/Services/OfferInputs';

import TableCategory from '@/shared/AdminComponents/TableCategory';
import MetaSeo from '@/shared/MetaSeo';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';

interface TestData {
  Id: number;
  Image: string;
  Name: string;
  Slog: string;
}

const Offer: React.FC = () => {
  const TableNames: string[] = ['ID', 'Image', 'Title', 'Descriptions'];
  const testData: TestData[] = [
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

  const[hidden,Sethidden]=useState(true)

  return (
    <Box className=' bg-darkBlue10 h-screen  z-5'>
      <AdminModal hidden={hidden} Sethidden={Sethidden} addName={"Add Offer"} imgName={"Upload  image"} informationName={"Add your Offer information"} component={<OfferInputs/>} />
      <Box as='header'>
        <Head>
          <title>Offer</title>
          <MetaSeo title="Offer" desc="Offer Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </Box>
      <Box as='main' className='flex'>
        <PushModul />
        <Box as='section' className='w-full'>
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-5/5 px-8 mt-20 mr-8'
            borderRadius={16}
            height={73}
          >
            
            <Text color='white'>Offer</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Box>
                <Button
                  borderRadius={14}
                  colorScheme='pink'
                  onClick={() => Sethidden(prev => !prev)}
                >
                  + ADD RESTAURANTS
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box height={"464px"} overflow={"auto"} className='mr-8'>
            {/* <TableCategory order={testData} name={TableNames} /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;
