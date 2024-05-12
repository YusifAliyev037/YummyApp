import React from 'react';
import { Box, Button, InputGroup, Text } from '@chakra-ui/react';
import Header from '@/shared/AdminComponents/Header';
import PushModul from '@/shared/AdminComponents/PushModul';


interface Order {
  Id: number;
  Image: string;
  Name: string;
  Slog: string;
}

const Category: React.FC = () => {
  const TableNames: string[] = ['ID', 'Image', 'Name', 'Slog'];

  const testData: Order[] = [
    { Id: 9177, Image: '', Name: 'Pizza', Slog: 'Yummy Pizza' },
    { Id: 9178, Image: '', Name: 'Sendvic', Slog: 'Sendvic' },
    // Diğer testData örnekleri...
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
            <TableForOrder order={testData} names={TableNames} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Category;
