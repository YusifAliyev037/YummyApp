import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1'
import Header from '@/shared/AdminComponents/Header'
import ModulDelete from '@/shared/AdminComponents/ModulDelete'
import Pagination from '@/shared/AdminComponents/Pagination'
import PushModul from '@/shared/AdminComponents/PushModul'
import { Category, Products, deleteProducts, getCategories, getProducts, getRestaurants, updateProduct } from '@/shared/AdminComponents/Services/axios'
import MetaSeo from '@/shared/MetaSeo'
import { fillProducts } from '@/shared/redux/global/globalSlice'
import { RootState } from '@/shared/redux/store'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, InputGroup, Select, Stack, Text, useToast } from '@chakra-ui/react'

import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function products() {

  const toast = useToast()

  const dispatch = useDispatch()

  const [products, setProducts] = useState<Products[]>([]);
  console.log("products", products);
  

  const [originalProducts, setOriginalProducts] = useState<Products[]>([]);

  const [category, setCategory] = useState<Category[]>([]);

  const [pages,setPages]=useState<number>(0)

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [isDeleteModalId, setIsDeleteModalId] = useState<Products | null>(null);

  const [imgUrl, setImgUrl] = useState<string>('');

  const [hidden, setHidden] = useState(true);

  const [restaurantArr, setRestaurantArr] =  useState<string[]>([]);

  const [activeId, setActiveId] = useState('')

  let b;

  const productNameRef = useRef<HTMLInputElement>(null);
  const productDescRef = useRef<HTMLInputElement>(null);
  const productPriceRef = useRef<HTMLInputElement>(null);
  const productRestaurantRef = useRef<HTMLInputElement>(null);
  const ImgRef = useRef<HTMLInputElement>(null);

  const productsArr: Products[] = useSelector((state: RootState) => state.global.product) || [];
  console.log("products", productsArr);
   
  function getImgUrl(url: string): void {
    setImgUrl(url);
  }

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };
  const handleEditProductClick = (id:any) => {
    setActiveId(id)
    setHidden(false);
    
   
  };
  async function editProduct(){
    const proName:any = productNameRef.current?.value;
    const proDesc:any = productDescRef.current?.value;
    const proPrice:any = productPriceRef.current?.value;
    const proRes:any = productRestaurantRef.current?.value;
    const img_url: any = imgUrl

    if(!isInputValid(
      proName,
      proDesc,
      proRes,
      img_url,
      proPrice
     )){
      toast({
        title: "Please fill all the inputs!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
      return
     }
    
     const form:Products ={
      name:proName,
      price:proPrice,
      description:proDesc,
      rest_id:proRes,
      img_url:img_url
     }


    const res = await updateProduct(activeId, form)
    if( res?.status === 200){
      toast({
        title: 'Restaurant updated successfully!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      changeHidden()

      const updatedProduct = productsArr.map((item:any)=>{
        if(item.id === activeId){
          return res.data.data
        }
        return item
      })
      dispatch(fillProducts(updatedProduct))
    
    }
  }

  const isInputValid = (
    proName:string | undefined,
    proDesc:string | undefined,
    proRes:string | undefined,
    proPrice:number,
    img_url: any
  
  
  ): boolean => {
    return( 
    !!proName && 
    !!proDesc &&
    !!proRes &&
    !!proPrice &&
    !!img_url 
  )};

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
  

  let pagesData=productsArr.slice(b,(pages+1)*5);
  
  async function fetchProducts() {
    try {
      const res = await getProducts();
      const fetchedProducts = res?.data?.result?.data;
      setProducts(fetchedProducts);
      dispatch(fillProducts(fetchedProducts))
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
  
  async function restaurantRender(){
    try{
      const response = await getRestaurants()
      const restaurantArr = response?.data.result.data;
  
      let items = restaurantArr.map((item:any)=> item.name);
  
      setRestaurantArr(items)
    }catch(error){
      console.log(error);
      
    }
  }
  
  useEffect(()=>{
    restaurantRender()
  },[])
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
        <AdminModal1
      arr={restaurantArr}
      onClickClose={changeHidden}
      mod='3'
      p='Edit Product'
      p1='Upload  image'
      p2='Edit your Product information'
      btn='Edit Product'
      hidden={hidden}
      ButtonOnClick={editProduct}
      productNameRef={productNameRef}
      imgRef={ImgRef}
      productDescRef={productDescRef}
      productPriceRef={productPriceRef}
      productRestaurantRef={productRestaurantRef}
      getImgUrl={getImgUrl}
/>
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

                          <IconButton 
                          aria-label='Edit' 
                          icon={<EditIcon/>} 
                          size='xs' 
                          fontSize='24px' 
                          variant='ghost' 
                          colorScheme='teal'
                          onClick={()=>handleEditProductClick(item.id)} 
                          
                          />
                          <IconButton 
                          aria-label='Delete' 
                          icon={<DeleteIcon/>} 
                          size='xs' 
                          fontSize='24px' 
                          variant='ghost' 
                          colorScheme='red' 
                          onClick={() => handleDeleteId(item)} />
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

export default products;
