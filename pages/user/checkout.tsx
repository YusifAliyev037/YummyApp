import BoxCheck1 from '@/shared/ClientComponent/BoxCheck1'
import Footer from '@/shared/ClientComponent/ClientFooter'
import ClientHeader from '@/shared/ClientComponent/ClientHeader'
import UserModul from '@/shared/ClientComponent/UserModul'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Checkout = () => {
  return (
    <Box>
        <ClientHeader/>
<Box className='flex' width={'100%'}>
  <Box width={'26%'} >
<UserModul/>
</Box>
       <Box width={'76%'}  >
        <BoxCheck1/>
       </Box>
</Box>
    
        <Footer/>
      
    </Box>
  )
}

export default Checkout
