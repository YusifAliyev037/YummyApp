import { Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function PushModul() {
    const {push} = useRouter()

    
  return (
    <Box className=' mt-20 bg-pink10 w-1/6 rounded-xl h-96 p-4  m-5'>
        <Box as="ul"  className=' w-1/2  mx-6  '>
            <Button onClick={()=> push("/admin")}  borderRadius="none" className='flex gap-7 w-40 float-start text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/dashboard.svg"/>
                Dashboard
            </Button>
            <Button onClick={()=> push("/admin/products")} borderRadius="none" className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
                <Image width={18} alt='products' height={18} src="/products.svg"/>
                Products
            </Button>
            <Button onClick={()=> push("/admin/restaurants")} borderRadius="none" className=' flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/restaurants.svg"/>
                Restaurants
            </Button>
            <Button onClick={()=> push("/admin/category")} borderRadius="none" className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/category.svg"/>
                Category
            </Button>
            <Button onClick={()=> push("/admin/orders")} borderRadius="none" className='flex  gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/orders.svg"/>
                Orders
            </Button>
            <Button onClick={()=> push("/admin/offer")} borderRadius="none" className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/offer.svg"/>
                Offer
            </Button>
            <Button onClick={()=> push("/admin/login")} borderRadius="none"  className='flex gap-7 w-40  text-pink20 cursor-pointer hover:bg-pink30' colorScheme='none' as="li">
            <Image width={18} alt='products' height={18} src="/logout.svg"/>
                Logout
            </Button>
        </Box>

    </Box>
  )
}

export default PushModul