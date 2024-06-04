import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  AddBasket,
  GetBasket,
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
  Button,
} from '@chakra-ui/react';
import ClientHeader from '@/shared/ClientComponent/ClientHeader';
import ClientFooter from '@/shared/ClientComponent/ClientFooter';
import RestaurantIdBasket from '@/shared/ClientComponent/RestaurantIdBasket';
import { Type } from 'typescript';

const RestaurantPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [local, setLocal] = useState<any>(null);
  const [product, setProducts] = useState<any[]>([]);
const [basket,setBasket]=useState<any>();
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
                className='border border-2 cursor-pointer border-red400 bg-red400 rounded-md p-1 px-2'
                onClick={() => router.push('/restaurants')}
              >
                <Text className='text-white text-left'>Go Back</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <hr />
        <Box className='mt-9 flex gap-12'>
          <Box
            as='section'
            className='w-2/3 bg-gray200'
          >
            <Text className='text-center py-10 font-bold text-2xl text-gray700'>
              Products
            </Text>
            <Box className='mb-44'>
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
                            onClick={async() => {
                              AddBasket(prod.id);
                              let basket:any=await GetBasket()
                              console.log(basket);
                              let newBasket=basket?.result.data
                              console.log(newBasket);
                              setBasket(newBasket)
                              
                              
                            }}
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
            <RestaurantIdBasket data={basket}/>
          </Box>
        </Box>
      </Box>
      <ClientFooter />
    </>
  );
};

export default RestaurantPage;
