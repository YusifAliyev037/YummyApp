import MetaSeo from '@/shared/MetaSeo';
import { Image } from '@chakra-ui/next-js';
import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import {
  FormRegister,
  completeLogin,
} from '@/shared/AdminComponents/Services/axios';

import { useDispatch } from 'react-redux';
import { addlogin } from '@/shared/redux/global/globalSlice';
import { translate } from '@/public/lang/translate';

interface FormValues {
  email: string | undefined;
  password: string | undefined;
}

const Login: React.FC = () => {
  const [passwordShow, setpasswordShow] = useState(false);
  const dispatch = useDispatch();
  console.log(passwordShow);

  const toast = useToast();

  const { push }: { push: Function } = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const date: Date | any = new Date();

  const [showDropdown, setShowDropdown] = useState(false);

  type token = {
    access_token: string;
    refresh_token: string;
  };

  let tokenObj: token = JSON.parse(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('tokenObj') ?? '{}'
      : '{}'
  );

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      login();
    }
  };

  async function login() {
    const email = emailRef?.current?.value;

    const password = passwordRef?.current?.value;
    console.log('ss');

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    if (!email || !password) {
      toast({
        title: 'Please full in all inputs!',
        status: 'warning',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });

      return;
    } else if (!emailRegex.test(email)) {
      toast({
        title: 'Please enter a valid email adress!',
        status: 'warning',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      return;
    }

    const form: FormRegister = {
      email,
      password,
    };

    const res = await completeLogin(form);

    dispatch(addlogin(res?.data?.user));

    if (res?.status === 200) {
      localStorage.setItem('loginDate', date.getTime());
      toast({
        title: 'Logged in successfully!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      tokenObj = {
        access_token: res.data.user.access_token,
        refresh_token: res.data.user.refresh_token,
      };

      localStorage.setItem('tokenObj', JSON.stringify(tokenObj));
      localStorage.setItem('userInfo', JSON.stringify(res?.data.user));

      console.log('tokenObj', tokenObj);

      if (emailRef.current && passwordRef.current) {
        emailRef.current.value = '';
        passwordRef.current.value = '';
      }

      setTimeout(() => {
        push('/');
      }, 200);
      return;
    }

    return;
  }

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  let router = useRouter();

  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';

    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || 'en';

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem('lang', locale);
    setShowDropdown(false);
  };

  return (
    <Box>
      <Box className="ml-0 mr-0 md:m-[33px] flex flex-col md:gap-[20px]">
        <Head>
          <title>{translate('Client Login', locale)}</title>
          <MetaSeo
            title={translate('Client Login')}
            desc='Welcome to Client Login!'
          />
          <link
            rel='icon'
            href='/burger.ico'
          />
        </Head>
        <header  className='bg-pink40 flex items-center md:h-[122px] justify-between h-[59px]  md:w-auto w-[100%]   '>
          <Text className='font-mukta font-extrabold ml-9 md:text-3xl text--2xl leading-6 tracking-wide text-white pl-[36px ]'>
            {translate('Yummy.', locale)}
          </Text>

          <div className='relative flex items-center mr-8'>
            <div
              className={`cursor-pointer flex items-center ${
                showDropdown ? 'active' : ''
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={`/${
                  locale === 'en'
                    ? 'usuk.png'
                    : locale === 'az'
                    ? 'azerbaijan.png'
                    : locale === 'tr'
                    ? 'tr.png'
                    : locale === 'de'
                    ? 'de.png'
                    : locale === 'ru'
                    ? 'russian.png'
                    : 'is.png'
                }`}
                alt={
                  locale === 'en'
                    ? 'us'
                    : locale === 'az'
                    ? 'Az'
                    : locale === 'tr'
                    ? 'Turk'
                    : locale === 'de'
                    ? 'Ger'
                    : locale === 'ru'
                    ? 'Rus'
                    : 'Isp'
                }
                className='w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110'
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className='absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50'>
                  <img
                    src='/usuk.png'
                    alt='us'
                    className='w-12 h-10 rounded-full mb-2'
                    onClick={() => changeLanguage('en')}
                  />
                  <img
                    src='/azerbaijan.png'
                    alt='Az'
                    className='w-12 h-10 rounded-full mb-2'
                    onClick={() => changeLanguage('az')}
                  />
                  <img
                    src='/tr.png'
                    alt='Turk'
                    className='w-12 h-10 rounded-full mb-2'
                    onClick={() => changeLanguage('tr')}
                  />
                  <img
                    src='/de.png'
                    alt='Ger'
                    className='w-12 h-10 rounded-full mb-2'
                    onClick={() => changeLanguage('de')}
                  />
                  <img
                    src='/is.png'
                    alt='Isp'
                    className='w-12 h-10 rounded-full mb-2'
                    onClick={() => changeLanguage('is')}
                  />
                  <img
                    src='/russian.png'
                    alt='Rus'
                    className='w-12 h-10 rounded-full mb-2 cursor-pointer'
                    onClick={() => changeLanguage('ru')}
                  />
                </div>
              )}
            </div>
          </div>
        </header>

        <Box
          width={'100%'}
         className="flex flex-col md:flex-row items-center p-[12px] "
        >
          <Box
            width={{ base: "100%", md: "55%" }}
             height={{ base: "160px", md: "auto" }} 
            className='bg-pink40 flex items-center justify-center w-[55%] '
          >
            <img
              src='/loginclient.svg'
              className='md:w-[75%] w-[55%] '
            />
          </Box>

          <Box width={{ base: '100%', md: '45%' }}>
            <Box className='md:ml-[39px] pt-[40px]  '>
              <Box  className='flex justify-center md:gap-[65px] gap-[34px] md:pb-[72px] pb-[44px] '>
                <Text className='font-roboto text-lg font-medium leading-6 tracking-wide text-pink40 cursor-pointer  '>
                  {translate('Login', locale)}
                </Text>

                <Text
                  onClick={() => router.push('/login/register')}
                  color={'#828282'}
                  className='font-roboto text-lg font-normal leading-6 tracking-wide cursor-pointer '
                >
                  {translate(' Register')}
                </Text>
              </Box>

              <Box
                onKeyDown={handleKeyDown}
             
                className='flex flex-col md:gap-[67px] gap-[48px]'
              >
                <Box  className='flex flex-col gap-[30px]  '   width={{ base: '98%', md: 'auto' }} >
                  <Box  >
                    <Text
                      color={'#4F4F4F'}
                      className='font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  '
                    >
                      {translate('Email', locale)}
                    </Text>
                    <Input
                      ref={emailRef}
                      name='email'
                      borderRadius={'5px'}
                      backgroundColor={'#FFE7E7'}
                      height={{ base: '48px', md: '68px' }}
                     
                    
                      
                      
                    />
                  </Box>
                  <Box position='relative'>
                    <Text
                      color='#4F4F4F'
                      className='font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]'
                    >
                      {translate('Password')}
                    </Text>
                    <Flex position='relative'>
                      <Input
                        ref={passwordRef}
                        name='password'
                        borderRadius='5px'
                        backgroundColor='#FFE7E7'
                        
                        type={passwordShow ? 'text' : 'password'}
                        height={{ base: '48px', md: '68px' }}
                      />
                      <img
                        onClick={() => setpasswordShow(!passwordShow)}
                        src='/showlogin.svg'
                        alt=''
                        className='absolute  top-1/2 transform -translate-y-1/2 right-4 cursor-pointer w-[32px] h-[20px]'
                      />
                    </Flex>
                  </Box>
                </Box>
                <Button
                  onClick={login}
                  backgroundColor={'#EB5757'}
                  color={'#FFFFFF'}
                  fontWeight={'500'}
                  size={'22px'}
                  lineHeight={'22px'}
                  width={'100%'}
                  height={{ base: '48px', md: '68px' }}
                >
                  {translate('Login', locale)}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
