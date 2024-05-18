import Header from '@/shared/AdminComponents/Header'
import ModulDelete from '@/shared/AdminComponents/ModulDelete'
import PushModul from '@/shared/AdminComponents/PushModul'
import { Category, Products, deleteProducts, getCategories, getProducts } from '@/shared/AdminComponents/Services/axios'
import MetaSeo from '@/shared/MetaSeo'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, InputGroup, Select, Stack, Text } from '@chakra-ui/react'
import { log } from 'console'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function products() {
  const [products, setProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalId, setIsDeleteModalId] = useState<Products | null>(null);
  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };
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

  function handleDeleteId(product:Products){
    setIsDeleteModalOpen(true)
    setIsDeleteModalId(product)
    
  }


  
  function handleDeleteProduct(product:Products){

   
    console.log(product);
    
      if (product.id) {
        deleteProducts(product.id);
        setProducts(products.filter((res)=>res.id !==isDeleteModalId?.id))
        setIsDeleteModalId({})
        setIsDeleteModalOpen(false)



    } else {
        console.error("Product id is undefined");
    }
      
    
    
      
    }
  
  return (
    <Box className=' bg-darkBlue10 h-screen p-2'>
      <ModulDelete isOpen={isDeleteModalOpen} onClose={handleCloseModal} onConfirm={()=>handleDeleteProduct(isDeleteModalId)} />
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
              placeholder='Productg type'
              mr='2'
            >
            
           {category.map((item,id)=>{
            return(
              <option key={id} value='Piiza'>{item.name}</option>

            )
           })}
            </Select>
            <Box>
            
            </Box>
          </InputGroup>
        </Box>
       <Box className='flex gap-8'>
       {products.map((item,index)=>{
  return(
    <Card key={index} className=' h-72 w-48'>
    <CardBody>
<Image
 src={item.img_url}
 alt={item.name}
 borderRadius='sm'
 height={"160px"}
 width={"160px"}
/>
<Stack mt='1' spacing='3'>
 <Text color={"#1E1E30"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"24px"} size={"18px"}  >{item.name}</Text>
 <Text color={"#8E8E93"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"24px"} size={"14px"}  >
   {item.description}
 </Text>
<Box className="flex">
<Text color={" #00B2A9"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"24px"} size={"12px"}   >
${item.price} 
</Text>

   <ButtonGroup
                    spacing='1'
                    display={"flex"}
                    ml='auto'
                    gap={"8px"}
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
                      onClick={()=>handleDeleteId(item) }
                   
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