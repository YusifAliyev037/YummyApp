import MetaSeo from '@/shared/MetaSeo';
import { Image } from '@chakra-ui/next-js';
import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { FormRegister, completeLogin } from '@/shared/AdminComponents/Services/axios';
import { log } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { addlogin } from '@/shared/redux/global/globalSlice';
import { translate } from '@/public/lang/translate';






interface FormValues {
  email: string | undefined;
  password: string | undefined;
 
}

const Login: React.FC = () => {
  

  const [showDropdown, setShowDropdown] = useState(false);
  const[passwordShow,setpasswordShow]=useState(false)
  const dispatch = useDispatch();
console.log(passwordShow);


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

  

  async function login(){

    const email = emailRef?.current?.value;

    const password = passwordRef?.current?.value;
    console.log("ss");
    

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
    
    
    dispatch(addlogin(res?.data?.user))
 
   
    

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
        push("/")
      }, 200);
      return;
      
    }

    

    return;

    

  }
  
 
  

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  let router=useRouter()
  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem('lang', locale);
    setShowDropdown(false);
  };

  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  
  const locale = router.locale || 'en';

  return (
    <Box >
     <Box className='m-[33px] flex flex-col gap-[20px] '>
     <Head>
        <title>{translate("Client Login",locale)}</title>
        <MetaSeo title={translate('Client Login' )}desc='Welcome to Client Login!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-pink40 flex items-center h-[122px] justify-between '>

         <Text className="font-mukta font-extrabold ml-9 text-3xl leading-6 tracking-wide text-white pl-[36px ]">
          {translate("Yummy.",locale)}
        

         </Text>

        <div className="flex items-center pl-8">
          <div className="relative flex items-center mr-8">
            <div
              className={`cursor-pointer flex items-center ${showDropdown ? 'active' : ''}`}
              onClick={handleDropdownClick}
            >
              <img
                src="/usuk.png"
                alt="Eng"
                className="w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110"
                onClick={() => changeLanguage('en')}

              />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md">
                  <img
                    src="/azerbaijan.png"
                    alt="Az"
                    className="w-12 h-10 rounded-full mb-2"
                onClick={() => changeLanguage('az')}

                    
                  />
                  <img
                    src="/russian.png"
                    alt="Rus"
                    className="w-12 h-10 rounded-full"
                onClick={() => changeLanguage('fr')}

                  />
                     <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
                    alt="De"
                    className="w-12 h-10 rounded-full"
                onClick={() => changeLanguage('de')}

                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <Box width={"100%"}className='flex items-center' >
        <Box width={"55%"} className='bg-pink40 flex items-center justify-center' >
          <img src='/loginclient.svg' className='w-[567px]'/>

        </Box>

        <Box width={"45%"} >

       <Box className='ml-[39px] ' >
       <Box className='flex justify-center gap-[65px] pb-[72px]'>
        <Text  className="font-roboto text-lg font-medium leading-6 tracking-wide text-pink40 cursor-pointer  " >
       { translate( "Login",locale)}
        </Text>

        <Text onClick={()=>router.push("/login/register")} color={"#828282"} className="font-roboto text-lg font-normal leading-6 tracking-wide cursor-pointer ">
         {translate(' Register')}
        </Text>
         </Box>

        <Box className='flex flex-col gap-[67px]'>

          
          

       <Box className='flex flex-col gap-[30px]'>
       <Box>
            <Text color={"#4F4F4F"}  className="font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  ">
         {translate('Email',locale)}

             
            </Text>
            <Input  ref={emailRef} name='email' borderRadius={"5px"} backgroundColor={"#FFE7E7"} height={"68px"} />
          </Box>
          <Box position="relative">
  <Text color="#4F4F4F" className="font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]">
  {translate('Password')}


    
  </Text>
  <Flex position="relative">
    <Input ref={passwordRef} name='password' borderRadius="5px" backgroundColor="#FFE7E7" height="68px" type={passwordShow ? "text" : "password"}/>
    <img
    onClick={()=>setpasswordShow(!passwordShow)
    }
      src="/showlogin.svg"
      alt=""
      className="absolute  top-1/2 transform -translate-y-1/2 right-4 cursor-pointer w-[32px] h-[20px]"
 
    />
  </Flex>
</Box>

       </Box>
          <Button onClick={login} backgroundColor={"#EB5757"} color={"#FFFFFF"} fontWeight={"500"} size={"22px"} lineHeight={"22px"} height={"68px"} width={"100%"}>
          {translate('Login',locale)}

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
