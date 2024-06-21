import { translate } from '@/public/lang/translate';
import { Box, Divider, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getBasket } from '../AdminComponents/Services/axios';
import { fillBasket } from '../redux/global/globalSlice';


const BoxCheck2 = () => {

  const dispatch = useDispatch();  
        const router=useRouter()
useEffect(() => {
  const locale = localStorage.getItem('lang') || 'en';
  router.push(router.pathname, router.asPath, { locale });
}, []);


async function fetchBasket() {
  const res = await getBasket();
  dispatch(fillBasket(res?.data.result.data));
}

useEffect(() => {
  fetchBasket();
}, []);

useEffect(()=>{


})

const basketArr = useSelector((state: RootState) => state.global.basket);
console.log(basketArr);

const locale = router.locale || 'en';
  return (
    <Box 
    bg={{ base: "white", md: '#F3F4F6' }}
   mt='20px'
    width='397px'
    height={{ base: "auto  ", md: '372px' }}
gap='10px'
    boxShadow='md'
    borderRadius='md'
    p='9'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems={{ base: 'left', md: 'center' }}
   
    color=' #828282'
    >



<Box  display={{ base: "block", md: "none" }} >
              <Text
                marginBottom="23px"
                fontSize="5xl"
                className="text-color-#4F4F4F"
                color={"black"}
               
              >
                {translate("Checkout", locale)}
              </Text>
            </Box>


 

        <Text textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: '3xl', md: '2xl' }} mb='2'>{translate("Your Order",locale)}</Text>
      
        {basketArr.items.map((item, index) => {
  return (
    <Box key={index} mb='2' w='full' display='flex' justifyContent='space-between'>
      <Text>{item.count}x {item.name}</Text>
      <Text>${item.price}</Text>
    </Box>
  );
})}


       <Divider borderColor='black' my='4'/>
        <Box  m={{ base: "0", md: 'auto' }}     w='full' display='flex' justifyContent='space-between'>
            <Text fontWeight='bold'>{translate("Total",locale)}</Text>
            <Text fontWeight='bold'>{basketArr.total_amount}</Text>

        </Box>

      
    </Box>
  )
}

export default BoxCheck2
