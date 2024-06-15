import React, { useEffect } from "react";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
const HomeSection4: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <div className="animate-slideIn  px-8 py-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold max-w-100% text-center ">
          {translate("Our Popular Update New Foods", locale)}
        </h1>

        <p className="text-lg text-gray300 mt-4 max-w-100%">
          {translate("Delicious is just a click away", locale)}
        </p>
      </div>
      <div className="flex justify-center mt-20 space-x-8 xs:flex-wrap">
        <div
          data-aos="fade-right"
          className="hover:scale-105 w-72 h-96 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md"
        >
          <img src="/dubblechess.svg" alt="Feature 1" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">
            {translate("Dubble Cheese", locale)}
          </h2>

          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
        <div
          data-aos="fade-down"
          className="hover:scale-105 w-72 h-96 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md"
        >
          <img src="/margarita.svg" alt="Feature 2" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">
            {translate("Margarita", locale)}
          </h2>

          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="hover:scale-105 w-72 h-96 border border-gray-200 rounded-lg flex flex-col items-center justify-center text-center px-8 py-6 shadow-md"
        >
          <img src="/twister.svg" alt="Feature 3" className="w-48 h-48" />
          <h2 className="text-2xl font-semibold mt-4">
            {translate("Twister Menu", locale)}
          </h2>

          <p className="text-base text-gray300 mt-2">
            Lorem ipsum is placeholder text commonly used in the graphic
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
