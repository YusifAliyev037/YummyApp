import {
  FormRegister,
  completeLogin,
} from "@/shared/AdminComponents/Services/axios";
import { Box, Text, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { translate } from "@/public/lang/translate";
import { useDispatch } from "react-redux";
import { fillLogin } from "@/shared/redux/global/globalSlice";
import dynamic from "next/dynamic";


const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))


function Adminlogin() {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch()

  const [showDropdown, setShowDropdown] = useState(false);

  const { push, locale } = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const date: Date | any = new Date();

  type token = {
    access_token: string;
    refresh_token: string;
  };



  let tokenObj: token = JSON.parse(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("tokenObj") ?? "{}"
      : "{}"
  );

  console.log(tokenObj);

  async function login() {
    const email = emailRef?.current?.value;

    const password = passwordRef?.current?.value;

    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

    if (!email || !password) {
      toast({
        title: "Please fill in all inputs!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });

      return;
    } else if (!emailRegex.test(email)) {
      toast({
        title: "Please enter a valid email address!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    const form: FormRegister = {
      email,
      password,
    };

    const res = await completeLogin(form);
    dispatch(fillLogin(res?.data))

    console.log("res", res);

    if (res?.status === 200) {
      localStorage.setItem("loginDate", date.getTime());
      toast({
        title: "Logged in successfully!",
        status: "success",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      tokenObj = {
        access_token: res.data.user.access_token,
        refresh_token: res.data.user.refresh_token,
      };

      localStorage.setItem("tokenObj", JSON.stringify(tokenObj));
      localStorage.setItem("userInfo", JSON.stringify(res?.data.user));

      console.log("tokenObj", tokenObj);

      if (emailRef.current && passwordRef.current) {
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }

      setTimeout(() => {
        push("/admin");
      }, 200);
      return;
    }

    return;
  }

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem("lang", locale);
    setShowDropdown(false);
  };

  return (
    <Box className=" bg-darkBlue10  pb-[330px]">
      <Head>
        <title>{translate("Admin Login", locale)}</title>
        <MetaSeo title="Admin Login" desc="Welcome to Login for Admins!" />
        <link rel="icon" href="/adminn.ico" />
      </Head>
      <Box as="header" className="pl-[15px] pt-[17px] pb-[55px]">
        <Text className="font-extrabold text-[28px] text-white10" as="h1">
          Yummy
          <span className="text-orange">.</span>
        </Text>
      </Box>

      <Box
        as="main"
        className="flex p-[30px]  items-end justify-center flex-col-reverse md:flex-row"
      >
        <Box
          as="section"
          className="bg-none md:bg-darkblue30 w-full md:w-1/3 h-auto md:h-96 flex justify-center gap-5 flex-col p-6 md:p-11"
        >
          <Text as="h2" className=" text-4xl text-center text-gray10 font-bold">
            {translate("Welcome Admin", locale)}
          </Text>
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className=" rounded py-3 pl-6 text-gray10 bg-gray20"
          />
          <input
            ref={passwordRef}
            className=" rounded py-3 pl-6 text-gray10 bg-gray20"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={login}
            className=" bg-pink rounded py-3 text-white text-2xl font-medium"
          >
            {translate("Sign In", locale)}
          </button>
        </Box>
        <Box
          as="section"
          className="bg-none md:bg-white20 w-full md:w-1/3 h-auto md:h-96 p-4"
        >
          <Box className="relative w-[50px] ml-[380px] flex items-center mr-8">
            {showDropdown && (
              <Box className="absolute top-full  right-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50">
                <img
                  src="/usuk.png"
                  alt="us"
                  className="w-12 h-10 rounded-full mb-2 cursor-pointer"
                  onClick={() => changeLanguage("en")}
                />
                <img
                  src="/azerbaijan.png"
                  alt="Az"
                  className="w-12 h-10 rounded-full mb-2 cursor-pointer"
                  onClick={() => changeLanguage("az")}
                />
                <img
                  src="/tr.png"
                  alt="Turk"
                  className="w-12 h-10 rounded-full mb-2 cursor-pointer"
                  onClick={() => changeLanguage("tr")}
                />
                <img
                  src="/de.png"
                  alt="Ger"
                  className="w-12 h-10 rounded-full mb-2 cursor-pointer"
                  onClick={() => changeLanguage("de")}
                />
                <img
                  src="/is.png"
                  alt="Isp"
                  className="w-12 h-10 rounded-full mb-2 cursor-pointer"
                  onClick={() => changeLanguage("is")}
                />
                    <img
                  src="/russian.png"
                  alt="Rus"
                  className="w-12 h-10 rounded-full mb-2 cursor-pointer"
                  onClick={() => changeLanguage("ru")}
                />
              </Box>
            )}
            <img
              src={`/${
                locale === "en"
    ? "usuk.png"
    : locale === "az"
    ? "azerbaijan.png"
    : locale === "tr"
    ? "tr.png"
    : locale === "de"
    ? "de.png"
    : locale === "ru"
    ? "russian.png"
    : "is.png"
              }`}
              alt={
                locale === "en"
                ? "us"
                : locale === "az"
                ? "Az"
                : locale === "tr"
                ? "Turk"
                : locale === "de"
                ? "Ger"
                : locale === "ru"
                ? "Rus"
                : "Isp"
              }
              className="w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
          </Box>

          <Box className="flex items-center justify-center md:mt-9">
            <Image
              width={200}
              height={200}
              alt="login"
              src="/login.png"
              className=" w-full h-[300px] pb-[30px] md:w-5/6 "
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Adminlogin;