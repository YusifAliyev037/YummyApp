import React, { useState } from "react";
import { useRouter } from "next/router";
import { RootState } from "@/shared/redux/store";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

const ClientHeader: React.FC = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const isActive = (route: string) => {
    return router.pathname === route ? "text-red500" : "text-black";
  };

  const loginState = useSelector((state: RootState) => state.global.login);
  console.log(loginState);
  const firstNameLetter = loginState.fullname
    ? loginState.fullname.toUpperCase()[0]
    : "";
  const usernameLetter = loginState.username
    ? loginState.username.toUpperCase()[0]
    : "";

  return (
    <div className="flex items-center  mt-[30px] ml-[30px] mr-[30px] px-[60px] pt-[50px] pb-[35px] bg-gray200">
      <h1 className="hover:scale-105 font-mukta text-4xl font-extrabold text-black mr-auto pr-35">
        Yummy<span className="hover:scale-105 text-red500">.</span>
      </h1>

      <nav style={{ paddingRight: "40px" }}>
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
              Home
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
              Restaurants
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
              About Us
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
              How it works
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
              FAQs
            </a>
          </li>
        </ul>
      </nav>

      <div className=" flex items-center mr-8" style={{ paddingLeft: "40px" }}>
        <form
          className="hover:scale-105 flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="searchQuery"
            placeholder="Search..."
            className="p-2 border border-black pr-8 "
          />
          <button
            type="submit"
            className="bg-gray200 text-white border-none p-2 cursor-pointer"
          ></button>
        </form>

        <div className="flex items-center pl-8">
          <div className="relative flex items-center mr-8">
            <div
              className={`cursor-pointer flex items-center ${
                showDropdown ? "active" : ""
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src="/usuk.png"
                alt="Eng"
                className="w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110"
              />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50">
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

          {loginState?.username && loginState.username.length !== 0 ? (
            <Box className="relative flex flex-col items-center    ">
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
                      Profile
                    </li>
                    <li
                      onClick={() => router.push("/user/basket")}
                      className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                      Your Basket
                    </li>
                    <li
                      onClick={() => router.push("/user/orders")}
                      className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                      Your Orders
                    </li>
                    <li
                      onClick={() => router.push("/user/checkout")}
                      className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                      Checkout
                    </li>
                    <li
                      onClick={() => router.push("/login")}
                      className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                    >
                      Logout
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
              Sign up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
