import React from "react";

const HomeSection3: React.FC = () => {
  return (
    <div className="animate-slideIn space-y-12 pt-[100px]">
      <div className="hover:scale-105 flex flex-col md:flex-row items-center md:items-start">
        <div className=" w-[650px] md:w-1/2 pl-[100px]">
          <h2 className="font-roboto text-[50px] leading-[70px] tracking-[3%] text-left text-2xl text-black font-bold mb-4">
            Menu That Always Make You Fall In Love
          </h2>
          <p className="text-gray300 text-base mb-4 font-roboto text-[22px] font-normal leading-[30px] tracking-[3%] text-left">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
        <div className="w-full md:w-1/2 pt-[30px] pr-[150px] flex items-center justify-center">
          <div className="relative w-350 h-420 rotate-22.82 bg-red100 rounded-50 overflow-visible">
            <img
              src="/twister.svg"
              alt="Image 1"
              className="w-[540px] h-[440px] absolute inset-0 transform scale-125 object-contain rounded-50"
            />
          </div>
        </div>
      </div>

      <div className="hover:scale-105 flex flex-col md:flex-row-reverse items-center md:items-start pt-[150px]">
        <div className="w-full md:w-1/2 pr-[170px]">
          <h2 className="font-roboto text-[50px] leading-[70px] tracking-[3%] text-left text-2xl font-bold mb-4">
            Yummy Always Papa John’s Pizza. Agree?
          </h2>
          <p className="text-gray300  text-base mb-4 font-roboto text-[22px] font-normal leading-[30px] tracking-[3%] text-left">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
        <div className="w-full md:w-1/2 pl-[30px] flex items-center justify-center">
          <div className="relative w-350 h-420 rotate-25.74 bg-red100 rounded-50 overflow-visible">
            <img
              src="/margarita.jpg"
              alt="Image 2"
              className="w-[350px] h-[430px] absolute inset-0 transform scale-125 object-contain rounded-50"
            />
          </div>
        </div>
      </div>

      <div className="hover:scale-105 flex flex-col md:flex-row items-center md:items-start pt-[150px]">
        <div className="w-full md:w-1/2 pl-[100px]">
          <h2 className="font-roboto text-[50px] leading-[70px] tracking-[3%] text-left text-2xl font-bold mb-4">
            Do You Like French Fries? Mmm...
          </h2>
          <p className="text-gray300  text-base mb-4 font-roboto text-[22px] font-normal leading-[30px] tracking-[3%] text-left">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockups.Lorem ipsum is placeholder text commonly used in the
            graphic, print, and publishing industries for previewing layouts and
            visual mockups.
          </p>
        </div>
        <div className="w-full md:w-1/2 pr-[150px] pb-[100px] flex items-center justify-center">
          <div className="relative w-350 h-420 rotate-22.82 bg-red100 rounded-50 overflow-visible">
            <img
              src="fries.jpg"
              alt="Image 3"
              className="w-[570px] h-[360px] absolute inset-0 transform scale-125 object-contain rounded-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
