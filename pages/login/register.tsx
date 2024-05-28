import { postRegisterData } from '@/shared/AdminComponents/Services/axios';
import MetaSeo from '@/shared/MetaSeo';
import { Image } from '@chakra-ui/next-js';
import { Box, Button, Flex, Input, Text, useToast } from '@chakra-ui/react';
import { error } from 'console';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';



interface FormValues {
  email: string | undefined;
  password: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
}

const register: React.FC = () => {
 
  const [showDropdown, setShowDropdown] = useState(false);
  const[passwordShow,setpasswordShow]=useState(false)


  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    fullname: "",
    username: "",
  });





  function handleChange(event: React.ChangeEvent<HTMLInputElement>){
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
const toast = useToast()
 
  console.log(formValues);
  function addData(){
 
    if(formValues.fullname?.length==0||formValues.username?.length==0){
      console.log("bosu");
      toast({
        title: "Username or fullname field is empty",
        status: "error",
        isClosable: true,
        position: "top-right", 
      })
      return
      
      
    }
    else if(formValues.fullname?.length!==0&&formValues.username?.length!==0&& formValues.email &&
    validateEmail(formValues.email)==false||formValues.email?.length==0){
      toast({
        title: "Invalid email format",
        status: "error",
        isClosable: true,
        position: "top-right", 
      })

  

    }

    else if(formValues.fullname?.length!==0&&formValues.username?.length!==0&& formValues.email &&
      validateEmail(formValues.email)&& formValues.password&&formValues.password?.length<6||formValues.password?.length==0){
        console.log("Szs");
        
        toast({
          title: "Password must be at least 6 characters long",
          status: "error",
          isClosable: true,
          position: "top-right", 
        })
  
    
  
      }

      else if(formValues.fullname?.length!==0&&formValues.username?.length!==0&& formValues.email &&
        validateEmail(formValues.email)&& formValues.password&&formValues.password?.length>6){

          
          
          postRegisterData(formValues)
          .then(res => {
            if (res && res.status === 201) {
              toast({
                title: "Success",
                status: "success",
                isClosable: true,
                position: "top-right",
              });

              setFormValues({
                email: "",
                password: "",
                fullname: "",
                username: "",
              })
            } else {
             
              toast({
                title: "Error",
                description: "An error occurred while sending data",
                status: "error",
                isClosable: true,
                position: "top-right",
              });
            }
          })
          .catch(error => {
           
            toast({
              title: "Error",
              description: "An error occurred while sending data",
              status: "error",
              isClosable: true,
              position: "top-right",
            });
          });
        
        
          
         
    
      
    
        }

  

    

  }  

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  let router=useRouter()



  return (
    <Box >
     <Box className='m-[33px] flex flex-col gap-[20px] '>
     <Head>
        <title>Client Login</title>
        <MetaSeo title='Client Login' desc='Welcome to Client Login!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='bg-pink40 flex items-center h-[122px] justify-between '>

         <Text className="font-mukta font-extrabold text-3xl leading-6 tracking-wide text-white pl-[36px ]">
          Yummy.

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
              />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md">
                  <img
                    src="/azerbaijan.png"
                    alt="Az"
                    className="w-12 h-10 rounded-full mb-2"
                  />
                  <img
                    src="/russian.png"
                    alt="Rus"
                    className="w-12 h-10 rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <Box width={"100%"}className='flex items-center' >
        <Box width={"55%"} className='bg-pink40 flex items-center justify-center' >
          <img src='/registerImg.svg'  className='w-[567px]'/>

        </Box>

        <Box width={"45%"} >

       <Box className='ml-[39px] ' >
       <Box className='flex justify-center gap-[65px] pb-[72px]'>
        <Text  onClick={()=>router.push("/login/login")}  color={"#828282"} className="font-roboto text-lg font-normal leading-6 tracking-wide cursor-pointer " >
          Login
        </Text>

        <Text  className="font-roboto text-lg font-medium leading-6 tracking-wide text-pink40 cursor-pointer  " onClick={()=>router.push("/login/register")} >
          Register
        </Text>
         </Box>
         
        <Box className='flex flex-col gap-[68px]'>

       <Box className='flex flex-col gap-[30px]'>
       <Box>
            <Text color={"#4F4F4F"}  className="font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  ">
            Full Name
            </Text>
            <Input  value={formValues.fullname}  name="fullname" onChange={handleChange} borderRadius={"5px"} backgroundColor={"#FFE7E7"} height={"68px"} />
          </Box>

          <Box>
            <Text color={"#4F4F4F"}  className="font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  ">
              Username
            </Text>
            <Input value={formValues.username} onChange={handleChange} name="username" borderRadius={"5px"} backgroundColor={"#FFE7E7"} height={"68px"} />
          </Box>


          <Box>
            <Text color={"#4F4F4F"}  className="font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]  ">
            Email
            </Text>
            <Input value={formValues.email} onChange={handleChange} name="email"  borderRadius={"5px"} backgroundColor={"#FFE7E7"} height={"68px"} />
          </Box>

          <Box position="relative">
  <Text color="#4F4F4F" className="font-roboto text-base font-medium leading-6 tracking-wide pb-[10px]">
    Password
  </Text>
  <Flex position="relative">
    <Input value={formValues.password} onChange={handleChange} name="password" borderRadius="5px" backgroundColor="#FFE7E7" height="68px" type={passwordShow ? "text" : "password"} />
    <img
    onClick={()=>setpasswordShow(!passwordShow)}
      src="/showlogin.svg"
      alt=""
      className="absolute  top-1/2 transform -translate-y-1/2 right-4 cursor-pointer w-[32px] h-[20px]"
 
    />
  </Flex>
</Box>

       </Box>
          <Button onClick={addData} backgroundColor={"#EB5757"} color={"#FFFFFF"} fontWeight={"500"} size={"22px"} lineHeight={"22px"} height={"68px"} width={"100%"}>
              Log in
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
