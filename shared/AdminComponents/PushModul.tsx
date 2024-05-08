import { Box, Button, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function PushModul() {

    
  return (
    <Box className=' bg-pink10 w-1/6 rounded-xl p-4 h-3/5 m-5'>
        <Stack as="ul" className=' w-1/2 flex justify-center'>
            <Button className=' bg-transparent' as="li">
                Dashboard
            </Button>
            <Button as="li">
                <Image width={18} alt='products' height={18} src="/products.svg"/>
                Products
            </Button>
            <Button as="li">
                Restaurants
            </Button>
            <Button as="li">
                Category
            </Button>
            <Button as="li">
                Orders
            </Button>
            <Button as="li">
                Offer
            </Button>
            <Button as="li">
                Logout
            </Button>
        </Stack>

    </Box>
  )
}

export default PushModul