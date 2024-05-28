import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const BoxCheck2 = () => {
  return (
    <Box 
    color='#F3F4F6'
   mt='20px'
    width='397px'
    height='372px'
    bg='white'
    boxShadow='md'
    borderRadius='md'
    p='4'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    textAlign='center'
    >
        <Text color='red' fontSize='2xl' mb='2'>Your Order</Text>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text color='red'>1x papa john's pizza restaurant</Text>
<Text color='red'>$11</Text>
        </Box>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text color='red'>2x papa john's pizza restaurant</Text>
<Text color='red'>$6</Text>
        </Box>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text color='red'>1x papa john's pizza restaurant</Text>
<Text color='red'>$11</Text>
        </Box>
       
        <Box color='red' m='auto' w='full' display='flex' justifyContent='space-between'>
            <Text fontWeight='bold'>Total</Text>
            <Text fontWeight='bold'>$17</Text>

        </Box>

      
    </Box>
  )
}

export default BoxCheck2
