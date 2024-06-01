import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getEditRestaurant, Restaurant } from '@/shared/AdminComponents/Services/axios';
import { Box, Text, Image } from '@chakra-ui/react';
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
          <Box key={index}>
        <Image className=' w-full h-[450px] object-cover' src={item[1].img_url} alt={item[1].name} />
          <Box className='flex justify-around'> 
            <Box>
              <Text className=' font-bold text-xl text-gray600'  >{item[1].name}</Text>
              <Text className=' font-medium text-sm text-gray300'>{item[1].address}</Text>
            </Box>
            <Box className=' flex gap-5'>
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
      </Box>
      <ClientFooter />
    </>
  );
};

export default RestaurantPage;
