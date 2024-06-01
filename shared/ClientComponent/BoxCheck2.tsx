import { translate } from '@/public/lang/translate';
import { Box, Divider, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const BoxCheck2 = () => {
        const router=useRouter()
useEffect(() => {
  const locale = localStorage.getItem('lang') || 'en';
  router.push(router.pathname, router.asPath, { locale });
}, []);

const locale = router.locale || 'en';
  return (
    <Box 
    bg='#F3F4F6'
   mt='20px'
    width='397px'
    height='372px'
gap='10px'
    boxShadow='md'
    borderRadius='md'
    p='9'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    textAlign='center'
    color=' #828282'
    >
        <Text  fontSize='2xl' mb='2'>{translate("Your Order",locale)}</Text>
      
        <Box mb='2' w='full' display='flex' justifyContent='space-between'>
<Text 
 >1x papa john's pizza restaurant</Text>
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
            <Text fontWeight='bold'>{translate("Total",locale)}</Text>
            <Text fontWeight='bold'>$17</Text>

        </Box>

      
    </Box>
  )
}

export default BoxCheck2
