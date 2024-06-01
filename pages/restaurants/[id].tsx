import ClientHeader from '@/shared/ClientComponent/ClientHeader'
import ClientFooter from '@/shared/ClientComponent/ClientFooter'
import MetaSeo from '@/shared/MetaSeo'
import { Box, Image } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { translate } from '@/public/lang/translate'

function id() {
  const router=useRouter()
useEffect(() => {
  const locale = localStorage.getItem('lang') || 'en';
  router.push(router.pathname, router.asPath, { locale });
}, []);

const locale = router.locale || 'en';
  return (
    <Box>
      <Box>
      <Head>
          <title>{translate("Products",locale)}</title>
          <MetaSeo title="Restaurant id" desc="Products Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ClientHeader/>
      </Box>
      <Box as='section'>
        <Image
        src='https://www.papajohns.az/img/content/pj_logo_web_new.png'
        />
      </Box>
      <Box as='section'>salammm</Box>
      <Box as='section'></Box>
      <ClientFooter/>
    </Box>
  )
}

export default id