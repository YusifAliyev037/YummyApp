import React, { useEffect } from "react";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  // const changeLanguage = (locale: string) => {
  //   router.push(router.pathname, router.asPath, { locale });
  //   localStorage.setItem('lang', locale);
  // };

  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <footer className="bg-black200 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <div className="mb-4">
            <div className="mt-8 md:mt-[100px] ml-0 md:ml-[150px]">
              <h1 className="hover:scale-105 font-mukta text-4xl font-extrabold text-white">
                Yummy<span className="text-orange">.</span>
              </h1>
            </div>
            <p className="text-gray400 ml-0 md:ml-[150px] mt-4 md:mt-[10px]">
              {translate("Delicious is just a click away", locale)}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-[20px] ml-0 md:ml-[150px]">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-orange w-12 h-12 rounded-full flex items-center justify-center "
              >
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-orange w-12 h-12 rounded-full flex items-center justify-center"
              >
                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-orange w-12 h-12 rounded-full flex items-center justify-center"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex w-full md:w-2/3 justify-between mt-8 md:mt-[140px] ml-0 md:ml-[300px] mr-0 md:mr-[130px]">
          <div>
            <h3 className="hover:scale-105 font-bold mb-2">
              {translate("Popular", locale)}
            </h3>
            <nav>
              <ul>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Programming", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Books for children", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Psychology", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Business", locale)}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="hover:scale-105 font-bold mb-2">
              {translate("Store", locale)}
            </h3>
            <nav>
              <ul>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Cash", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Delivery", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Payment", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("About the store", locale)}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="hover:scale-105 font-bold mb-2">
              {translate("Support", locale)}
            </h3>
            <nav>
              <ul>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Help", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Contact", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Purchase returns", locale)}
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#"
                    className="hover:scale-105 text-gray400 hover:underline group-hover:text-orange"
                  >
                    {translate("Buyer help", locale)}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>
          {translate("All rights reserved © 2003-2024 Yummy", locale)}
          <span className="text-orange">.</span>{" "}
          <a
            href="#"
            className="hover:scale-105 text-white hover:underline hover:text-orange"
          >
            {translate("TERMS OF USE", locale)}
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="hover:scale-105 text-white hover:underline hover:text-orange"
          >
            {translate("Privacy Policy", locale)}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
