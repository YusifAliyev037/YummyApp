import React, { useEffect } from "react";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
const HomeSection2: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <div className="animate-slideIn px-8 py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{translate("Features", locale)}</h1>

        <p className="text-lg text-gray300 mt-4  xxl:max-w-[800px] xxl:ml-[320px] xxl:mr-[320px]">
          {translate(
            "We are at your service with new and delicious meals from our store every day.",
            locale
          )}
        </p>
      </div>
      <div className="flex justify-center flex-column xxl:gap-16 xs:gap-5 mt-20  xs:flex-wrap">
        <div
          data-aos="fade-right"
          className="hover:scale-105 w-72 h-96 border border-gray200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md"
        >
          <img
            src="/discountboucher.png"
            alt="Feature 1"
            className="w-48 h-48"
          />
          <h2 className="text-2xl font-semibold mt-4">
            {translate("Discount Boucher", locale)}
          </h2>
          <p className="text-base text-gray300 mt-2">
            {translate("Delicious is just a click away", locale)}
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="hover:scale-105 w-72 h-96 border border-gray200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md"
        >
          <img src="/healthyfood.png" alt="Feature 2" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">
            {translate("Fresh Healthy Food", locale)}
          </h2>
          <p className="text-base text-gray300 mt-2">
            {translate("Delicious is just a click away", locale)}
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="hover:scale-105 w-72 h-96 border border-gray200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md"
        >
          <img src="/homedelivery.png" alt="Feature 3" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">
            {translate("Fast Home Delivery", locale)}
          </h2>
          <p className="text-base text-gray300 mt-2">
            {translate("Delicious is just a click away", locale)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
