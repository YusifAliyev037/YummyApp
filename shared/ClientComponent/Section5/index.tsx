import React from "react";

const HomeSection5: React.FC = () => {
  return (
    <div className="w-1060 h-370 ml-[190px] mr-[190px] mb-[100px] bg-gray500 rounded-[50px] flex items-center justify-between p-8">
      {/* Left Side Image */}
      <div className="w-1/4">
        <img
          src="/margarita.jpg"
          alt="Left Image"
          className="w-[200px] h-[200px] object-contain rounded-[50px]"
        />
      </div>
      {/* Center Content */}
      <div className="flex flex-col items-center text-center">
        <h2 className="font-roboto text-[50px] pb-[40px] font-medium leading-[70px] tracking-wide text-center text-white text-2xl font-bold mb-4">
          Discover Restaurants Near From you
        </h2>
        <button className="pr-[45px] pt-[10px] pb-[10px] pl-[45px] font-roboto text-base font-medium leading-6 tracking-wide text-center bg-orange100 text-white py-2 px-4 rounded-30">
          Explore now
        </button>
      </div>
      {/* Right Side Image */}
      <div className="w-1/4">
        <img
          src="/burgersec.png"
          alt="Right Image"
          className="w-[200px]] h-[200px] object-contain rounded-[50px]"
        />
      </div>
    </div>
  );
};

export default HomeSection5;
