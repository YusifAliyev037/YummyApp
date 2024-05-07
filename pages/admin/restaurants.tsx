import Header from '@/shared/AdminComponents/Header'
import { Box,  Input, } from '@chakra-ui/react'
import React from 'react'

const Restaurants = () => {
  return (
    <Box bg="#27283C" minHeight="100vh" display="flex" flexDirection="column"> 
      <Header />
      <Box display="flex" justifyContent="flex-end" p="4"> 
        <Input 
          variant='outline' 
          sx={{ width: '1108px', height: '73px' }} 
          placeholder='Restaurants' 
        />
    
      </Box>
    </Box>
  )
}

export default Restaurants
