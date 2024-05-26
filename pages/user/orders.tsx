import Footer from '@/shared/ClientComponent/ClientFooter'
import ClientHeader from '@/shared/ClientComponent/ClientHeader'
import OrdersTable from '@/shared/ClientComponent/Orders'
import UserModul from '@/shared/ClientComponent/UserModul'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Orders = () => {
  return (
    <Box>
      <ClientHeader/>
      <Box className='flex  ' width={'100%'} >

<Box width={'26%'} height='634px'>
<UserModul />
</Box>
<Box width={'74%'}>
<OrdersTable/>
</Box>


</Box>
<Footer/>
</Box>
      


 
  )
}

export default Orders
