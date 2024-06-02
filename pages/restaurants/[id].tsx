import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEditRestaurant, Restaurant } from '@/shared/AdminComponents/Services/axios';
import { Box, Text, Image, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button } from '@chakra-ui/react';
import ClientHeader from "@/shared/ClientComponent/ClientHeader";
import ClientFooter from "@/shared/ClientComponent/ClientFooter";

const RestaurantPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  
  useEffect(() => {
    if (id) {
      const fetchRestaurant = async () => {
        try {
          const res = await getEditRestaurant(id);
          setRestaurant(res?.data.result);
        } catch (error) {
          console.error('Error fetching restaurant:', error);
        }
      };
      fetchRestaurant();
    }
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  // Ensure restaurant is not null before accessing its properties
  const restaurantEntries = restaurant ? Object.entries(restaurant) : [];
  console.log(restaurantEntries);
  

  return (
    <>
      <ClientHeader />
      <Box className=' px-8'>
        {restaurantEntries.map((item, index)=>(
          <Box as='section' key={index}>
        <Image className=' w-full h-[450px] object-cover' src={item[1].img_url} alt={item[1].name} />
          <Box className='flex justify-around m-3'> 
            <Box className=' pr-80'>
              <Text className=' font-bold text-xl text-gray600'  >{item[1].name}</Text>
              <Text className=' font-medium text-sm text-gray300'>{item[1].address}</Text>
            </Box>
            <Box className=' flex gap-8 '>
            <Box >
              <Text className=' text-gray300 font-medium text-lg'>Cusine</Text>
              <Text className=' text-gray300 font-medium text-sm'>{item[1].cuisine}</Text>
            </Box>
            <Box className=' border border-2 border-red400 rounded-md p-1 px-2'>
              <Text className=' font-normal text-sm text-red400'>${item[1].delivery_price} </Text>
              <Text className=' font-normal text-red400'>Delivery</Text>
            </Box>
            <Box className=' border border-2 border-red400 bg-red400 rounded-md p-1 px-2'>
              <Text 
              className=' text-white cursor-pointer text-left'
              onClick={()=> router.push("/restaurants")}
              >
                Go Back</Text>
            </Box>
            </Box>
           

          </Box>
          </Box>
        ))}
        <hr/>
        <Box className=' mt-9'>
        <Box as='section' className=' w-2/3 bg-gray200'>
          <Text className=' text-center py-10 font-bold text-2xl text-gray700'>Products</Text>
          <Box>
          <TableContainer>
  <Table variant='simple'>
    
    <Tbody className=' overflow-7-scroll mb-11'>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
      <Tr>
        <Td>
          <Image src='/pizza.svg' className=' w-14'/>
        </Td>
        <Td>
          <p> Papa John’s Pizza Restaurant</p>
          <p className=' text-userText'>Prepared with a patty, a slice of cheese and special sauce</p>   
        </Td>
        <Td isNumeric>
          <span className=' text-userText'>From</span>
          $7.90</Td>
          <Td >
            <button className=' py-2 px-4 rounded-full border-2 border-white50 text-white50 text-2xl hover:border-green hover:bg-green hover:text-white transition-all duration-200'>+</button>
            </Td>
      </Tr>
     
    </Tbody>
    
  </Table>
</TableContainer>
          </Box>
        </Box>
        <Box as='section'></Box>
      </Box>
        </Box>
      <ClientFooter />
    </>
  );
};

export default RestaurantPage;
