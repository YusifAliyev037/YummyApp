
import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CategoryType } from '../AdminComponents/TableCategory';

function RestaurantNavbar() {
    const {  asPath } = useRouter();

    const isActive = (path: string) => (asPath === path ? '#FFB5A5' : 'none');
  
    const category: CategoryType[] = useSelector((state: any) => state.global.category);
    console.log(category);
    
    return (
      <Box
        as='section'
        className='bg-white40 rounded-xl p-5 m-7 mt-4 '
        width='250px'
        height='650px'
      >
        <Box as='ul' className='flex flex-col mt-8'>
          <Box mb='26px'>
          {category.map((item, index) =>(
                
           
          <Button
            key={index}
            className='flex gap-4 w-52 text-black300 cursor-pointer hover:bg-redUserModul10 hover:w-52'
            color='text-redUserModul'
            style={{
              justifyContent: 'flex-start',
              backgroundColor: isActive('/user'),
            }}
            as='li'
          >
            <Image width={18} alt='profile' height={18} src='/rest.svg' />
            {item.name}
          </Button>
        ))}
          </Box>
       
          
        </Box>
      </Box>
    );

}

export default RestaurantNavbar