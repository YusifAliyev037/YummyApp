import { Box, Button, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function PushModul() {

    
  return (
    <Box className=' bg-pink10 w-1/6 rounded-xl p-4 h-3/5 m-5'>
        <Box as="ul"  className=' w-1/2  mx-6  '>
            <Button  borderRadius="none" className='flex gap-7 w-40 float-start text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/dashboard.svg"/>
                Dashboard
            </Button>
            <Button borderRadius="none" className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
                <Image width={18} alt='products' height={18} src="/products.svg"/>
                Products
            </Button>
            <Button borderRadius="none" className=' flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/restaurants.svg"/>
                Restaurants
            </Button>
            <Button borderRadius="none" className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/category.svg"/>
                Category
            </Button>
            <Button borderRadius="none" className='flex  gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/orders.svg"/>
                Orders
            </Button>
            <Button borderRadius="none" className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/offer.svg"/>
                Offer
            </Button>
            <Button borderRadius="none"  className='flex gap-7 w-40  text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/logout.svg"/>
                Logout
            </Button>
        </Box>

    </Box>
  )
}

export default PushModul