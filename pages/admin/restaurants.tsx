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
  CardFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import PushModul from '@/shared/AdminComponents/PushModul';
import MetaSeo from '@/shared/MetaSeo';
import Head from 'next/head';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'; 

const Restaurants = () => {
  const restaurantData = [
    {
      name: 'McDonalds',
      image: 'https://www.grani.lv/uploads/posts/2024-01/1706099015_the-worst-time-to-visit-mcdonalds-ft-blog0823-711a27313d1a448baf4db4817310ff5d.jpg',
      price: 7.99,
    },
    {
      name: 'Burger King',
      image: 'https://tb-static.uber.com/prod/image-proc/processed_images/798222427fa48dddae3250557266c5e1/16bb0a3ab8ea98cfe8906135767f7bf4.jpeg',
      price: 6.99,
    },
    {
      name: 'KFC',
      image: 'https://media.timeout.com/images/106069779/750/422/image.jpg',
      price: 11,
    },
    {
      name: 'Pizza Hut',
      image: 'https://media.licdn.com/dms/image/D5612AQEseMQvg67Q2w/article-cover_image-shrink_720_1280/0/1690024087256?e=2147483647&v=beta&t=c78RUA5HtGEpLDYFJQfw_NECJ6bCk0V7gcMHUNixuOo',
      price: 14.99,
    },
  ];

  return (
    <Box className='bg-darkBlue10 min-h-screen p-2'>
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
      <Box className='flex'>
        <PushModul />
        <Box className='w-full'>
          <MetaSeo title='Restaurants' desc='Restaurants Page' />
          <Box className='flex items-center mb-12 px-8 mt-20'>
            <Text color='white' className='mr-7'>Restaurants</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Select
                bgColor='#5A5B70'
                borderRadius={14}
                width={200}
                height={35}
                placeholder='Select category'
                mr='2'
              >
                <option value='Pizza'>Pizza</option>
                <option value='Burgers'>Burgers</option>
                <option value='Juices'>Juices</option>
              </Select>
              <Button borderRadius={14} colorScheme='pink'>+ ADD RESTAURANTS</Button>
            </InputGroup>
          </Box>
          <Box className='flex flex-wrap gap-4 justify-center'>
            {restaurantData.map((restaurant, index) => (
              <Card key={index} className='w-64'>
                <CardBody>
                  <Image src={restaurant.image} alt={restaurant.name} className='w-full h-48 object-cover rounded-lg' />
                  <Stack mt='6' spacing='3'>
                    <Text>{restaurant.name}</Text>
                    <Text>{restaurant.price}$</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue20' leftIcon={<EditIcon />} 
                    >
                  
                    </Button>
                    <Button variant='ghost' colorScheme='red' leftIcon={<DeleteIcon />} 
                    >
                     
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Restaurants;
