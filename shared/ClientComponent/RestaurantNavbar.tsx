import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

function RestaurantNavbar() {
    const { push, asPath } = useRouter();

    const isActive = (path: string) => (asPath === path ? '#FFB5A5' : 'none');
  
    return (
      <Box
        as='section'
        className='bg-white40 rounded-xl p-5 m-7 mt-4 '
        width='250px'
        height='515px'
      >
        <Box as='ul' className='flex flex-col mt-8'>
          <Box mb='32px'>
          <Button
            className='flex gap-7 w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52'
            color='text-redUserModul'
            style={{
              justifyContent: 'flex-start',
              backgroundColor: isActive('/user'),
            }}
            as='li'
          >
            <Image width={18} alt='profile' height={18} src='/profile.svg' />
            Profile
          </Button>
          </Box>
          <Box mb='32px'>
          <Button
            className='flex gap-7 w-52 text-userText justify-start cursor-pointer hover:bg-redUserModul10 hover:w-52'
            color='text-userText'
            style={{
              justifyContent: 'flex-start',
              backgroundColor: isActive('/user/basket'),
            }}
            as='li'
          >
            <Image width={18} alt='basket' height={18} src='/basket.svg' />
            Your Basket
          </Button>
          </Box>
          <Box mb='32px'>
          <Button
            className='flex gap-7 ju w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52'
            color='text-userText'
            style={{
              justifyContent: 'flex-start',
              backgroundColor: isActive('/user/orders'),
            }}
            as='li'
          >
            <Image width={18} alt='orders' height={18} src='/basket.svg' />
            Your Orders
          </Button>
          </Box>
          <Box mb='32px'>
          <Button
            className='flex gap-7 w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52'
            color='text-userText'
            style={{
              justifyContent: 'flex-start',
              backgroundColor: isActive('/user/checkout'),
            }}
            as='li'
          >
            <Image width={18} alt='Checkout' height={18} src='/basket.svg' />
            Checkout
          </Button>
          </Box>
          <Box mb='32px'>
          <Button
            className='flex gap-7 w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52'
            color='text-userText'
            style={{
              justifyContent: 'flex-start',
              backgroundColor: isActive('/user/logout'),
            }}
            as='li'
          >
            <Image width={18} alt='Logout' height={18} src='/basket.svg' />
            Logout
          </Button>
          </Box>
        </Box>
      </Box>
    );
}

export default RestaurantNavbar