import { translate } from '@/public/lang/translate'
import Chat from '@/shared/ChatComponent/Chat'
import Sidebar from '@/shared/ChatComponent/Sidebar'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))

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