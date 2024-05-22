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
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModulDelete from '@/shared/AdminComponents/ModulDelete';

import {
  setRestaurants,
  removeRestaurant as removeRestaurantAction,
  setIsDeleteModalOpen,
  setRestaurantToDelete,
  setHidden,
  setEditRestaurantModalHidden,
} from '@/shared/redux/global/globalSlice';
import { RootState } from '@/shared/redux/store';
import {
  deleteRestaurant,
  getRestaurants,
  Restaurant,
  AddRestaurant
} from '@/shared/AdminComponents/Services/axios';
import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1';

const Restaurants: FC = () => {
  const dispatch = useDispatch();
  const categoryIdRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cuisineRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const deliveryMinRef = useRef<HTMLInputElement>(null);
  const resNameRef = useRef<HTMLInputElement>(null);
  const [hidden, setHidden] = useState(true);
  const [imgUrl, setImgUrl] = useState<string>('');

  const restaurants = useSelector(
    (state: RootState) => state.global.restaurant
  );
  const isDeleteModalOpen = useSelector(
    (state: RootState) => state.global.isDeleteModalOpen
  );
  const restaurantToDelete = useSelector(
    (state: RootState) => state.global.restaurantToDelete
  );

  const handleDeleteButtonClick = (restaurant: Restaurant) => {
    dispatch(setRestaurantToDelete(restaurant));
    dispatch(setIsDeleteModalOpen(true));
  };

  const handleCloseModal = () => {
    dispatch(setIsDeleteModalOpen(false));
  };

  const changeHidden = (): void => {
    setHidden((prev: Boolean) => !prev);
  };
  const handleEditRestaurantClick = () => {
    dispatch(setEditRestaurantModalHidden(false));
  };
  const handleRestaurantClick = () => setHidden(false);

  function getImgUrl(url: string): void {
    setImgUrl(url);
  }

  const handleDeleteConfirmed = async () => {
    if (!restaurantToDelete) return;
    try {
      await deleteRestaurant(restaurantToDelete.id);

      const updatedRestaurants = restaurants.filter(
        (restaurant) => restaurant.id !== restaurantToDelete.id
      );

      dispatch(setRestaurants(updatedRestaurants));
    } catch (error) {
      console.log(error);
    }
    dispatch(setIsDeleteModalOpen(false));
  };

  const handleCreateRestaurant = async () => {
    const newRestaurant = {
      name: resNameRef.current?.value,
      address: addressRef.current?.value,
      category_id: categoryIdRef.current?.value,
      cuisine: cuisineRef.current?.value,
      price: priceRef.current?.value,
      delivery_min: deliveryMinRef.current?.value,
      img_url: imgUrl,
    };

    try {
      const response = await AddRestaurant(newRestaurant);
      dispatch(setRestaurants([...restaurants, response.data]));
      setHidden(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const res = await getRestaurants();
        dispatch(setRestaurants(res?.data?.result.data || []));
      } catch (error) {
        console.log(error);
      }
    }
    fetchRestaurants();
  }, [dispatch]);

  return (
    <Box className='bg-darkBlue10 min-h-screen'>
      <Box as='header'>
        <Head>
          <title>Restaurants</title>
          <MetaSeo
            title='Restaurants'
            desc='Restaurants Page'
          />
          <link
            rel='icon'
            href='/favicon.ico'
          />
        </Head>
        <Header />
        <AdminModal1
          mod='2'
          p='Add Restaurant  '
          p1='Upload  image'
          p2='Add your Restaurant information'
          btn='Create Restaurant'
          getImgUrl={getImgUrl}
          hidden={hidden}
          onClickClose={changeHidden}
          categoryIdRef={categoryIdRef}
          addressRef={addressRef}
          cuisineRef={cuisineRef}
          priceRef={priceRef}
          deliveryMinRef={deliveryMinRef}
          resNameRef={resNameRef}
          onButtonClick={handleCreateRestaurant} 
        />
        {/* <AdminModal1
          hidden={editRestaurantModalHidden}
          SetHidden={(value: boolean | ((prev: boolean) => boolean)) =>
            dispatch(
              setEditRestaurantModalHidden(
                typeof value === 'function'
                  ? value(editRestaurantModalHidden)
                  : value
              )
            )
          }
          addName={'Edit Restaurant'}
          imgName={'Upload Image'}
          informationName={"Edit your Restaurant's information"}

          mod='2'
          p='Add Restaurant  '
          p1='Upload  image'
          p2='Add your Restaurant information'
          btn='Create Restaurant'
          hidden={hidden}
          // // ButtonOnClick={addCategory}
          categoryIdRef={categoryIdRef}
          addressRef={addressRef}
          cuisineRef={cuisineRef}
          priceRef={priceRef}
          deliveryMinRef={deliveryMinRef}
          resNamRef={resNameRef}
        /> */}
      </Box>
      <Box
        as='main'
        className='flex flex-col md:flex-row'
      >
        <PushModul />
        <Box
          as='section'
          className='w-full md:mr-8'
        >
          <Box
            bg='#27283C'
            className='relative flex flex-col md:flex-row items-center mb-12 w-full px-8 mt-20 rounded-xl'
            height={73}
          >
            <Text
              color='white'
              className='absolute left-8 md:relative mb-2 md:bottom-auto md:left-auto w-32 md:mb-0'
            >
              Restaurants
            </Text>
            <InputGroup className='flex flex-wrap justify-end items-center gap-7 w-full md:w-auto mt-4 md:mt-0'>
              <Select
                bgColor='#5A5B70'
                borderRadius={14}
                width={200}
                height={35}
                placeholder='Select Category'
                className='hidden md:block w-full md:w-auto'
              >
                {restaurants.map((restaurant, index) => (
                  <option
                    key={index}
                    value={restaurant.name}
                  >
                    {restaurant.name}
                  </option>
                ))}
              </Select>
              <Box className='w-full md:w-auto'>
                <Button
                  borderRadius={14}
                  colorScheme='pink'
                  onClick={handleRestaurantClick}
                  className='w-full md:w-auto'
                >
                  + ADD RESTAURANT
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box className='flex flex-wrap gap-4'>
            {restaurants?.map((restaurant) => (
              <Card
                key={restaurant.id}
                className='w-full md:w-[247px] h-[83px] flex flex-col justify-center p-2'
                boxShadow='lg'
                borderRadius='lg'
              >
                <CardBody className='flex items-center p-0'>
                  <Image
                    className='w-[65px] h-[65px] object-cover'
                    src={
                      restaurant.img_url ||
                      'https://media.traveler.es/photos/6137726a7ad90bc43bae0055/master/pass/123930.jpg'
                    }
                    alt={restaurant.name}
                    borderRadius='md'
                  />
                  <Stack
                    ml='2'
                    spacing='1'
                    flex='1'
                  >
                    <Text
                      fontSize='sm'
                      fontWeight='bold'
                    >
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
                      onClick={handleEditRestaurantClick}
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
        <ModulDelete
          isOpen={isDeleteModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleDeleteConfirmed}
        />
      )}
    </Box>
  );
};

export default Restaurants;
