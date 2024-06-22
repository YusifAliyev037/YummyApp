import { translate } from '@/public/lang/translate';
import { postRegisterData } from '@/shared/AdminComponents/Services/axios';
import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))


interface FormValues {
  email?: string | undefined;
  password?: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
}

const register: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [passwordShow, setpasswordShow] = useState(false);

  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    fullname: '',
    username: '',
  });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addData();
    }
  };
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail(email: string): boolean {
    return emailRegex.test(email);
  }
  const toast = useToast();

  console.log(formValues);
  function addData() {
    if (formValues.fullname?.length == 0 || formValues.username?.length == 0) {
      console.log('bosu');
      toast({
        title: 'Username or fullname field is empty',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
      return;
    } else if (
      (formValues.fullname?.length !== 0 &&
        formValues.username?.length !== 0 &&
        formValues.email &&
        validateEmail(formValues.email) == false) ||
      formValues.email?.length == 0
    ) {
      toast({
        title: 'Invalid email format',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    } else if (
      (formValues.fullname?.length !== 0 &&
        formValues.username?.length !== 0 &&
        formValues.email &&
        validateEmail(formValues.email) &&
        formValues.password &&
        formValues.password?.length < 6) ||
      formValues.password?.length == 0
    ) {
      console.log('Szs');

      toast({
        title: 'Password must be at least 6 characters long',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    } else if (
      formValues.fullname?.length !== 0 &&
      formValues.username?.length !== 0 &&
      formValues.email &&
      validateEmail(formValues.email) &&
      formValues.password &&
      formValues.password?.length > 6
    ) {
      postRegisterData(formValues)
        .then((res) => {
          if (res && res.status === 201) {
            toast({
              title: 'Success',
              status: 'success',
              isClosable: true,
              position: 'top-right',
            });

            setFormValues({
              email: '',
              password: '',
              fullname: '',
              username: '',
            });
            router.push('/login');
          } else {
            toast({
              title: 'Error',
              description: 'An error occurred while sending data',
              status: 'error',
              isClosable: true,
              position: 'top-right',
            });
          }
        })
        .catch((error) => {
          toast({
            title: 'Error',
            description: 'An error occurred while sending data',
            status: 'error',
            isClosable: true,
            position: 'top-right',
          });
        });
    }
  }

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  let router = useRouter();

  const changeLanguage = (locale: string) => {
    if (router.locale !== locale) {
      router.push(router.pathname, router.asPath, { locale });
      localStorage.setItem('lang', locale);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';

  return (
    <Box>
      <Box className='ml-0 mr-0 md:m-[33px] flex flex-col md:gap-[20px]'>
        <Head>
          <title>{translate('Client Register', locale)}</title>
          <MetaSeo
            title={translate('Client Register')}
            desc='Welcome to Client Login!'
          />
          <link
            rel='icon'
            href='/burger.ico'
          />
        </Head>
        <header className='bg-pink40 flex items-center md:h-[122px] justify-between h-[59px]  md:w-auto w-[100%]  '>
          <Text className='font-mukta font-extrabold ml-9 md:text-3xl text--2xl leading-6 tracking-wide text-white pl-[36px ]'>
            Yummy.
          </Text>

          <div className='flex items-center pl-8'>
            <div className='relative flex items-center mr-8'>
              <div
                className={`cursor-pointer flex items-center ${
                  showDropdown ? 'active' : ''
                }`}
                onClick={handleDropdownClick}
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
          </div>
        </header>

        <Box
          width={'100%'}
          className='flex flex-col md:flex-row items-center p-[12px]'
        >
          <Box
             width={{ base: "100%", md: "55%" }}
             height={{ base: "160px", md: "auto" }} 
            className='bg-pink40 flex items-center justify-center w-[55%] '
          >
            <img
              src='/registerImg.svg'
              className='md:w-[75%] w-[40%] '
            />
          </Box>

          <Box width={{ base: '100%', md: '45%' }}>
            <Box className='md:ml-[39px] pt-[40px]  '>
              <Box  className='flex justify-center md:gap-[65px] gap-[34px] md:pb-[72px] pb-[44px] '>
                <Text
                  onClick={() => router.push('/login')}
                  color={'#828282'}
                  className='font-roboto text-lg font-normal leading-6 tracking-wide cursor-pointer '
                >
                  {translate('Login', locale)}
                </Text>

                <Text
                  className='font-roboto text-lg font-medium leading-6 tracking-wide text-pink40 cursor-pointer  '
                  onClick={() => router.push('/login/register')}
                >
                  {translate('Register', locale)}
                </Text>
              </Box>

              <Box
                onKeyDown={handleKeyDown}
               className='flex flex-col md:gap-[67px] gap-[48px]'
              >
                <Box className='flex flex-col gap-[30px]' width={{ base: '98%', md: 'auto' }} >
                  <Box>
                    <Text
                      color={'#4F4F4F'}
                      className='font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  '
                    >
                      {translate('Full Name', locale)}
                    </Text>
                    <Input
                      value={formValues.fullname}
                      name='fullname'
                      onChange={handleChange}
                      borderRadius={'5px'}
                      backgroundColor={'#FFE7E7'}
                      height={{ base: '48px', md: '68px' }}
                    />
                  </Box>

                  <Box>
                    <Text
                      color={'#4F4F4F'}
                      className='font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  '
                    >
                      {translate('Username', locale)}
                    </Text>
                    <Input
                      value={formValues.username}
                      onChange={handleChange}
                      name='username'
                      borderRadius={'5px'}
                      backgroundColor={'#FFE7E7'}
                     
                      height={{ base: '48px', md: '68px' }}
                    />
                  </Box>

                  <Box>
                    <Text
                      color={'#4F4F4F'}
                      className='font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  '
                    >
                      {translate('Email', locale)}
                    </Text>
                    <Input
                      value={formValues.email}
                      onChange={handleChange}
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
                      {translate('Password', locale)}
                    </Text>
                    <Flex position='relative'>
                      <Input
                        value={formValues.password}
                        onChange={handleChange}
                        name='password'
                        borderRadius='5px'
                        backgroundColor='#FFE7E7'
                        height={{ base: '48px', md: '68px' }}
                        type={passwordShow ? 'text' : 'password'}
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
                  onClick={addData}
                  backgroundColor={'#EB5757'}
                  color={'#FFFFFF'}
                  fontWeight={'500'}
                  size={'22px'}
                  lineHeight={'22px'}
                  height={{ base: '48px', md: '68px' }}
                  width={'100%'}
                >
                  {translate('Register', locale)}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default register;
