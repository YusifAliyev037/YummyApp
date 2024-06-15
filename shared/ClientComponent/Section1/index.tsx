import { useRouter } from "next/router";
import React, { useState } from "react";
import { translate } from "@/public/lang/translate";
import { useEffect } from "react";

function HomeSection1() {
  const router = useRouter();

  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <div className=" xxl:px-[10px]   sm:px-0 animate-slideIn ">
      <div className="bg-gray200 xxl:mx-6   py-8 md:py-12 md:flex md:items-center md:justify-between pb-140">
        <div className="md:w-1/2 md:mr-8 ml-6">
          <h1 className="xxl:text-5xl md:text-6xl sm: text-xl font-bold text-black xxl:leading-[90px] sm:leading-5 xxl:text-left sm: text-center h-[155px] w-100% ">
            {translate(
              "Our Food site makes it easy to find local food",
              locale
            )}
          </h1>
          <p className="text-lg md:text-2xl mb-[45px] w-[510px] h-[105px]  hidden md:block text-gray300 ">
            {translate("Delicious is just a click away", locale)}
          </p>
          <div className="flex  gap-8">
            <button
              onClick={() => router.push("/login/register")}
              className="hover:scale-105 bg-red500 text-white w-[220px] h-[70px] rounded-full text-lg md:text-2xl font-medium px-6 py-3"
            >
              {translate("Register", locale)}
            </button>
            <button className="hover:scale-105 border border-gray300 text-gray300 md:text-2xl w-[220px] h-[70px] rounded-full text-lg font-medium px-6 py-3">
              {translate("Order Now", locale)}
            </button>
          </div>
        </div>
       

        <div className="relative xxl:w-[657px] h-[559px] mt-[30px]">

          <div className="absolute top-0 left-0 w-[577px] h-[509px] bg-black rounded-[70px]  hidden md:block overflow-hidden">
            {" "}
          </div>


          <img
            src="/hosec1.png"
            alt="Background Image"
            className="absolute  xxl:w-[619px] xxl:h-[619px] xs:h-100%  xs:w-[400px] object-cover "
          />

          {/* Box1 */}

          <div className="absolute  xxl:top-[-25px]  xxl:left-[370px] xs:left-24 xs: top-32   rounded-20 shadow-md bg-white w-[278px] h-[91px] flex items-center justify-center  animate-wiggle hover:scale-105 transition-transform duration-300">
            <img
              src="/margarita.jpg"
              alt="Product Image"
              className="absolute  w-[75px] h-[65px] mr-[175px]  "
            />

            <h3 className=" w-[136px] h-[42px] mr-[-40px] text-lg flex items-center justify-center text-[16px] font-[500] leading-[24px] tracking-[0.03em] text-custom-gray font-mukta text-center">
              {translate("Mixed Pizza Yummy ...", locale)}
            </h3>
          </div>

          {/* Box2 */}

          <div className="absolute    top-[317px]  left-[-120px]  rounded-20 shadow-md bg-white w-[278px] h-[91px] flex items-center justify-center animate-wiggle hover:scale-105 transition-transform duration-300  hidden md:block">
            <img
              src="/fries.png"
              alt="Product Image"
              className="absolute  w-[75px] h-[75px] ml-4 mr-[170px]  "
            />

            <h3 className=" w-[136px] h-[42px] ml-[100px] mt-5 text-lg flex items-center justify-center text-[16px] font-[500] leading-[24px] tracking-[0.03em] text-custom-gray font-mukta text-center">
              {translate("French Fries Yummy ...", locale)}
            </h3>
          </div>

          {/* Box3 */}

          <div className="absolute  hidden md:block  top-[447px] left-[370px]  rounded-20 shadow-md bg-white w-[278px] h-[91px] flex items-center justify-center  hover:scale-105 transition-transform duration-300 animate-wiggle">
            <img
              src="/cheseeburger.png"
              alt="Product Image"
              className="absolute  w-[75px] h-[75px]  ml-4 mr-[175px]   "
            />

            <h3 className=" w-[136px] h-[42px] ml-[100px] mt-5 text-lg flex items-center justify-center text-[16px] font-[500] leading-[24px] tracking-[0.03em] text-custom-gray font-mukta text-center">
              {translate("Cheeseburger Yummy ...", locale)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
