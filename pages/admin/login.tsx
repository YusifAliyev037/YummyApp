import { FormRegister, completeLogin } from '@/shared/AdminComponents/Services/axios';
import MetaSeo from '@/shared/MetaSeo';
import { Box, Text, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
        


function Adminlogin() {

  const toast = useToast()

  const {push}: {push: Function} = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const date:Date | any = new Date()

  type token = {
    "access_token":string;
    "refresh_token": string
  }

  let tokenObj: token = JSON.parse(
    typeof localStorage !== "undefined" ? localStorage.getItem("tokenObj") ?? "{}" : "{}"
  )

  console.log(tokenObj);

  async function login(){

    const email = emailRef?.current?.value;

    const password = passwordRef?.current?.value;

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    if(!email || !password){
      toast({
        title: "Please full in all inputs!",
        status:"warning",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });

      return;
    } else if (!emailRegex.test(email)){
      toast({
        title: "Please enter a valid email adress!",
        status:"warning",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });
      return;
    }

    const form: FormRegister = {
      email,
      password
    };

    const res = await completeLogin(form);

    console.log("res", res);
    

    if(res?.status === 200){
      localStorage.setItem("loginDate", date.getTime());
      toast({
        title: "Logged in successfully!",
        status:"success",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });
      tokenObj = {
        "access_token":res.data.user.access_token,
        "refresh_token": res.data.user.refresh_token
      }

      localStorage.setItem("tokenObj", JSON.stringify(tokenObj));
      localStorage.setItem("userInfo", JSON.stringify(res?.data.user))

      console.log("tokenObj", tokenObj);
      
      if(emailRef.current && passwordRef.current){
        emailRef.current.value= "";
        passwordRef.current.value = ""
      }

      setTimeout(() => {
        push("/admin")
      }, 200);
      return;
      
    }

    return;

  }
  
  

  return (
    <Box className=' bg-darkBlue10 h-screen'>
      <Head>
        <title>Admin Login</title>
        <MetaSeo title='Admin Login' desc='Welcome to Login for Admins!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box as='header' className=' mx-8 py-14'>
       
        <Text className='font-extrabold text-[28px] text-white10' as="h1">
          Yummy    
          <span className='text-orange'>
            .
          </span> 
        </Text>
      </Box>
      <Box as='main' className='flex items-end justify-center'>
        <Box as='section' className=' bg-darkblue30 w-1/3 h-96 flex justify-center gap-5 flex-col p-11'>
          <Text as='h2' className=' text-4xl text-center text-gray10 font-bold'>Welcome Admin</Text>
          <input 
          ref={emailRef}
           type='text' 
           placeholder='Email'
           className=' rounded py-3 pl-6 text-gray10 bg-gray20'
           />
          <input 
          ref={passwordRef}
           className=' rounded py-3 pl-6 text-gray10 bg-gray20'
           type='password'  
           placeholder='Password'
           />
          <button
          onClick={login}
           className=' bg-pink rounded py-3 text-white text-2xl font-medium'
          >Sign In</button>
           
          
        </Box>
        <Box as='section' className=' bg-white20 w-1/3 h-96 '>
          <Image className=' m-2 float-end cursor-pointer' width={40} height={40} alt='eng' src='/eng.svg' />
          <Box className='flex items-center justify-center mt-9'>
            <Image width={200} height={200} alt='login' src="/login.svg" className=' w-5/6 '/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Adminlogin;
