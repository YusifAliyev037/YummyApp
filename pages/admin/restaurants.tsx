import Header from '@/shared/AdminComponents/Header';
import {
  InputGroup,
  Button,
  Select,
  Text,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react';
import PushModul from '@/shared/AdminComponents/PushModul';
import MetaSeo from '@/shared/MetaSeo';
import Head from 'next/head';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { FC, useEffect, useState } from 'react';
import ModulDelete from '@/shared/AdminComponents/ModulDelete';
import { deleteRestaurant, getRestaurants, Restaurant } from '@/shared/AdminComponents/Services/axios'; 
import AdminModal from '@/shared/AdminComponents/AdminModal';

import AddRestaurantInputs from '@/shared/AdminComponents/AddRestaurantInputs';

const Restaurants: FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] = useState<Restaurant | null>(null);
  const[hidden,Sethidden]=useState(true)

  const handleDeleteButtonClick = (restaurant: Restaurant) => {
    setRestaurantToDelete(restaurant);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };
const hansleRestaurantClick=()=>{
  Sethidden(false)
}
  const handleDeleteConfirmed = async () => {
    if (!restaurantToDelete) return;
    try {
      await deleteRestaurant(restaurantToDelete.id);
      setRestaurants(restaurants.filter((res) => res.id !== restaurantToDelete.id));
    } catch (error) {
      console.log(error);
    }
    setIsDeleteModalOpen(false);
  };

  async function fetchRestaurants() {
    try {
      const res = await getRestaurants();
      setRestaurants(res?.data?.result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);




  return (
    <Box className='bg-darkBlue10 h-screen p-2'>
      <Box as='header'>
        <Head>
          <title>Restaurants</title>
          <MetaSeo title='Restaurants' desc='Restaurants Page' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <AdminModal hidden={hidden} Sethidden={Sethidden}addName={"Add Restuarant "} imgName={"Upload  image"} informationName={"Add your Restuarants information"} component={<AddRestaurantInputs/>}/>
      </Box>
      <Box as='main' className='flex'>
        <PushModul />
        <Box as='section' className='w-full mr-8'>
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-full px-8 mt-20 '
            borderRadius={16}
            height={73}
          >
            <Text color='white'>Restaurants</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Select
                bgColor='#5A5B70'
                borderRadius={14}
                width={200}
                height={35}
                placeholder='Select Category'
                mr='2'
              >
                {restaurants.map((restaurant, index) => (
                  <option key={index} value={restaurant.name}>
                    {restaurant.name}
                  </option>
                ))}
              </Select>
              <Box>
                <Button borderRadius={14} colorScheme='pink' onClick={hansleRestaurantClick}>
                  + ADD RESTAURANT
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box className='flex flex-wrap gap-4'>
            {restaurants?.map((restaurant) => (
              <Card
                key={restaurant.id}
                className='w-[247px] h-[83px] flex flex-col justify-center p-2'
                boxShadow='lg'
                borderRadius='lg'
              >
                <CardBody className='flex items-center p-0'>
                  <Image

                    // className='w-full'
                    // src='https://photos.prnewswire.com/prnfull/20151019/278424LOGO'
                    // alt='Green double couch with wooden legs'
                    // borderRadius='lg'

                    className='w-[65px] h-[65px] object-cover'
                    src={restaurant.img_url || 'https://media.traveler.es/photos/6137726a7ad90bc43bae0055/master/pass/123930.jpg'}
                    alt={restaurant.name}
                    borderRadius='md'

                  />
                  <Stack ml='2' spacing='1' flex='1'>
                    <Text fontSize='sm' fontWeight='bold'>
                      {restaurant.name}
                    </Text>
                    <Text fontSize='text-[5px]'>
                      Delivery Price: ${restaurant.delivery_price}
                    </Text>
                  </Stack>
                  <ButtonGroup
                    spacing='1'
                    flexDirection='column'
                    justifyContent='center'
                    ml='auto'
                  >
                    <IconButton
                      aria-label='Edit'
                      icon={<EditIcon />}
                      size='xs'
                      fontSize='12px'
                      variant='ghost'
                      colorScheme='teal'
                    />
                    <IconButton
                      aria-label='Delete'
                      icon={<DeleteIcon />}
                      size='xs'
                      fontSize='12px'
                      variant='ghost'
                      colorScheme='red'
                      onClick={() => handleDeleteButtonClick(restaurant)}
                    />
                  </ButtonGroup>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      {isDeleteModalOpen && (
        <ModulDelete isOpen={isDeleteModalOpen} onClose={handleCloseModal} onConfirm={handleDeleteConfirmed} />
      )}
    </Box>
  );
};

export default Restaurants;
