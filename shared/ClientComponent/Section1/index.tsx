import { useRouter } from "next/router";
import React from "react";

function HomeSection1() {
  const router = useRouter();
  return (
    <div className="px-[30px] ">
      <div className="bg-gray200 mx-6 md:mx-0 md:px-16 py-8 md:py-12 md:flex md:items-center md:justify-between pb-140">
        <div className="md:w-1/2 md:mr-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Our Food site makes it easy to find local food
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex gap-8">
            <button onClick={()=>router.push("/login/register")} className="bg-red500 text-white w-[220px] h-[70px] rounded-full text-lg font-medium px-6 py-3">
              Register
            </button>
            <button className="border border-gray10 text-gray20 w-[220px] h-[70px] rounded-full text-lg font-medium px-6 py-3">
              Order Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img className="w-full" src="/hsection1.png" alt="Big Image" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
