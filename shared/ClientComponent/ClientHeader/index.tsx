import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RootState } from "@/shared/redux/store";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import { translate } from "../../../public/lang/translate";
import { search, Products } from "../../AdminComponents/Services/axios";
import Image from "next/image";

const ClientHeader: React.FC = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const isActive = (route: string) => {
    return router.pathname === route ? "text-red500" : "text-black";
  };

  const loginState = useSelector((state: RootState) => state.global.login);
  const firstNameLetter = loginState.fullname
    ? loginState.fullname.toUpperCase()[0]
    : "";
  const usernameLetter = loginState.username
    ? loginState.username.toUpperCase()[0]
    : "";

  const [showDropdown, setShowDropdown] = useState(false);


  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const SearchComponent = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Products[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };

    const handleSearch = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      try {
        const data = await search(query);
        setResults(data);
      } catch (err) {
        setError("Failed to fetch search results");
      } finally {
        setLoading(false);
      }
    };

    const locale = router.locale || "en";

    return (
      <div className="p-4">
        <form className="hover:scale-105 flex" onSubmit={handleSearch}>
          <input
            type="text"
            name="searchQuery"
            placeholder={translate("Search", locale)}
            className="p-2 border border-black pr-8 focus:bg-gray200 focus:border-red500 "
            value={query}
            onChange={handleInputChange}
          />
          {/* <button
            type="submit"
            className="bg-gray-200 text-white border-none p-2 cursor-pointer"
          >
            Search
          </button> */}
        </form>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <ul className="mt-2">
          {Array.isArray(results) &&
            results.map((product) => (
              <li
                key={product.id}
                className="p-2  ${isTyping ? 'border-red500' : ''}`"
              >
                {product.name} - {product.description}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  const locale = router.locale || "en";

  const changeLanguage = (locale: string) => {

    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem("lang", locale);
    setShowDropdown(false);
  };

 

  return (
    <div className="flex items-center mt-[30px] ml-[30px] mr-[30px] px-[60px] pt-[50px] pb-[35px] bg-gray200">
      <h1 className="hover:scale-105 font-mukta text-4xl font-extrabold text-black mr-auto pr-35">
        Yummy<span className="hover:scale-105 text-red500">.</span>
      </h1>

      <nav className="pr-[30px]">
        <ul className="flex list-none p-0 m-0">
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/"
              )}`}
            >
              {translate("Home", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/restaurants")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/restaurants"
              )}`}
            >
              {translate("Restaurants", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/about-us")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/about-us"
              )}`}
            >
              {translate("About Us", locale)}
            </a>
          </li>
          <li
            className="mr-10 cursor-pointer hover:scale-105"
            onClick={() => router.push("/how-it-works")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/how-it-works"
              )}`}
            >
              {translate("How it works", locale)}
            </a>
          </li>
          <li
            className="cursor-pointer hover:scale-105"
            onClick={() => router.push("/faqs")}
          >
            <a
              className={`text-lg font-medium hover:text-red500 ${isActive(
                "/faqs"
              )}`}
            >
              {translate("FAQs", locale)}
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center mr-8" style={{ paddingLeft: "40px" }}>
        <SearchComponent />

        <div className="relative flex items-center mr-[15px]">
          <div
            className={`cursor-pointer flex items-center ${
              showDropdown ? "active" : ""
            }`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
               <img
            src={`/${locale === 'en' ? 'usuk.png' : locale === 'az' ? 'azerbaijan.png' : 'russian.png'}`}
            alt={locale === 'en' ? 'Eng' : locale === 'az' ? 'Az' : 'Rus'}
            className='w-12 h-10 rounded-full mr-2 transition-transform transform hover:scale-110'
            onClick={() => setShowDropdown(!showDropdown)}
            />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50">
                <img
            src='/usuk.png'
            alt='Eng'
            className='w-12 h-10 rounded-full mb-2'
            onClick={() => changeLanguage('en')}
          />
                    <img
                      src='/azerbaijan.png'
                      alt='Az'
                      className='w-12 h-10 rounded-full mb-2'
                      onClick={() => changeLanguage('az')}
                    />
                    <img
                      src='/russian.png'
                      alt='Rus'
                      className='w-12 h-10 rounded-full'
                      onClick={() => changeLanguage('tr')}
                    />
              </div>
            )}
          </div>
        </div>
        {loginState?.username && loginState.username.length !== 0 ? (
          <Box  className="relative flex  items-center gap-[15px] ">
           
            
          <Box onClick={()=>router.push("/user/basket")} backgroundColor={"#EB5757"} className="w-[44px] h-[44px] rounded-[22px] flex items-center justify-center cursor-pointer  " >
          <Image src="/basketicon.svg" alt="Basket Icon" width={24} height={24} />
          </Box>


            <Box
              onClick={() => setShow(!show)}
              className="flex  items-center justify-center cursor-pointer "
              width={"44px"}
              height={"44px"}
              backgroundColor={"#F178B6"}
              borderRadius={"22px"}
            >
              <h1 className="font-roboto font-medium text-white text-center text-2xl leading-6 tracking-wide">
                {firstNameLetter + usernameLetter}
              </h1>
            </Box>

            {show && (
              <Box
                className="absolute top-14 z-10000"
                backgroundColor={"#FFFFFF"}
                width={"178px"}
              >
                <ul className="space-y-2 pl-6 p-2">
                  <li
                    onClick={() => router.push("/user")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Your Profile", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/user/basket")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Your Basket", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/user/orders")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Your Orders", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/user/checkout")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Checkout", locale)}
                  </li>
                  <li
                    onClick={() => router.push("/login")}
                    className="font-roboto font-medium text-lg leading-7 tracking-tight text-black cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  >
                    {translate("Logout", locale)}
                  </li>
                </ul>
              </Box>
            )}
          </Box>
        ) : (
          
          <button
            onClick={() => router.push("/login")}
            className="hover:scale-105 bg-red500 text-white border-none py-2 px-5 rounded-full cursor-pointer"
          >
            {translate("Login", locale)}
          </button>
        )}
      </div>
    </div>
    
  );
};

export default ClientHeader;
