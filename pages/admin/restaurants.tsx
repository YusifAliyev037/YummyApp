import React from 'react';
import Header from '@/shared/AdminComponents/Header';
import {
  InputGroup,
  Button,
  Select,
  Text,
  Box,
  InputRightElement,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
} from '@chakra-ui/react';
import PushModul from '@/shared/AdminComponents/PushModul';
import MetaSeo from '@/shared/MetaSeo';
import Head from 'next/head';


const Restaurants = () => {
  return (
    <Box
      className='bg-darkBlue10'
      minHeight='100vh'
    >
      <Head>
        <title>Restaurants</title>
        <MetaSeo
          title='Dashboard'
          desc='Welcome to admin main page!'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />

      <Box className='flex my-4 mx-8'>
        <PushModul />

        <Box
          bg='#27283C'
          className='flex items-center w-5/6 px-8 '
          borderRadius={16}
          height={73}
        >
          <Text color='white'>Restaurants</Text>
          <InputGroup className='flex justify-end items-center gap-7'>
            <Select
              bgColor='#5A5B70'
              borderRadius={20}
              width={200}
              height={35}
              placeholder='Select category'
              mr='2'
            >
              <option value='Papa Johns'>Papa John's</option>
              <option value='Burger King'>Burger King</option>
              <option value='Mcdonalds'>McDonald's</option>
            </Select>
            <Box>
              <Button
                borderRadius={20}
                colorScheme='pink'

              >
                + ADD RESTAURANTS
              </Button>
            </Box>
          </InputGroup>
        </Box>
      </Box>

      <Box className='flex  items-center w-60 gap-7'>
        <Card>
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
  );
};

export default Restaurants;
