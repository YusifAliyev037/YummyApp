import Footer from '@/shared/ClientComponent/ClientFooter'
import ClientHeader from '@/shared/ClientComponent/ClientHeader'
import UserModul from '@/shared/ClientComponent/UserModul'
import Profile from '@/shared/ClientComponent/profile'
import { Box } from '@chakra-ui/react'
import React from 'react'

const User = () => {
  return (
    <Box>
      <ClientHeader/>
    <Box className='flex 'width={'100%'}>

        <Box width={'28%'}>
        <UserModul />
        </Box>
        <Box width={'72%'}>
        <Profile/>
        </Box>
   
     
    </Box>
     
      <Footer/>

     
    </Box>
  )
}

export default User
