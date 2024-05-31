import { OfferValues, getOffer } from "@/shared/AdminComponents/Services/axios";
import React, { useEffect, useState } from "react";

const HomeSection3: React.FC = () => {
  const [offer, setOffer] = useState<OfferValues[]>([]);

  const fetchOffer = async () => {
    try {
      const res = await getOffer();
      const offerArr = res?.data.result.data;
      setOffer(offerArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOffer();
  }, []);

  return (
    <div className="space-y-12 pt-[100px]">
      {offer?.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-[650px] md:w-1/2 pl-[100px]">
            <h2 className="font-roboto text-[50px] leading-[70px] tracking-[3%] text-left text-2xl text-black font-bold mb-4">
              {item.name}
            </h2>
            <p className="text-gray300 text-base mb-4 font-roboto text-[22px] font-normal leading-[30px] tracking-[3%] text-left">
              {item.description}
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-[30px] pr-[150px] flex items-center justify-center">
            <div className="relative w-350 h-420 rotate-22.82 bg-red100 rounded-50 overflow-visible">
              <img
                
                src={item.img_url}
                alt="Image 1"
                className="w-[540px] h-[440px] absolute inset-0 transform scale-125 object-contain rounded-50"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection3;
