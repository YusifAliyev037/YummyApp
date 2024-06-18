import { translate } from '@/public/lang/translate';
import { Box, Button, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BsChat } from "react-icons/bs";


interface Props {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const PushModul: React.FC=()=> {
  const { push, asPath } = useRouter();


  const isActive = (path: string) => (asPath === path ? '#d25ff5' : 'none');
  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';


  return (
    <Box
      as='section'
      className='mt-20 bg-pink10 w-64 rounded-xl h-96 p-5 m-5  hidden md:block '
    >
      
      <Box
        as='ul'
        className=' w-64 flex flex-col  '
      >
        <Button
          onClick={() => push('/admin')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52 '
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/dashboard.svg'
          />
          {translate("Dashboard",locale)}
          
        </Button>
        <Button
          onClick={() => push('/admin/products')}
          className='flex gap-7 w-52 text-pink20 justify-start cursor-pointer hover:bg-pink30 hover:w-52 '
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/products'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/products.svg'
          />
           {translate("Products",locale)}
         
        </Button>
        <Button
          onClick={() => push('/admin/restaurants')}
          className='flex gap-7 ju w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52 '
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/restaurants'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/restaurants.svg'
          />
           {translate("Restaurants",locale)}

          
        </Button>
        <Button
          onClick={() => push('/admin/category')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52'
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/category'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/category.svg'
          />
           {translate("Category",locale)}

          
        </Button>
        <Button
          onClick={() => push('/admin/orders')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52'
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/orders'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/orders.svg'
          />
           {translate("Orders",locale)}

          
        </Button>
        <Button
          onClick={() => push('/admin/chat')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52'
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/chat'),
          }}
          as='li'
        >
          
          <Icon as={BsChat} w={5} h={5} />
           {translate("Chats",locale)}

          
        </Button>
        <Button
          onClick={() => push('/admin/history')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52'
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/history'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/offer.svg'
          />
           {translate("History",locale)}

          
        </Button>
        <Button
          onClick={() => push('/admin/offer')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52'
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/offer'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/offer.svg'
          />
           {translate("Offer",locale)}

          
        </Button>
        <Button
          onClick={() => push('/admin/login')}
          className='flex gap-7 w-52 text-pink20 cursor-pointer hover:bg-pink30 hover:w-52'
          colorScheme='none'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/admin/login'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='products'
            height={18}
            src='/logout.svg'
          />
           {translate("Logout",locale)}

          
        </Button>
      </Box>
    </Box>
  );
}

export default PushModul;
