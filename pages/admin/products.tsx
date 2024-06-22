import { translate } from '@/public/lang/translate';
import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1';
import ModulDelete from '@/shared/AdminComponents/ModulDelete';
import Pagination from '@/shared/AdminComponents/Pagination';
import { Category, Products, deleteProducts, getCategories, getProducts, getRestaurants, updateProduct } from '@/shared/AdminComponents/Services/axios';
import { fillProducts } from '@/shared/redux/global/globalSlice';
import { RootState } from '@/shared/redux/store';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, ButtonGroup, Card, CardBody, IconButton, Image, InputGroup, Select, Stack, Text, Tooltip, useToast } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))

function ProductsPage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = router.locale || 'en';

  const [products, setProducts] = useState<Products[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Products[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteModalId, setIsDeleteModalId] = useState<Products | null>(null);
  const [imgUrl, setImgUrl] = useState<string>('');
  const [hidden, setHidden] = useState(true);
  const [restaurantArr, setRestaurantArr] = useState<string[]>([]);
  const [activeId, setActiveId] = useState('');
  // --
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
// --
  const productNameRef = useRef<HTMLInputElement>(null);
  const productDescRef = useRef<HTMLInputElement>(null);
  const productPriceRef = useRef<HTMLInputElement>(null);
  const productRestaurantRef = useRef<HTMLInputElement>(null);
  const ImgRef = useRef<HTMLInputElement>(null);

  const productsArr: Products[] = useSelector((state: RootState) => state.global.product) || [];

  

  function getImgUrl(url: string): void {
    setImgUrl(url);
  }

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };

  async function editProduct() {
    const proName = productNameRef.current?.value;
    const proDesc = productDescRef.current?.value;
    const proPrice = productPriceRef.current?.value;
    const proRes = productRestaurantRef.current?.value;
    const img_url = imgUrl;

    if (!isInputValid(proName, proDesc, proRes, proPrice, img_url)) {
      toast({
        title: "Please fill all the inputs!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    const form: Products = {
      name: proName,
      price: Number(proPrice),
      description: proDesc,
      rest_id: proRes,
      img_url: img_url,
    };

    const res = await updateProduct(activeId, form);
    if (res?.status === 200) {
      toast({
        title: 'Product updated successfully!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      changeHidden();

      const updatedProduct = productsArr.map((item) => {
        if (item.id === activeId) {
          return res.data.data;
        }
        return item;
      });
      dispatch(fillProducts(updatedProduct));
    }
  }

  const isInputValid = (
    proName: string | undefined,
    proDesc: string | undefined,
    proRes: string | undefined,
    proPrice: string | undefined,
    img_url: any
  ): boolean => {
    return (
      !!proName &&
      !!proDesc &&
      !!proRes &&
      !!proPrice &&
      !!img_url
    );
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   
    
    const selectedValue = event.target.value;
    console.log(selectedValue);
    if (selectedValue.length == 0) {
      dispatch(fillProducts(originalProducts));
    } else {
      const filteredProducts = originalProducts.filter((item) => item.rest_id === selectedValue);
      dispatch(fillProducts(filteredProducts));
      setPages(0);
    }
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  function getPages(pageNumber: number) {
    setPages(pageNumber);
  }

  let b = pages * 5;

  let pagesData = productsArr?.slice(b, (pages + 1) * 5);

  async function fetchProducts() {
    try {
      const res = await getProducts();
      const fetchedProducts = res?.data?.result?.data;
      setProducts(fetchedProducts);
      dispatch(fillProducts(fetchedProducts));
      setOriginalProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }

  async function fetchCategory() {
    try {
      const res = await getCategories();
      setCategory(res?.data?.result?.data);
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  }

  function handleDeleteId(product: Products) {
    setIsDeleteModalOpen(true);
    setIsDeleteModalId(product);
  }

  async function handleDeleteProduct(product: Products) {
    if (product.id) {
      await deleteProducts(product.id);
      const newdat = products.filter((res) => res.id !== isDeleteModalId?.id);
      dispatch(fillProducts(newdat));
      toast({
        title: 'Product deleted successfully!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      setIsDeleteModalId(null);
      setIsDeleteModalOpen(false);
    } else {
      console.error("Product id is undefined");
    }
  }

  async function restaurantRender() {
    try {
      const response = await getRestaurants();
      const restaurantArr = response?.data.result.data;
      let items = restaurantArr.map((item: any) => item.name);
      setRestaurantArr(items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    restaurantRender();
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchCategory();
    
  }, []);

  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
// ----------
  const handleEditProductClick = (product: Products | undefined) => {
    if (product && product.id) {
      setActiveId(product.id);
      setSelectedProduct(product);
      setHidden(false);
    }
  };
  // ----------

  return (
    <Box className='bg-darkBlue10 md:h-screen'>
      <ModulDelete isOpen={isDeleteModalOpen} onClose={handleCloseModal} onConfirm={() => {
        if (isDeleteModalId !== null) {
          handleDeleteProduct(isDeleteModalId);
        }
      }} />
      <Box as='header'>
        <Head>
          <title>{translate("Products", locale)}</title>
          <MetaSeo title="Products" desc="Products Page" />
          <link rel="icon" href="/adminn.ico" />
        </Head>
        <Header />
        <AdminModal1
          arr={restaurantArr}
          onClickClose={changeHidden}
          mod='3'
          p='Edit Product'
          p1='Upload image'
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
          // --
          productData={selectedProduct}
          // --
        />
      </Box>
      <Box as='main' className='flex'>
        <PushModul />
        <Box as='section' className='w-full flex flex-col justify-center gap-[52px]'>
          <Box bg='#27283C' className='flex flex-col rounded-[4px] w-[100%] h-[123px] gap-[8px] md:flex-row justify-center md:items-center mt-[90px] md:px-8 md:mt-20 md:mr-8 md:w-[95%] md:h-[73px] md:rounded-[16px]'>
            <Text color={"#C7C7C7"} className='font-roboto pl-[59px] font-medium text-[18px] leading-[24px] tracking-tightest text-customGray'>
              {translate("Products", locale)}
            </Text>
            <InputGroup className='flex md:justify-end justify-center items-center md:gap-7'>
              <Select bgColor='#5A5B70' borderRadius={{ base: "8px", md: "200px" }} height={35} width={{ base: "267px", md: "200px" }} placeholder='Product type' onChange={handleSelectChange} mr='2'>
                {originalProducts.map((item, id) => {
                  return <option key={id} value={item.rest_id}>{item.rest_id}</option>;
                })}
              </Select>
              <Box></Box>
            </InputGroup>
          </Box>
          <Box className='flex flex-col items-center gap-[29px] mt-[20px] md:flex-row md:gap-8'>
            {pagesData.map((item, index) => {
              return (
                <Card key={index} className='h-[311px] w-[236px] md:h-72 md:w-48'>
                  <CardBody>
                    <Image src={item.img_url} alt={item.name} borderRadius='sm' className='h-[179px] w-[193px] md:w-[160px] md:h-[160px]' />
                    <Stack spacing='4' height="100%">
                      <Text color={"#1E1E30"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"20px"} size={"18px"} height="24px">{item.name}</Text>

<Tooltip label={item.description ?? ''} aria-label='Full description'>
  <Text 
    color={"#8E8E93"} 
    fontWeight={"500"} 
    fontFamily={"Roboto"} 
    lineHeight={"20px"} 
    size={"14px"} 
    height="24px"
  >
    {item.description 
      ? (item.description.length > 18 
        ? `${item.description.substring(0, 18)}...` 
        : item.description) 
      : ''}
  </Text>
</Tooltip>

                      <Box className="flex">
                        <Text color={"#00B2A9"} fontWeight={"500"} fontFamily={"Roboto"} lineHeight={"20px"} size={"12px"} height="24px">${item.price}</Text>
                        <ButtonGroup spacing='1' display={"flex"} ml='auto' gap={"8px"}>
                          <IconButton
                            aria-label='Edit'
                            icon={<EditIcon />}
                            size='xs'
                            fontSize='24px'
                            variant='ghost'
                            colorScheme='teal'
                            onClick={() => handleEditProductClick(item)}
                          />
                          <IconButton
                            aria-label='Delete'
                            icon={<DeleteIcon />}
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
      <Pagination getPages={getPages} length={Math.ceil(products.length / 5)} />
    </Box>
  );
}

export default ProductsPage;
