import { translate } from '@/public/lang/translate'
import Header from '@/shared/AdminComponents/Header'
import PushModul from '@/shared/AdminComponents/PushModul'
import Chat from '@/shared/ChatComponent/Chat'
import Sidebar from '@/shared/ChatComponent/Sidebar'
import MetaSeo from '@/shared/MetaSeo'
import { Box,Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
function chat() {



  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';
  return(
    <Box  className="bg-darkBlue10 h-screen"> 
   <Head>
        <title>{translate("Chat",locale)}</title>
       <MetaSeo title="Chat" desc="Chat Page"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <Box display={"flex"} >
      <PushModul />
      <Box className='flex'  >
        <Sidebar/>
        <Chat/>
        
      </Box>
    </Box>
  </Box>
  
  )
}
export default chat