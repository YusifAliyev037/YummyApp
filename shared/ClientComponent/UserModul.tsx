import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserModul() {
  const { push, asPath } = useRouter();

  const isActive = (path: string) => (asPath === path ? 'redUserModul' : 'none');
  
  return (
    <Box
      as='section'
      className=' bg-white40 w-[325px] h-[525px] rounded-xl p-5 m-7 mt-4  hidden md:block '
    >
      <Box
        as='ul'
        className=' flex flex-col mt-8 '
      >
        <Button
          onClick={() => push('/user/')}
          className='flex gap-7 w-52 text-redUserModul  cursor-pointer hover:bg-redUserModul hover:w-52 '
      color='text-redUserModul'
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/user/'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='profile'
            height={18}
            src='/profile.svg'
            
          />
          Profile
        </Button>
        <Button
          onClick={() => push('/user/basket')}
          className='flex gap-7 w-52 text-userText justify-start cursor-pointer hover:bg-redUserModul  hover:w-52 '
          color='text-userText'
        
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/user/basket'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='basket'
            height={18}
            src='/basket.svg'
          />
          Your Basket
        </Button>
        <Button
          onClick={() => push('/user/orders')}
          className='flex gap-7 ju w-52  text-userText cursor-pointer hover:bg-redUserModul  hover:w-52 '
      color='text-userText'
         
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/user/orders'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='orders'
            height={18}
            src='/basket.svg'
          />
          Your Orders
        </Button>
        <Button
          onClick={() => push('/user/checkout')}
          className='flex gap-7 w-52  text-userText cursor-pointer hover:bg-redUserModul  hover:w-52'
          color='text-userText'
         
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/user/checkout'),
          }}
          as='li'
        >
          <Image
            width={18}
            alt='Checkout'
            height={18}
            src='/basket.svg'
          />
          Checkout
        </Button>
        <Button
          onClick={() => push('/user/logout')}
          className='flex gap-7 w-52  text-userText cursor-pointer hover:bg-redUserModul  hover:w-52'
          color='text-userText'
         
          style={{
            justifyContent: 'flex-start',
            backgroundColor: isActive('/user/logout'),
          
          }}
          as='li'
        >
          <Image
            width={18}
            alt='Logout'
            height={18}
            src='/basket.svg'
          />
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default UserModul;
