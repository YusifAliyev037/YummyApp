import React from "react";

const HomeSection4: React.FC = () => {
  return (
    <div className="px-8 py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold max-w-[400px] ml-[520px] mr-[520px]">
          Our Popular Update New Foods
        </h1>
        <p className="text-lg text-gray300 mt-4 max-w-[800px] ml-[320px] mr-[320px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="flex justify-center mt-20 space-x-8">
        <div className="w-72 h-96 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md">
          <img src="/dubblechess.svg" alt="Feature 1" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">Dubble Chees</h2>
          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
        <div className="w-72 h-96 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md">
          <img src="/margarita.svg" alt="Feature 2" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">Margarita</h2>
          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
        <div className="w-72 h-96 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md">
          <img src="/twister.svg" alt="Feature 3" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">Twister Menu</h2>
          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
