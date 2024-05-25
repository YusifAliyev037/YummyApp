import { Box, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { AdminModal1 } from './AdminModal1';

function Header() {
  const [hidden, setHidden] = useState(true);

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };
  const handleAddProductClick = () => {
    setHidden(false);
  };

  return (
    <Box className='flex justify-between fixed top-0 left-0 right-0 z-10 bg-darkBlue20 py-3 pl-5 pr-4 h-16 mx-6 rounded-b-xl'>
      <Box className=' flex items-center gap-4'>
        <Box>
          <Image
            className=' block md:hidden cursor-pointer'
            height={40}
            width={40}
            alt='hamburger'
            src='/ham.svg'
          />
        </Box>
        <Box>
          <Text
            className='font-extrabold text-[28px] text-white10'
            as='h1'
          >
            Yummy
            <span className='text-orange'>.</span>
          </Text>
        </Box>
      </Box>

      <Box className='flex gap-5 items-center'>
        <Box className=' flex items-center gap-3'>
          <Button
            size='xs'
            borderRadius='20px'
            colorScheme='pink'
            className='text-white10 '
            style={{ boxShadow: '0px 4px 4px 0px rgba(39, 174, 96, 0.2)' }}
            onClick={handleAddProductClick}
          >
            +<span className=' hidden md:block'>ADD PRODUCT</span>
          </Button>
          <Box>
            <Image
              className=' hidden md:block'
              width={41}
              height={41}
              src='/eng.svg'
              alt='English Language'
            />
          </Box>
          <Box>
            <Image
              width={41}
              height={41}
              src='/user.png'
              alt='User'
            />
          </Box>
        </Box>
        <Box>
          <Text className='text-white10 hidden md:block  '>Admin</Text>
        </Box>
      </Box>

     
      <AdminModal1
      onClickClose={changeHidden}
      mod='3'
      p='Add Product'
      p1='Upload  image'
      p2='Add your Product information'
      btn='Add Product'
      hidden={hidden}
      // ButtonOnClick={updateCategory}
      // categoryRef={categoryRef}
      // imgRef={imgRef}
      // slugRef={slugRef}
      // getImgUrl={getImgUrl}
      />
    </Box>
  );
}

export default Header;
