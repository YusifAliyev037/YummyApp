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
  Divider,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import PushModul from '@/shared/AdminComponents/PushModul';
import MetaSeo from '@/shared/MetaSeo';
import Head from 'next/head';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { FC, useEffect, useState } from 'react';
import ModulDelete from '@/shared/AdminComponents/ModulDelete';
import { getRestaurants } from '@/shared/AdminComponents/Services/axios';

export type Restaurant = {
  id?: string;
  name?: string;
  address?: string;
  img_url?: string;
  cuisine?: string;
  delivery_min?: number;
  delivery_price?: number;
};

const Restaurants: FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteButtonClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
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
      </Box>
      <Box as='main' className='flex'>
        <PushModul />
        <Box as='section' className='w-full'>
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-full px-8 mt-20 mr-8'
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
                <option value='Pizza'>Pizza</option>
                <option value='Burgers'>Burgers</option>
                <option value='Juices'>Juices</option>
              </Select>
              <Box>
                <Button borderRadius={14} colorScheme='pink'>
                  + Add Restaurants
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
                    className='w-[65px] h-[65px] object-cover'
                    src={restaurant.img_url || '/default-image.jpg'}
                    alt={restaurant.name}
                    borderRadius='md'
                  />
                  <Stack ml='2' spacing='1' flex='1'>
                    <Text fontSize='sm' fontWeight='bold'>
                      {restaurant.name}
                    </Text>
                    {/* <Text fontSize='text-[5px]'>{restaurant.address}</Text> */}
                    {/* <Text fontSize='text-[5px]'>Cuisine: {restaurant.cuisine}</Text> */}
                    <Text fontSize='text-[5px]'>
                      {/* Delivery Min: {restaurant.delivery_min} min */}
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
                      onClick={handleDeleteButtonClick}
                    />
                  </ButtonGroup>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      {isDeleteModalOpen && (
        <ModulDelete isOpen={isDeleteModalOpen} onClose={handleCloseModal} />
      )}
    </Box>
  );
};

export default Restaurants;
