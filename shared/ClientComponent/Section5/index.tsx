import React from "react";
import { translate } from "@/public/lang/translate";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomeSection5: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <div
      data-aos="flip-down"
      className="animate-slideIn hover:scale-105 w-100% xxl:h-370 xxl:mx-48 mb-[100px] bg-gray500 rounded-[50px] xxl:flex items-center justify-between p-8  sm:my-5 sm:h-52"
    >
      <div className="w-1/4">
        <img
          src="/margarita.jpg"
          alt="Left Image"
          className="w-[200px] h-[200px] object-contain rounded-[50px] hidden md:block"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="font-roboto  xxl:pb-[40px] sm:pb-5  tracking-wide text-center text-white xxl:text-2xl  font-bold mb-4">
          {translate("Discover Restaurants Near From you", locale)}
        </h2>
        <button className="hover:scale-110 pr-[45px] pt-[10px] pb-[10px] pl-[45px] font-roboto text-base font-medium leading-6 tracking-wide text-center bg-orange100 text-white py-2 px-4 rounded-30">
          {translate("Explore now", locale)}
        </button>
      </div>

      {/* <div className="w-1/4"> */}
      <img
        src="/hosec1.png"
        alt="Right Image"
        className="w-[220px] h-[220px] object-contain rounded-[50px] hidden md:block"
      />
    </div>
    // </div>
  );
};

export default HomeSection5;
