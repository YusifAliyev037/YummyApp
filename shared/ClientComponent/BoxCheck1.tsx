import { Box, Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import BoxCheck2 from './BoxCheck2';
import CheckoutOr from './CheckoutOr';

const BoxCheck1 = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [showCheckoutOr, setShowCheckoutOr] = useState(false);

  const toggleCheck1 = () => setIsChecked1(!isChecked1);
  const toggleCheck2 = () => setIsChecked2(!isChecked2);
const handleCheckout=()=>{
  setShowCheckoutOr(true)
}
 
  return (
    
    <Box className='flex' gap='19px' flexDirection='row-reverse'>
 {!showCheckoutOr ? (
         <>
         
      <Box>

        <BoxCheck2/>
      </Box>
<Box
      className='flex flex-col  mt-4  bg-white40'
      width='618px'
      height='515px'
    >

      

      <Box className='ml-10 mt-10 ' >
        <Text marginBottom='23px'  fontSize='3xl' className=' text-color-#4F4F4F'>Checkout</Text>
      </Box>
     
      <Box className='flex justify-center' >
        <Box>
          <Box>
            <Text  className='text-color-#4F4F4F'>Delivery Address</Text>
            <Input
              width='542px'
              height='53px'
              bg='white'
              type='text'
              placeholder='Ataturk 45,Genclik Baku'
              marginBottom='26px'
            />
          </Box>
          <Box >
            <Text marginBottom='11px' className='text-color-#4F4F4F'>Contact Number</Text>
            <Input
            
              width='542px'
              height='53px'
              bg='white'
              type='number'
              placeholder='+994'
              marginBottom='25px'
            />
          </Box>
          <Box>
            <Box>
              <Text marginBottom='21px' className='text-color-#4F4F4F'>Payment Method</Text>
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
                bg={isChecked1 ? '#ffff' : 'white'}
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
              
                  <Text color=' #6FCF97;' marginEnd='auto' width='112px' height='21px'>pay at the door</Text>

              
                <Box
                width='33px'
                height='33px'
                borderRadius='full'
                bg={isChecked2 ? '#ffff'  : 'white'}
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
               <Text >pay at the door by credit card</Text>
            </Box>
            <Button
              marginTop='32px'
              width='542px'
              height='53px'
              bg='#6FCF97'
              textColor='white'
            onClick={handleCheckout}
            >
              Checkout
            </Button>
        
          </Box>
         
        </Box>
      </Box>
    
      
     
    </Box>
    </>
     ) : (
      <CheckoutOr />
    )}
    </Box>
  );
};

export default BoxCheck1;
