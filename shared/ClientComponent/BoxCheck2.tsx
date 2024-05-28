import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'

const BoxCheck2 = () => {
  return (
    <Box 
    bg='#F3F4F6'
   mt='20px'
    width='397px'
    height='372px'

    boxShadow='md'
    borderRadius='md'
    p='4'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    textAlign='center'
    >
        <Text  fontSize='2xl' mb='2'>Your Order</Text>
      
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text >1x papa john's pizza restaurant</Text>
<Text >$11</Text>
        </Box>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text >2x papa Caffee</Text>
<Text >$6</Text>
        </Box>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text>2x Coca-cola</Text>
<Text >$11</Text>

        </Box>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text >2x papa Caffee</Text>
<Text >$6</Text>
        </Box>
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text >1x papa john's pizza restaurant</Text>
<Text >$11</Text>
        </Box>
       <Divider borderColor='black' my='4'/>
        <Box  m='auto' w='full' display='flex' justifyContent='space-between'>
            <Text fontWeight='bold'>Total</Text>
            <Text fontWeight='bold'>$17</Text>

        </Box>

      
    </Box>
  )
}

export default BoxCheck2
