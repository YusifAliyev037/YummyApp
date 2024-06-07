import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box,Button, Text } from "@chakra-ui/react";
import { translate } from "@/public/lang/translate";



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
      <div className=" bg-white   flex-col pl-7 pt-7 pb-5 pr-7 lg:pr-14  max-h-screen   overflow-y-auto h-screen">
        <Box className=" flex gap-10 items-center">

      <button
        onClick={onClickClose}
        
        className=" mb-10    right-5 sm:left-0  "
      >
        <Image
        className="  rounded-full    absolute   sm:left-0  top-9 w-7 h-7  cursor-pointer"
        
        alt="close-icon" height={10} width={10} src='/blackClose.svg' />
      </button>
      <button
            onClick={() => router.push("/login")}
            className="hover:scale-105 bg-red500 text-white border-none py-2 px-5 rounded-full cursor-pointer w-32 ml-4 mt-20  "
          >
            {translate("Login", locale)}
          </button>
     
        </Box>
        
        <nav className="pr-[30px] mt-20 ">
        <ul className="flex flex-col gap-4  p-0 m-0">
          <li
            className="mr-10 cursor-pointer hover:scale-105 "
            onClick={() => router.push("/")}
          >
            <a
              className={`text-lg text-userText font-medium hover:text-red500 ${isActive(
                "/"
              )}`}
            >
              {translate("Home", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105 "
            onClick={() => router.push("/restaurants")}
          >
            <a
              className={`text-lg text-userText font-medium hover:text-red500 ${isActive(
                "/restaurants"
              )}`}
            >
              {translate("Restaurants", locale)}
            </a>
          </li>
          <li
            className="mr-10  cursor-pointer hover:scale-105 "
            onClick={() => router.push("/about-us")}
          >
            <a
              className={`text-lg text-userText font-medium hover:text-red500 ${isActive(
                "/about-us"
              )}`}
            >
              {translate("About Us", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105 "
            onClick={() => router.push("/how-it-works")}
          >
            <a
              className={`text-lg text-userText font-medium hover:text-red500 ${isActive(
                "/how-it-works"
              )}`}
            >
              {translate("How it works", locale)}
            </a>
          </li>
          <li
            className="cursor-pointer hover:scale-105 "
            onClick={() => router.push("/faqs")}
          >
            <a
              className={`text-lg text-userText font-medium hover:text-red500 ${isActive(
                "/faqs"
              )}`}
            >
              {translate("FAQs", locale)}
            </a>
          </li>
        </ul>
      </nav>

        <div className="flex   flex-col   lg:flex-row  w-full mb-36">
          
         
        </div>

        
      </div>
    </div>
  );
};