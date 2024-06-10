import { translate } from '@/public/lang/translate'
import Header from '@/shared/AdminComponents/Header'
import PushModul from '@/shared/AdminComponents/PushModul'
import TableForOrder from '@/shared/AdminComponents/Table'
import MetaSeo from '@/shared/MetaSeo'
import { Box,Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
function history() {
  let TableNames=["ID","Customer ID","Time","Delivery Address","Amount","Payment Method","Contact"]
  let testData=[{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"},{id:9177,customerId:22401,time:"25 Dec 2021",adres:"29 eve street 543 avenue road ,ny87876",amount:"$249,7",payment:"Cash on delivery",contact:"994-51-410-3130"}]



  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';
  return(
    <Box  className="bg-darkBlue10 h-screen"> 
   <Head>
        <title>{translate("History",locale)}</title>
       <MetaSeo title="History" desc="History Page"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Box display={"flex"} >
      <PushModul />
      <Box >
    
        <Box display={"flex"} justifyContent={"flex-end"} height={"660px"} flexDirection={"column" } gap={"41px"}>
        <Box bg={"#27283C"} height={"73px"} borderRadius={"14px"} display={"flex"} alignItems={"center"} >
          <Text color="#F2F2F2DE" fontSize="21px" fontFamily="Roboto" lineHeight="21px" paddingLeft={"33px"} >
            {translate("History",locale)}
           
          </Text>
          </Box>
         <Box height={"464px"} overflow={"auto"}>
         {/* <TableForOrder order={testData} name={TableNames} /> */}
         </Box>
        </Box>
      </Box>
    </Box>
  </Box>
  
  )
}
export default history