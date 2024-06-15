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
        <div
          data-aos="zoom-in-up"
          key={index}
          className={`flex flex-col gap-2  pb-[120px] md:flex-row items-center md:items-start ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className=" md:w-1/2 xxl:pl-[100px] xs:pl-0">
            <h2 className="font-roboto text-[50px] leading-[70px] tracking-[3%] text-left text-2xl text-black font-bold mb-4 xs:text-center">
              {item.name}
            </h2>
            <p className="text-gray300 text-base mb-4 font-roboto text-[22px] font-normal leading-[30px] tracking-[3%] text-left xs:text-center">
              {item.description}
            </p>
          </div>
          <div className="w-full md:w-1/2 pt-[30px]  flex items-center justify-center">
            <div className="relative xxl:w-350 xxl:h-420 xs:w-[250px] xs:h-[300px] rotate-22.82 bg-red100 rounded-50 overflow-visible">
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
