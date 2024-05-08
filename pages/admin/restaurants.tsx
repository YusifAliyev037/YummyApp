import React from 'react';
import Header from '@/shared/AdminComponents/Header';
import {
  InputGroup,
  Button,
  Select,
  Text,
  Box,
  InputRightElement,
} from '@chakra-ui/react';
import PushModul from '@/shared/AdminComponents/PushModul';

const Restaurants = () => {
  return (
    <Box
      className='bg-darkBlue10'
      minHeight='100vh'
    >
      <Header />

      <Box className='flex my-4 mx-8'>
        <PushModul />

        <Box
          bg='#27283C'

          className='flex items-center w-5/6 px-8 '
          borderRadius={16}
          height={73}
        >
          <Text color='white'>Restaurants</Text>
          <InputGroup
            // display='flex'
            // justifyContent='flex-end'
            // alignItems='center'
            className='flex justify-end items-center gap-7'
          >
            <Select
              bgColor='#5A5B70'
              borderRadius={20}
              width={200}
              height={35}
              placeholder='Select category'
              mr='2'
            >
              <option value='Papa Johns'>Papa John's</option>
              <option value='Burger King'>Burger King</option>
              <option value='Mcdonalds'>McDonald's</option>
            </Select>
            <Box>
              <Button
                borderRadius={20}
                colorScheme='pink'
              >
                + ADD RESTAURANTS
              </Button>
            </Box>
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurants;
