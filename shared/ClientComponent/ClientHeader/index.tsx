import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RootState } from "@/shared/redux/store";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { translate } from "../../../public/lang/translate";
import { search, Products } from "../../AdminComponents/Services/axios";
import Image from "next/image";
import SearchComponent from "../SearchModal";

const ClientHeader: React.FC = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const isActive = (route: string) => {
    return router.pathname === route ? "text-red500" : "text-black";
  };

  const loginState = useSelector((state: RootState) => state.global.login);
  const firstNameLetter = loginState.fullname
    ? loginState.fullname.toUpperCase()[0]
    : "";
  const usernameLetter = loginState.username
    ? loginState.username.toUpperCase()[0]
    : "";

  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem("lang", locale);
    setShowDropdown(false);
  };

  return (
    <div className="flex items-center mt-[30px] ml-[30px] mr-[30px] px-[60px] pt-[50px] pb-[35px] bg-gray200">
      <h1 className="hover:scale-105 font-mukta text-4xl font-extrabold text-black mr-auto pr-35">
        Yummy<span className="hover:scale-105 text-red500">.</span>
      </h1>

      <nav className="pr-[30px]">
        <ul className="flex list-none p-0 m-0">
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/"
              )}`}
            >
              {translate("Home", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/restaurants")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/restaurants"
              )}`}
            >
              {translate("Restaurants", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/about-us")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/about-us"
              )}`}
            >
              {translate("About Us", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/how-it-works")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/how-it-works"
              )}`}
            >
              {translate("How it works", locale)}
            </a>
          </li>
          <li
            className="cursor-pointer hover:scale-105"
            onClick={() => router.push("/faqs")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/faqs"
              )}`}
            >
              {translate("FAQs", locale)}
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center mr-8 ">
        <SearchComponent locale={locale} />

        <div className="relative flex items-center mr-[30px]">
          <div
            className={`cursor-pointer flex items-center ${
              showDropdown ? "active" : ""
            }`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
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
                  : "Isp"
              }
              className="w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50">
                <img
                  src="/usuk.png"
                  alt="us"
                  className="w-12 h-10 rounded-full mb-2"
                  onClick={() => changeLanguage("en")}
                />
                <img
                  src="/azerbaijan.png"
                  alt="Az"
                  className="w-12 h-10 rounded-full mb-2"
                  onClick={() => changeLanguage("az")}
                />
                <img
                  src="/tr.png"
                  alt="Turk"
                  className="w-12 h-10 rounded-full mb-2"
                  onClick={() => changeLanguage("tr")}
                />
                <img
                  src="/de.png"
                  alt="Ger"
                  className="w-12 h-10 rounded-full mb-2"
                  onClick={() => changeLanguage("de")}
                />
                <img
                  src="/is.png"
                  alt="Isp"
                  className="w-12 h-10 rounded-full mb-2"
                  onClick={() => changeLanguage("is")}
                />
              </div>
            )}
          </div>
        </div>
        {loginState?.username && loginState.username.length !== 0 ? (
          <Box className="relative flex  items-center gap-[15px] ">
            <Box
              onClick={() => router.push("/user/basket")}
              backgroundColor={"#EB5757"}
              className="w-[44px] h-[44px] rounded-[22px] flex items-center justify-center cursor-pointer  "
            >
              <Image
                src="/basketicon.svg"
                alt="Basket Icon"
                width={24}
                height={24}
              />
            </Box>

            <Box
              onClick={() => setShow(!show)}
              className="flex  items-center justify-center cursor-pointer "
              width={"44px"}
              height={"44px"}
              backgroundColor={"#F178B6"}
              borderRadius={"22px"}
            >
              <h1 className="font-roboto font-medium text-white text-center text-2xl leading-6 tracking-wide">
                {firstNameLetter + usernameLetter}
              </h1>
            </Box>

            {show && (
              <Box
                className="absolute top-14 z-10000"
                backgroundColor={"#FFFFFF"}
                width={"178px"}
              >
                <ul className="space-y-2 pl-6 p-2">
                  <li
                    onClick={() => router.push("/user")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Your Profile", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/user/basket")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Your Basket", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/user/orders")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Your Orders", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/user/checkout")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Checkout", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/login")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Logout", locale)}
                  </li>
                </ul>
              </Box>
            )}
          </Box>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="hover:scale-105 bg-red500 text-white border-none py-2 px-5 rounded-full cursor-pointer"
          >
            {translate("Login", locale)}
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientHeader;
