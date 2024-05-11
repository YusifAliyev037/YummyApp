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
import Modul from '@/shared/AdminComponents/Modul';
import React, { useState } from 'react';

const Restaurants = () => {
    const [showModul, setShowModul] = useState(false);

    const handleAddRestaurantClick = () => {
      setShowModul(true);
    };
  return (
    <Box className=' bg-darkBlue10 h-screen p-2'>
    <Box as='header'>
    <Head>
      <title>Restaurants</title>
     <MetaSeo title="Restaurants" desc="Restaurants Page"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    </Box>
    <Box as='main' className='flex  '>
    <PushModul />
    {showModul && <Modul />}

    <Box as='section' className='w-full'>
    <Box
        bg='#27283C'
        className='flex items-center mb-12 w-5/5 px-8 mt-20 '
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
            placeholder='Select category'
            mr='2'
          >
            <option value='Piiza'>Pizza</option>
            <option value='Burgers'>Burgers</option>
            <option value='Juices'>Juices</option>
          </Select>
          <Box>
          <Button
          borderRadius={14}
          colorScheme='pink'
          onClick={handleAddRestaurantClick}
        >
          + ADD RESTAURANTS
        </Button>
          </Box>
        </InputGroup>
      </Box>
      <Card className='h-72 w-48'>
    <CardBody>
      <Image
        className='w-full'
        src='https://photos.prnewswire.com/prnfull/20151019/278424LOGO'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack
        mt='6'
        spacing='3'
      ></Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button
          variant='solid'
          colorScheme='blue'
        >
          Edit
        </Button>
        <Button
          variant='ghost'
          colorScheme='red'
        >
          Delete
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
    </Box>
    </Box>
  </Box>
  );
};

export default Restaurants;
