import Header from '@/shared/AdminComponents/Header'
import ModulDelete from '@/shared/AdminComponents/ModulDelete'
import Pagination from '@/shared/AdminComponents/Pagination'
import PushModul from '@/shared/AdminComponents/PushModul'
import { Category, Products, deleteProducts, getCategories, getProducts } from '@/shared/AdminComponents/Services/axios'
import MetaSeo from '@/shared/MetaSeo'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, InputGroup, Select, Stack, Text } from '@chakra-ui/react'

import Head from 'next/head'
import React, { useEffect, useState } from 'react'

function Products() {
  const [products, setProducts] = useState<Products[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [pages,setPages]=useState<number>(0)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalId, setIsDeleteModalId] = useState<Products | null>(null);
  let b;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue.length==0) {     
      setProducts(originalProducts); 
      
    } else {
      const filteredProducts = originalProducts.filter((item) => item.rest_id === selectedValue);
      setProducts(filteredProducts);
      setPages(0)
      
    }
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  function getPages(pageNumber: number) {
    setPages(pageNumber)   
  }


  if(pages+1===1){
    b=0;
  } else {
    b=pages*5;
  }
  console.log(b);
  

  let pagesData=products.slice(b,(pages+1)*5);
  
  async function fetchProducts() {
    try {
      const res = await getProducts();
      const fetchedProducts = res?.data?.result?.data;
      setProducts(fetchedProducts);
      setOriginalProducts(fetchedProducts); 
    } catch(error) {
      console.error("Error fetching products: ", error);
    }
  }

  async function fetchCategory() {
    try {
      const res = await getCategories();
      setCategory(res?.data?.result?.data);
    } catch(error) {
      console.error("Error fetching categories: ", error);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);

  function handleDeleteId(product: Products) {
    setIsDeleteModalOpen(true);
    setIsDeleteModalId(product);
  }

  function handleDeleteProduct(product: Products) {
    if (product.id) {
      deleteProducts(product.id);

      setProducts(products.filter((res) => res.id !== isDeleteModalId?.id));
      setIsDeleteModalId(null);
      setIsDeleteModalOpen(false);
      //toast
    } else {
      console.error("Product id is undefined");
    }
  }
  
  return (
    <Box className=' bg-darkBlue10 h-screen '>
      <ModulDelete isOpen={isDeleteModalOpen} onClose={handleCloseModal} onConfirm={()=>{
        if (isDeleteModalId !== null) {
          handleDeleteProduct(isDeleteModalId);
        }
      }} />
      <ModulDelete isOpen={isDeleteModalOpen} onClose={handleCloseModal} onConfirm={() => {
        if (isDeleteModalId) {
          handleDeleteProduct(isDeleteModalId);
        }
      }} />
      <Box as='header'>
        <Head>
          <title>Products</title>
          <MetaSeo title="Products" desc="Products Page"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
      </Box>
      <Box as='main' className='flex'>
        <PushModul />
        <Box as='section' className='w-full'>
          <Box bg='#27283C' className='flex items-center mb-12 w-5/5 px-8 mt-20 mr-8' borderRadius={16} height={73}>
            <Text color='white'>Products</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Select bgColor='#5A5B70' borderRadius={20} width={200} height={35} placeholder='Product type' onChange={handleSelectChange} mr='2'>
                {category.map((item, id) => {
                  return <option key={id} value={item.id}>{item.name}</option>;
                })}
              </Select>
              <Box></Box>
            </InputGroup>
          </Box>
          <Box className='flex gap-8'>
            {pagesData.map((item, index) => {
              return (
                <Card key={index} className='h-72 w-48'>
                  <CardBody>
                    <Image src={item.img_url} alt={item.name} borderRadius='sm' height={"160px"} width={"160px"} />
                    <Stack spacing='4' height="100%">
                      <Text color={"#1E1E30"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"20px"} size={"18px"} height="24px">{item.name}</Text>
                      <Text color={"#8E8E93"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"20px"} size={"14px"} height="24px">{item.description}</Text>
                      <Box className="flex">
                        <Text color={"#00B2A9"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"20px"} size={"12px"} height="24px">${item.price}</Text>
                        <ButtonGroup spacing='1' display={"flex"} ml='auto' gap={"8px"}>
                          <IconButton aria-label='Edit' icon={<EditIcon />} size='xs' fontSize='24px' variant='ghost' colorScheme='teal' />
                          <IconButton aria-label='Delete' icon={<DeleteIcon />} size='xs' fontSize='24px' variant='ghost' colorScheme='red' onClick={() => handleDeleteId(item)} />
                        </ButtonGroup>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Pagination  getPages={getPages} length={Math.ceil(products.length/5)} />

    </Box>
  );
}

export default Products;
