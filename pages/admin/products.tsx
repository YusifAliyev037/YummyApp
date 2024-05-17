import Header from '@/shared/AdminComponents/Header'
import PushModul from '@/shared/AdminComponents/PushModul'
import { Category, Products, getCategories, getProducts } from '@/shared/AdminComponents/Services/axios'
import MetaSeo from '@/shared/MetaSeo'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, InputGroup, Select, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function products() {
  const [products, setProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  async function fetchProducts () {
    try{
      const res=await getProducts();
      setProducts(res?.data?.result?.data)
    }
    catch{

    }
    
  }
  async function fetchCategory () {
    try{
      const res=await getCategories();
     
      
      setCategory(res?.data?.result?.data)
    }
    catch{

    }
    
  }
  useEffect(()=>{
    fetchProducts()
    fetchCategory()

  },[])

  console.log(products);
  
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
            
           {category.map((item,id)=>{
            return(
              <option key={id} value='Piiza'>{item.name}</option>

            )
           })}
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
       <Box className='flex gap-10'>
       {products.map((item,index)=>{
  return(
    <Card key={index} className=' h-72 w-48'>
    <CardBody>
<Image
 src={item.img_url}
 alt={item.name}
 borderRadius='sm'
/>
<Stack mt='1' spacing='3'>
 <Heading size='md'>{item.name}</Heading>
 <Text>
   {item.description}
 </Text>
<Box className="flex">
<Text className=' text-blue10' fontSize='2xl'>
</Text>
   {item.price}
   <ButtonGroup
                    spacing='1'
                    display={"flex"}
                    ml='auto'
                  >
                    <IconButton
                      aria-label='Edit'
                      icon={<EditIcon />}
                      size='xs'
                      fontSize='24px'
                      variant='ghost'
                      colorScheme='teal'
                    />
                    <IconButton
                      aria-label='Delete'
                      icon={<DeleteIcon />}
                      size='xs'
                      fontSize='24px'
                      variant='ghost'
                      colorScheme='red'
                   
                    />
                  </ButtonGroup>

</Box>
 
</Stack>
</CardBody>

   </Card>
  )
})}
       </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default products