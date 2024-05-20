import React from "react";

const HomeSection2: React.FC = () => {
  return (
    <div className="px-8 py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Features</h1>

        <p className="text-lg text-gray300 mt-4 max-w-[800px] ml-[320px] mr-[320px]">

          Lorem ipsum is placeholder text commonly used in the graphic , print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="flex justify-center mt-20 space-x-8">
        <div className="w-72 h-96 border border-gray200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md">
          <img
            src="/discountboucher.png"
            alt="Feature 1"
            className="w-48 h-48"
          />
          <h2 className="text-2xl font-semibold mt-4">Discount Boucher</h2>
          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
        <div className="w-72 h-96 border border-gray200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md">
          <img src="/healthyfood.png" alt="Feature 2" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">Fresh Healthy Food</h2>
          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
        <div className="w-72 h-96 border border-gray200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md">
          <img src="/homedelivery.png" alt="Feature 3" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">Fast Home Delivery</h2>
          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
