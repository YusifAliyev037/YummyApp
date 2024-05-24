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
  useToast,
} from '@chakra-ui/react';
import PushModul from '@/shared/AdminComponents/PushModul';
import MetaSeo from '@/shared/MetaSeo';
import Head from 'next/head';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModulDelete from '@/shared/AdminComponents/ModulDelete';

import {
  fillRestaurants,
  removeRestaurant as removeRestaurantAction,
  setIsDeleteModalOpen,
  setRestaurantToDelete,
  setHidden,
  setEditRestaurantModalHidden,
} from '@/shared/redux/global/globalSlice';
import { RootState } from '@/shared/redux/store';
import {
  Form,
  deleteRestaurant,
  getRestaurants,
  Restaurant,
  AddRestaurant,
  getCategories
} from '@/shared/AdminComponents/Services/axios';
import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1';

const Restaurants: FC = () => {

  const toast = useToast()

  const dispatch = useDispatch();

  const [data, setData] = useState<Restaurant[]>([]);
  const [data2, setData2] = useState<Restaurant[]>([]);
  const [hidden, setHidden] = useState<boolean>(true);
  const [resCategoryARR, setResCategoryARR] = useState<string[]>([]);
  console.log(resCategoryARR);

  const restaurants: Restaurant[] = useSelector((state: RootState) => state.global.restaurant) || [];
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
    setHidden((prev) => !prev);
  };

  async function fetchRestaurants() {
    try {
      const res = await getRestaurants();
      const categoryArr = res?.data.result.data;
      setData(categoryArr);
      setData2(categoryArr);
      dispatch(fillRestaurants(categoryArr)); // Ensure categoryArr is an array
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const categoryIdRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cuisineRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const deliveryMinRef = useRef<HTMLInputElement>(null);
  const ImgRef = useRef<HTMLInputElement>(null);
  const resNameRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string>('');

  function getImgUrl(url: string): void {
    setImgUrl(url);
  }

  async function handleCreateRestaurant() {
    const resName: any = resNameRef.current?.value;
    const address: any = addressRef.current?.value;
    const category_id: any = categoryIdRef.current?.value;
    const cuisine: any = cuisineRef.current?.value;
    const price: any = priceRef.current?.value;
    const delivery_min: any = deliveryMinRef.current?.value;
    const img_url: any = imgUrl;

    if (!isInputValid(
      resName,
      address,
      category_id,
      cuisine,
      price,
      delivery_min,
      img_url
    )) {
      toast({
        title: "Please fill all the inputs!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
      return
    }

    const form: Restaurant = {
      name: resName,
      category_id: category_id,
      img_url: img_url,
      cuisine: cuisine,
      delivery_min: delivery_min,
      delivery_price: price,
      address: address,
    };

    try {
      const res = await AddRestaurant(form);

      if (res?.status === 201) {
        dispatch(fillRestaurants(res.data));
        if (
          resNameRef?.current &&
          cuisineRef?.current &&
          categoryIdRef?.current &&
          deliveryMinRef?.current &&
          priceRef?.current &&
          addressRef?.current
        ) {
          resNameRef.current.value = "";
          cuisineRef.current.value = "";
          categoryIdRef.current.value = "";
          deliveryMinRef.current.value = "";
          priceRef.current.value = "";
          addressRef.current.value = ""
        }

        setTimeout(() => {
          changeHidden()
        }, 500);
        toast({
          title: "Restaurant created successfully!",
          status: "success",
          duration: 2000,
          position: "top-right",
          variant: "subtle"
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred while adding the restaurant.",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
    }
  }

  const handleRestaurantClick = () => setHidden(false);

  const handleDeleteConfirmed = async () => {
    if (!restaurantToDelete) return;
    try {
      await deleteRestaurant(restaurantToDelete.id);

      const updatedRestaurants = restaurants.filter(
        (restaurant) => restaurant.id !== restaurantToDelete.id
      );

      dispatch(fillRestaurants(updatedRestaurants));
    } catch (error) {
      console.log(error);
    }
    dispatch(setIsDeleteModalOpen(false));
  };

  function isInputValid(
    resName: string,
    address: string,
    category_id: number | undefined,
    cuisine: string,
    price: number,
    delivery_min: number,
    img_url: any
  ): boolean {
    return (
      !!resName &&
      !!address &&
      !!category_id &&
      !!cuisine &&
      !!price &&
      !!delivery_min &&
      !!img_url
    )
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;

    if (value == "all") {
      dispatch(fillRestaurants(data2));
      return
    }

    let newValue = data2.filter((item: any) => item?.category_id == value)

    dispatch(fillRestaurants(newValue))
  }

  async function catigoriesRender2() {
    try {
      const response = await getCategories();
      const categoryArr = response?.data.result.data;

      let items = categoryArr.map((item: any) => item.name)

      setResCategoryARR(items)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    catigoriesRender2()
  }, [])

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
          arr={resCategoryARR}
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
          ButtonOnClick={handleCreateRestaurant}
          imgRef={ImgRef}
        />
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
                onChange={handleSelectChange}
              >
                {Array.isArray(restaurants) && restaurants.map((restaurant, index) => (
                  <option
                    key={index}
                    value={restaurant.category_id}
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
            {Array.isArray(restaurants) && restaurants.map((restaurant) => (
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
                      // onClick={handleEditRestaurantClick}
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
