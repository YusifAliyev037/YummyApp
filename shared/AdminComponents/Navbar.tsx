import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box,Button, Icon, Text } from "@chakra-ui/react";
import { translate } from "@/public/lang/translate";
import { BsChat } from "react-icons/bs";



interface Props {

  hidden?: boolean;
 
  onClickClose?: () => void;
  
}

export const Navbar = ({
  
  hidden = true,
  
  onClickClose,
 
 
}: Props) => {
    const { push, asPath } = useRouter();

  const isActive = (path: string) => (asPath === path ? '#d25ff5' : 'none');
  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';
  


  return (
    <div
      className={` fixed  z-10  w-3/4 sm:w-3/4    sm:pl-12 ${
        hidden ? "  -left-full" : "left-0"
      }  transition-all duration-500 top-0 h-screen`}
      
    >
      <div className=" bg-pink10   flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14  max-h-screen   overflow-y-auto h-screen">
        <Box className=" flex gap-10 items-center">

      <button
        onClick={onClickClose}
        
        className=" mb-10    right-5 sm:left-0  "
      >
        <Image
        className="  rounded-full    absolute   sm:left-0  top-9 w-7 h-7 cursor-pointer"
        
        alt="close-icon" height={10} width={10} src='/closeNavbar.svg' />
      </button>
      <Box >
          <Text className="font-extrabold text-[28px] text-white10 "  as="h1">
            Yummy
            <span className="text-orange">.</span>
          </Text>
        </Box>
        </Box>
        
      <Box
        as='ul'
        className=' w-64 flex flex-col gap-4  '
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

        <div className="flex   flex-col   lg:flex-row  w-full mb-36">
          
         
        </div>

        
      </div>
    </div>
  );
};