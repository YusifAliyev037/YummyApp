import Header from '@/shared/AdminComponents/Header';
import {
  InputGroup,
  Button,
  Select,
  Text,
  Box,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';

const Restaurants = () => {
  return (
    <Box
      bg='#27283C'
      minHeight='100vh'
      display='flex'
      flexDirection='column'
    >
      <Header />
      <Box
        display='flex'
        justifyContent='flex-end'
        p='10'
      >
        <Box
          bg='#27283C'
          borderWidth='0.5px'
          borderRadius={16}
          top={80}
          width={1108}
          height={73}
        >
          <Text color='white'>Restaurants</Text>
          <InputGroup
            display='flex'
            justifyContent='flex-end'
            alignItems='center'
          >
            <Select
              bgColor='#5A5B70'
              borderRadius={20}
              width={200}
              height={35}
              placeholder='Select category'
              mr='2'
            >
              <option value='breakfast'>Breakfast</option>
              <option value='lunch'>Lunch</option>
              <option value='dinner'>Dinner</option>
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
