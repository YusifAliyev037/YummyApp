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
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModulDelete from '@/shared/AdminComponents/ModulDelete';
import AdminModal from '@/shared/AdminComponents/AdminModal';
import EditRestaurantModal from '@/shared/AdminComponents/EditRestaurantModal';
import AddRestaurantInputs from '@/shared/AdminComponents/AddRestaurantInputs';
import {
  setRestaurants,
  removeRestaurant as removeRestaurantAction,
  setIsDeleteModalOpen,
  setRestaurantToDelete,
  Sethidden,
  setEditRestaurantModalHidden,
} from '@/shared/redux/global/globalSlice';
import { RootState } from '@/shared/redux/store';
import { deleteRestaurant, getRestaurants, Restaurant } from '@/shared/AdminComponents/Services/axios';


const Restaurants: FC = () => {
  const dispatch = useDispatch();

  const restaurants = useSelector((state: RootState) => state.global.restaurant);
  const isDeleteModalOpen = useSelector((state: RootState) => state.global.isDeleteModalOpen);
  const restaurantToDelete = useSelector((state: RootState) => state.global.restaurantToDelete);
  const hidden = useSelector((state: RootState) => state.global.hidden);
  const editRestaurantModalHidden = useSelector((state: RootState) => state.global.editRestaurantModalHidden);


  const handleDeleteButtonClick = (restaurant: Restaurant) => {
    dispatch(setRestaurantToDelete(restaurant));
    dispatch(setIsDeleteModalOpen(true));
  };

  const handleCloseModal = () => {
    dispatch(setIsDeleteModalOpen(false));
  };

  const handleRestaurantClick = () => {
    dispatch(Sethidden(false));
  };

  const handleEditRestaurantClick = () => {
    dispatch(setEditRestaurantModalHidden(false));
  };

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
    <Box className="bg-darkBlue10 min-h-screen">
      <Box as="header">
        <Head>
          <title>Restaurants</title>
          <MetaSeo title="Restaurants" desc="Restaurants Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <AdminModal
          hidden={hidden}
          Sethidden={(value: boolean | ((prev: boolean) => boolean)) => dispatch(Sethidden(typeof value === 'function' ? value(hidden) : value))}
          addName={"Add Restaurant"}
          imgName={"Upload image"}
          informationName={"Add your Restaurant's information"}
          component={<AddRestaurantInputs />}
        />
        <AdminModal
          hidden={editRestaurantModalHidden}
          Sethidden={(value: boolean | ((prev: boolean) => boolean)) => dispatch(setEditRestaurantModalHidden(typeof value === 'function' ? value(editRestaurantModalHidden) : value))}
          addName={"Edit Restaurant"}
          imgName={"Upload Image"}
          informationName={"Edit your Restaurant's information"}
          component={<EditRestaurantModal />}
        />
      </Box>
      <Box as="main" className="flex flex-col md:flex-row">
        <PushModul />
        <Box as="section" className="w-full md:mr-8">
          <Box
            bg="#27283C"
            className="relative flex flex-col md:flex-row items-center mb-12 w-full px-8 mt-20 rounded-xl"
            height={73}
          >
            <Text color="white" className="absolute left-8 md:relative mb-2 md:bottom-auto md:left-auto w-32 md:mb-0">
              Restaurants
            </Text>
            <InputGroup className="flex flex-wrap justify-end items-center gap-7 w-full md:w-auto mt-4 md:mt-0">
              <Select
                bgColor="#5A5B70"
                borderRadius={14}
                width={200}
                height={35}
                placeholder="Select Category"
                className="hidden md:block w-full md:w-auto"
              >
                {restaurants.map((restaurant, index) => (
                  <option key={index} value={restaurant.name}>
                    {restaurant.name}
                  </option>
                ))}
              </Select>
              <Box className="w-full md:w-auto">
                <Button borderRadius={14} colorScheme="pink" onClick={handleRestaurantClick} className="w-full md:w-auto">
                  + ADD RESTAURANT
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box className="flex flex-wrap gap-4">
            {restaurants?.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="w-full md:w-[247px] h-[83px] flex flex-col justify-center p-2"
                boxShadow="lg"
                borderRadius="lg"
              >
                <CardBody className="flex items-center p-0">
                  <Image
                    className="w-[65px] h-[65px] object-cover"
                    src={restaurant.img_url || 'https://media.traveler.es/photos/6137726a7ad90bc43bae0055/master/pass/123930.jpg'}
                    alt={restaurant.name}
                    borderRadius="md"
                  />
                  <Stack ml="2" spacing="1" flex="1">
                    <Text fontSize="sm" fontWeight="bold">
                      {restaurant.name}
                    </Text>
                    <Text fontSize="text-[5px]">
                      Delivery Price: ${restaurant.delivery_price}
                    </Text>
                  </Stack>
                  <ButtonGroup
                    spacing="1"
                    flexDirection="column"
                    justifyContent="center"
                    ml="auto"
                  >
                    <IconButton
                      aria-label="Edit"
                      icon={<EditIcon />}
                      size="xs"
                      fontSize="12px"
                      variant="ghost"
                      colorScheme="teal"
                      onClick={handleEditRestaurantClick}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                      size="xs"
                      fontSize="12px"
                      variant="ghost"
                      colorScheme="red"
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
