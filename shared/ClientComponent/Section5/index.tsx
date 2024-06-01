import React from "react";
import { translate } from "@/public/lang/translate";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomeSection5: React.FC = () => {

  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  
  const locale = router.locale || 'en';
  return (
    <div className="animate-slideIn hover:scale-105 w-1060 h-370 ml-[190px] mr-[190px] mb-[100px] bg-gray500 rounded-[50px] flex items-center justify-between p-8">
      <div className="w-1/4">
        <img
          src="/margarita.jpg"
          alt="Left Image"
          className="w-[200px] h-[200px] object-contain rounded-[50px]"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="font-roboto text-[50px] pb-[40px]  leading-[70px] tracking-wide text-center text-white text-2xl font-bold mb-4">

          {translate("Discover Restaurants Near From you",locale)}
         
        </h2>
        <button className="hover:scale-110 pr-[45px] pt-[10px] pb-[10px] pl-[45px] font-roboto text-base font-medium leading-6 tracking-wide text-center bg-orange100 text-white py-2 px-4 rounded-30">
          {translate("Explore now",locale)}
        
        </button>
      </div>

      {/* <div className="w-1/4"> */}
      <img
        src="/hosec1.png"
        alt="Right Image"
        className="w-[220px] h-[220px] object-contain rounded-[50px]"
      />
    </div>
    // </div>
  );
};

export default HomeSection5;
