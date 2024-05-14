import Header from '@/shared/AdminComponents/Header'
import PushModul from '@/shared/AdminComponents/PushModul'
import MetaSeo from '@/shared/MetaSeo'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, InputGroup, Select, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

function products() {
  return (
    <Box className=' bg-darkBlue10 h-screen p-2'>
      <Box as='header'>
      <Head>
        <title>Products</title>
       <MetaSeo title="Products" desc="Products Page"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      </Box>
      <Box as='main' className='flex  '>
      <PushModul />
      <Box as='section' className='w-full'>
      <Box
          bg='#27283C'
          className='flex items-center mb-12 w-5/5 px-8 mt-20 mr-8'
          borderRadius={16}
          height={73}
        >
          <Text color='white'>Products</Text>
          <InputGroup className='flex justify-end items-center gap-7'>
            <Select
              bgColor='#5A5B70'
              borderRadius={20}
              width={200}
              height={35}
              placeholder='Select category'
              mr='2'
            >
              <option value='Piiza'>Pizza</option>
              <option value='Burgers'>Burgers</option>
              <option value='Juices'>Juices</option>
            </Select>
            <Box>
              <Button
                borderRadius={20}
                colorScheme='pink'
                style={{ boxShadow: '0px 4px 4px 0px rgba(39, 174, 96, 0.2)' }}

              >
                
                {/* <SearchIcon/> */}
                Search
              </Button>
            </Box>
          </InputGroup>
        </Box>
        <Card className=' h-72 w-48'>
         <CardBody>
    <Image
      src='/pizza.svg'
      alt='Pizza'
      borderRadius='sm'
    />
    <Stack mt='1' spacing='3'>
      <Heading size='md'>Margarita</Heading>
      <Text>
        Papa Jhon's
      </Text>
      <Text className=' text-blue10' fontSize='2xl'>
        $16
      </Text>
      
    </Stack>
  </CardBody>
  
        </Card>
      </Box>
      </Box>
    </Box>
  )
}

export default products