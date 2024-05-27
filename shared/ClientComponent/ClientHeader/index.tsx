import React, { useState } from "react";
import { useRouter } from "next/router";

const ClientHeader: React.FC = () => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const isActive = (route: string) => {
    return router.pathname === route ? "text-red500" : "text-black";
  };

  return (
    <div className="flex items-center  mt-[30px] ml-[30px] mr-[30px] px-[60px] pt-[50px] pb-[35px] bg-gray200">
      <h1 className="font-mukta text-4xl font-extrabold text-black mr-auto pr-35">
        Yummy<span className="text-red500">.</span>
      </h1>

      <nav style={{ paddingRight: "40px" }}>
        <ul className="flex list-none p-0 m-0">
          <li className="mr-10 cursor-pointer" onClick={() => router.push("/")}>
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/"
              )}`}
            >
              Home
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer"
            onClick={() => router.push("/restaurants")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/restaurants"
              )}`}
            >
              Restaurants
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer"
            onClick={() => router.push("/about-us")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/about-us"
              )}`}
            >
              About Us
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer"
            onClick={() => router.push("/how-it-works")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/how-it-works"
              )}`}
            >
              How it works
            </a>
          </li>
          <li className="cursor-pointer" onClick={() => router.push("/faqs")}>
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/faqs"
              )}`}
            >
              FAQs
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center mr-8" style={{ paddingLeft: "40px" }}>
        <form className="flex" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="searchQuery"
            placeholder="Search..."
            className="p-2 border border-black pr-8 "
            
          />
          <button
            type="submit"
            className="bg-gray200 text-white border-none p-2 cursor-pointer"
          ></button>
        </form>

        <div className="flex items-center pl-8">
          <div className="relative flex items-center mr-8">
            <div
              className={`cursor-pointer flex items-center ${
                showDropdown ? "active" : ""
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src="/usuk.png"
                alt="Eng"
                className="w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110"
              />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md">
                  <img
                    src="/azerbaijan.png"
                    alt="Az"
                    className="w-12 h-10 rounded-full mb-2"
                  />
                  <img
                    src="/russian.png"
                    alt="Rus"
                    className="w-12 h-10 rounded-full"
                  />
                </div>
              )}
            </div>
          </div>

          <button onClick={()=>router.push("/login/login")} className="bg-red500 text-white border-none py-2 px-5 rounded-full cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
