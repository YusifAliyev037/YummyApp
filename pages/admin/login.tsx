import {
  FormRegister,
  completeLogin,
} from "@/shared/AdminComponents/Services/axios";
import MetaSeo from "@/shared/MetaSeo";
import { Box, Text, useToast } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { translate } from "@/public/lang/translate";

function Adminlogin() {
  const router = useRouter();
  const toast = useToast();

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

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
    setSelectedLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem("lang", locale);
    setShowDropdown(false);
  };

  const languageFlagMap: { [key: string]: string } = {
    en: "/usuk.png",
    az: "/azerbaijan.png",
    fr: "/russian.png",
  };

  const availableLanguages = Object.keys(languageFlagMap).filter(
    (lang) => lang !== selectedLanguage
  );

  return (
    <Box className=" bg-darkBlue10  pb-[330px]">
      <Head>
        <title>{translate("Admin Login", locale)}</title>
        <MetaSeo title="Admin Login" desc="Welcome to Login for Admins!" />
        <link rel="icon" href="/favicon.ico" />
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
          <div className="relative flex items-center mr-8">
            <div
              className={`cursor-pointer flex items-center ${
                showDropdown ? "active" : ""
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={languageFlagMap[selectedLanguage]}
                alt={selectedLanguage}
                className="w-12 h-10 rounded-full transition-transform transform hover:scale-110"
              />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50">
                  {availableLanguages.map((lang) => (
                    <img
                      key={lang}
                      src={languageFlagMap[lang]}
                      alt={lang}
                      className="w-12 h-10 rounded-full mb-2"
                      onClick={() => changeLanguage(lang)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <Box className="flex items-center justify-center mt-4 md:mt-9">
            <Image
              width={200}
              height={200}
              alt="login"
              src="/login.png"
              className=" w-full md:w-5/6 "
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Adminlogin;
