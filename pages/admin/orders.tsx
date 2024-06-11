import { translate } from '@/public/lang/translate'
import Header from '@/shared/AdminComponents/Header'
import PushModul from '@/shared/AdminComponents/PushModul'
import { deleteUserOrder, getOrdersList } from '@/shared/AdminComponents/Services/axios'
import TableForOrder from '@/shared/AdminComponents/Table'
import DeleteUserModul from '@/shared/ClientComponent/DeleteUserModul'
import MetaSeo from '@/shared/MetaSeo'
import { Box, Flex, Text, flexbox, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
function orders() {
  let TableNames=["ID","Customer ID","Time","Delivery Address","Amount","Payment Method","Contact"]
  
  
  interface Product {
    count: number;
    description: string;
    id: string;
    img_url: string;
    name: string;
    price: number;
    rest_id: string;
    amount: number;
    created: number;
}

interface Order {
    id: string;
    amount: number;
    delivery_address: string;
    created: number; 
    contact: string;
    customer_id: string;
    payment_method: string;
    products: Product[];
}

  const [orders, setOrders] = useState<Order[]>([]);
  
  




console.log(orders);



  async function getOrders() {
    let data=await getOrdersList()
    setOrders(data.data.result.data)
    
    
    return data
    
  }

  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
    getOrders()
  }, []);
  const locale = router.locale || 'en';
  return(
    <Box  className="bg-darkBlue10 h-screen"> 
   <Head>
        <title>{translate("Orders",locale)}</title>
       <MetaSeo title="Orders" desc="Orders Page"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Box display={"flex"} >
      <PushModul />
      <Box >
    
        <Box display={"flex"} justifyContent={"flex-end"} height={"660px"} flexDirection={"column" } gap={"41px"}>
        <Box bg={"#27283C"} height={"73px"} borderRadius={"14px"} display={"flex"} alignItems={"center"}  >
          <Text color="#F2F2F2DE" fontSize="21px" fontFamily="Roboto" lineHeight="21px" paddingLeft={"33px"} >
            {translate("Orders",locale)}
           
          </Text>
          </Box>
         <Box height={"464px"} overflow={"auto"}>
         <TableForOrder order={orders} name={TableNames} setOrders={setOrders} />
     
         </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  
  )
}
export default orders