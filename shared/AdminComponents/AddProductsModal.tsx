import React from "react";

const AddProductsModal = () => {
  return (
    <div className="bg-[#43445A] w-[60%] overflow-y-scroll rounded-[14px] flex flex-col max-h-[400px]">
      <div className="p-[23px] flex flex-col gap-[8px]">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Name
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Fast Food, Drink, Ice Cream, Sea Food?"
        />
      </div>
      <div className="p-[23px] flex flex-col gap-[8px]">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Cuisine
        </p>
        <textarea
          className="bg-[#5A5B70] border-none rounded-[24px] h-24 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Yes you like pizza, Yummy"
        />
      </div>
      <div className="p-[23px] flex flex-col gap-2">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Delivery Price $
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="5"
        />
      </div>
      <div className="p-[23px] flex flex-col gap-2">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Delivery Min
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="11"
        />
      </div>
      <div className="p-[23px] flex flex-col gap-2">
        <p className="font-roboto text-lg text-gray10  font-medium leading-6 tracking-tighter text-left">
          Address
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Do you like Pizza Nizami street 45 Baku Azerbaijan?"
        />
      </div>
      <div className="p-[23px] flex flex-col gap-2">
        <p className="font-roboto text-lg text-gray10 font-medium leading-6 tracking-tighter text-left">
          Category
        </p>
        <input
          className="bg-[#5A5B70] border-none rounded-[18px] h-12 placeholder:text-[#F2F2F2] placeholder:font-roboto placeholder:font-medium placeholder:bg-size-[26px]"
          placeholder="Do you like Pizza at Papa John’s?"
        />
      </div>
    </div>
  );
};

export default AddProductsModal;
