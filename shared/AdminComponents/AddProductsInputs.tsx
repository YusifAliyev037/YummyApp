import React from "react";

function AddProducts() {
  return (
    <div className="bg-[#43445A] w-full md:w-[60%] overflow-y-scroll rounded-[14px] flex flex-col max-h-[400px] ">
      <div className="flex flex-col gap-2 md:gap-4 mb-4">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Name
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium"
          placeholder="Fast Food, Drink, Ice Cream, Sea Food?"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mb-4">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Description
        </p>
        <textarea
          className="bg-[#5A5B70] border-none rounded-[24px] h-24 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium"
          placeholder="Yes you like pizza, Yummy"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mb-4">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Price $
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium"
          placeholder="5"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 mb-4">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Restaurants
        </p>
        <select className="bg-[#5A5B70] border-none rounded-[18px] h-12 text-[#F2F2F2] font-roboto font-medium">
          <option value="" disabled selected>
            Select a Restaurant
          </option>
          <option value="Restaurant1">Restaurant 1</option>
          <option value="Restaurant2">Restaurant 2</option>
          <option value="Restaurant3">Restaurant 3</option>
        </select>
      </div>
    </div>
  );
}

export default AddProducts;
