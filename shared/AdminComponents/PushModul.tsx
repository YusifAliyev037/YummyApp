import { Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

function PushModul() {
    const {push, asPath} = useRouter();

    const isActive = (path:string) =>(asPath === path ? "#d25ff5" : "none")

    
  return (
    <Box className=' mt-20 bg-pink10 w-1/6 rounded-xl h-96 p-4  m-5'>
        <Box as="ul"  className=' w-1/2  mx-6  '>
            <Button
             onClick={()=> push("/admin")}  
             className='flex gap-7 w-40 float-start text-pink20 cursor-pointer hover:bg-pink30' 
             colorScheme='none' 
             style={{ backgroundColor: isActive("/admin") }} 
             as="li">
            <Image width={18} alt='products' height={18} src="/dashboard.svg"/>
                Dashboard
            </Button>
            <Button 
            onClick={()=> push("/admin/products")} 
            style={{ backgroundColor: isActive("/admin/products") }} 
            className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' 
            colorScheme='none' 
            as="li">
                <Image width={18} alt='products' height={18} src="/products.svg"/>
                Products
            </Button>
            <Button
             onClick={()=> push("/admin/restaurants")} 
             style={{ backgroundColor: isActive("/admin/restaurants") }} 
             className=' flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' 
             colorScheme='none' 
             as="li">
            <Image width={18} alt='products' height={18} src="/restaurants.svg"/>
                Restaurants
            </Button>
            <Button
             style={{ backgroundColor: isActive("/admin/category") }} 
             onClick={()=> push("/admin/category")} 
             className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' 
             colorScheme='none' 
             as="li">
            <Image width={18} alt='products' height={18} src="/category.svg"/>
                Category
            </Button>
            <Button
             style={{ backgroundColor: isActive("/admin/orders") }} 
             onClick={()=> push("/admin/orders")} 
             className='flex  gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' 
             colorScheme='none' 
             as="li">
            <Image width={18} alt='products' height={18} src="/orders.svg"/>
                Orders
            </Button>
            <Button
             style={{ backgroundColor: isActive("/admin/offer") }} 
             onClick={()=> push("/admin/offer")} 
             className='flex gap-7 w-40 text-pink20 cursor-pointer hover:bg-pink30' 
             colorScheme='none'
             as="li">
            <Image width={18} alt='products' height={18} src="/offer.svg"/>
                Offer
            </Button>
            <Button
             style={{ backgroundColor: isActive("/admin/login") }} 
             onClick={()=> push("/admin/login")} 
             className='flex gap-7 w-40  text-pink20 cursor-pointer hover:bg-pink30' 
             colorScheme='none' 
             as="li">
            <Image width={18} alt='products' height={18} src="/logout.svg"/>
                Logout
            </Button>
        </Box>

    </Box>
  )
}

export default PushModul