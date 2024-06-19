import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  addBasket,
  getProducts,
  getRestaurants,
} from '@/shared/AdminComponents/Services/axios';
import {
  Box,
  Text,
  Image,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  useToast,
} from '@chakra-ui/react';
import RestaurantIdBasket from '@/shared/ClientComponent/RestaurantIdBasket';
import { useDispatch } from 'react-redux';
import { fillBasket } from '@/shared/redux/global/globalSlice';
import dynamic from 'next/dynamic';

const ClientHeader = dynamic(() => import("../../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../../shared/ClientComponent/ClientFooter"))

const RestaurantPage: React.FC = () => {
  const toast = useToast();
  const dispatch = useDispatch()
  const router = useRouter();
  const { id } = router.query;
  const [local, setLocal] = useState<any>(null);
  const [product, setProducts] = useState<any[]>([]);
  useEffect(() => {
    if (!id) return;

    async function fetchRestaurant() {
      try {
        const res = await getRestaurants();
        const resArrs = res?.data.result.data;
        const focusRes = resArrs.find((item: any) => item.id === id);
        setLocal(focusRes);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      }
    }

    fetchRestaurant();
  }, [id]);

  useEffect(() => {
    if (!local) return;

    async function fetchProducts() {
      try {
        const res = await getProducts();
        const resArr = res?.data.result.data;
        const mainProduct = resArr.filter(
          (item: any) => item.rest_id === local?.name
        );
        setProducts(mainProduct);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [local]);

  const date: Date = new Date();


  function reLogin(){
    const loginDate:number | null = parseInt(
      localStorage.getItem("loginDate") || "",
      10
    );
    const currentSecond: number = date.getTime();
    const timeDifference: number = currentSecond - (loginDate || 0);

    if(!localStorage.getItem("userInfo")){
      toast({
        title: "You need to be logged in !",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
      setTimeout(()=>{
        router.push("/login")
      },750);
      return
    }

    if(timeDifference / 1000 >= 3600){
      toast({
        title: "Your browsing session has expired !",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
      setTimeout(()=>{
        router.push("/login")
      },750);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("tokenObj");
    }else if(timeDifference / 1000 >= 3540){
      toast({
        title:  "You will be logged out from the site in the next 1 minutes.!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
    }
  }

  async function handleButtonClick(id: string | number) {
    try {
      const res = await addBasket(id);
      reLogin();
      if (res?.status === 201) {
        dispatch(fillBasket(res?.data))
      }
    } catch (error) {
      console.error("Error adding product to basket:", error);
    }
  }

  if (!local) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ClientHeader />
      <Box className='px-8'>
        <Box
          as='section'
          key={local.id}
        >
          <Image
            className='w-full h-[450px] object-cover'
            src={local.img_url}
            alt={local.name}
          />
          <Box className='flex justify-around m-3'>
            <Box className='pr-80'>
              <Text className='font-bold text-xl text-gray600'>
                {local.name}
              </Text>
              <Text className='font-medium text-sm text-gray300'>
                {local.address}
              </Text>
            </Box>
            <Box className='flex gap-8'>
              <Box>
                <Text className='text-gray300 font-medium text-lg'>
                  Cuisine
                </Text>
                <Text className='text-gray300 font-medium text-sm'>
                  {local.cuisine}
                </Text>
              </Box>
              <Box className='border border-2 border-red400 rounded-md p-1 px-2'>
                <Text className='font-normal text-sm text-red400'>
                  ${local.delivery_price}
                </Text>
                <Text className='font-normal text-red400'>Delivery</Text>
              </Box>
              <Box
                className='border border-2 cursor-pointer border-red400 bg-red400 rounded-md p-1 px-2 hidden md:block'
                onClick={() => router.push('/restaurants')}
              >
                <Text className='text-white text-left '>Go Back</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box className='mt-9 flex mb-44 gap-12'>
          <Box
            as='section'
            className='w-2/3 bg-gray200'
          >
            <Text className='text-center py-10 font-bold text-2xl text-gray700'>
              Products
            </Text>
            <Box className=''>
              <TableContainer>
                <Table variant='simple'>
                  <Tbody className='overflow-7-scroll mb-11'>
                    {product.map((prod, index) => (
                      <Tr key={index}>
                        <Td>
                          <Image
                            src={prod.img_url}
                            className='w-14'
                          />
                        </Td>
                        <Td>
                          <p>{prod.name}</p>
                          <p className='text-userText'>{prod.description}</p>
                        </Td>
                        <Td isNumeric>
                          <span className='text-userText'>From</span> $
                          {prod.price}
                        </Td>
                        <Td>
                          <button
                            onClick={(() => handleButtonClick(prod.id))}
                            className='py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'
                          >
                            +
                          </button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box className='w-1/3'>
            <RestaurantIdBasket />
          </Box>
        </Box>
      </Box>
      <ClientFooter />
    </>
  );
};

export default RestaurantPage;
