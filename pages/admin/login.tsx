import MetaSeo from '@/shared/MetaSeo'
import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function login() {
  return (
    <Box className=' bg-darkBlue10 h-screen'>
      <Head>
        <title>Admin Login</title>
        <MetaSeo
          title='Admin Login'
          desc='Welcome to Login for Admins!'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Box as='header' className=' mx-8 py-14'>
      <Text className='font-extrabold text-[28px] text-white10' as="h1">
          Yummy    
          <span className='text-orange'>
            .
          </span> 
        </Text>
      </Box>
      <Box as='main' className='flex items-end justify-center'>
        <Box as='section' className=' bg-darkblue30 w-1/3 h-96 flex justify-center p-11'>
          <Text as='h2' className=' text-4xl text-center text-gray10 font-bold'>Welcome Admin</Text>
          {/* Add Formik */}
        </Box>
        <Box as='section' className=' bg-white20 w-1/3 h-96 '>
          <Image className=' m-2 float-end cursor-pointer' width={40} height={40} alt='eng' src='/eng.svg' />
          <Box className='flex items-center justify-center mt-9'>
          <Image width={200}  height={200} alt='login' src="/login.svg" className=' w-5/6 '/>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default login