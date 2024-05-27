import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const BoxCheck1 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const toggleCheck1 = () => setIsChecked1(!isChecked1);
  const toggleCheck2 = () => setIsChecked2(!isChecked2);
  return (
    <Box
      className='flex flex-col  mt-4 mr-8   gap-9  bg-white40'
      width='618px'
      height='515px'
    >
      <Box className='ml-12 mt-10 '>
        <Text className='w-40 h-8 text-color-#4F4F4F'>Checkout</Text>
      </Box>
      <Box></Box>
      <Box className='flex justify-center'>
        <Box ml='4'>
          <Box>
            <Text className='text-color-#4F4F4F'>Delivery Address</Text>
            <Input
              width='542px'
              height='53px'
              bg='white'
              type='text'
              placeholder='Ataturk 45,Genclik Baku'
            />
          </Box>
          <Box marginTop='7px'>
            <Text className='text-color-#4F4F4F'>Contact Number</Text>
            <Input
              width='542px'
              height='53px'
              bg='white'
              type='number'
              placeholder='+994'
            />
          </Box>
          <Box>
            <Box>
              <Text className='text-color-#4F4F4F'>Payment Method</Text>
            </Box>
            <Box
              display='flex'
              alignItems='center'
              gap='7px'
              
            >
              <Box
                width='33px'
                height='33px'
                borderRadius='full'
                bg={isChecked1 ? '#6FCF97' : 'white'}
                borderWidth='1px'
                borderColor={isChecked1 ? '#6FCF97' : '#BDBDBD'}
                onClick={toggleCheck1}
                cursor='pointer'
                display='flex'
                alignItems='center'
                justifyContent='center'

              >      {isChecked1 && (
                  <Box
                    width='15px'
                    height='15px'
                    borderRadius='full'
                    bg='#6FCF97'
                  />
                )}
                </Box>
              
                  <Text marginEnd='auto'>pay at the door</Text>
              
                <Box
                width='33px'
                height='33px'
                borderRadius='full'
                bg={isChecked2 ? '#6FCF97' : 'white'}
                borderWidth='1px'
                borderColor={isChecked2?'#6FCF97' : '#BDBDBD'}
                onClick={toggleCheck2}
                cursor='pointer'
                display='flex'
                alignItems='center'
                justifyContent='center'

                >
                      {isChecked2 && (
                  <Box
                    width='15px'
                    height='15px'
                    borderRadius='full'
                    bg='#6FCF97'
                  />
                )}

                </Box>
               <Text>pay at the door by credit card</Text>
            </Box>
            <Button
              marginTop='32px'
              width='542px'
              height='53px'
              bg='#6FCF97'
              textColor='white'
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxCheck1;
