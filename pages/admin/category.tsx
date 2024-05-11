import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';
import TableForOrder from '@/shared/AdminComponents/Table';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import React from 'react';

function category() {
  let TableNames = [
    'ID',
    'Image',
    'Name',
    'Slog',
  
  ];
  let testData = [
    {
      Id: 9177,
      Image: '',
      Name: 'Pizza',
      Slog: 'Yummy Pizza',
     
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
      Name: 'Sendvic',
      Slog: 'Sendvic',
    
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
      Name: 'Sendvic',
      Slog: 'Sendvic',
    
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
      Name: 'Sendvic',
      Slog: 'Sendvic',
    
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
      Name: 'Sendvic',
      Slog: 'Sendvic',
    
    },
    {
      Id: 9178,
      Image: '',
      Name: 'Sendvic',
      Slog: 'Sendvic',
    
    },

 
  ];

  return (
    <div className='bg-darkBlue10 h-screen'>
      <Header />
      <Box display='flex'>
        <PushModul />

        <Box>
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-5/5 px-8 mt-20'
            borderRadius={16}
            height={73}
          >
            <Text color='white'>Restaurants</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Box>
                <Button borderRadius={14} colorScheme='pink'>
                  + ADD RESTAURANTS
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box height={'464px'} overflow={'auto'}>
          <TableForOrder order={testData} name={TableNames} />

          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default category;
