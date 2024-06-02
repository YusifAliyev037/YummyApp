import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AdminModal1 } from "./AdminModal1";
import { Products, addProducts, getRestaurants } from "./Services/axios";
import { useDispatch } from "react-redux";
import { translate } from "../../public/lang/translate";
import { fillProducts } from "../redux/global/globalSlice";

function Header() {
  const toast = useToast();

  const router = useRouter();

  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState<string>("");

  const [hidden, setHidden] = useState(true);

  const [restaurantArr, setRestaurantArr] = useState<string[]>([]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  // const changeLanguage = (locale: string) => {
  //   router.push(router.pathname, router.asPath, { locale });
  //   localStorage.setItem("lang", locale);
  //   setShowDropdown(false);
  // };

  const productNameRef = useRef<HTMLInputElement>(null);
  const productDescRef = useRef<HTMLInputElement>(null);
  const productPriceRef = useRef<HTMLInputElement>(null);
  const productRestaurantRef = useRef<HTMLInputElement>(null);
  const ImgRef = useRef<HTMLInputElement>(null);

  function getImgUrl(url: string): void {
    setImgUrl(url);
  }

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };
  const handleAddProductClick = () => {
    setHidden(false);
  };

  async function createProducts() {
    const proName: any = productNameRef.current?.value;
    const proDesc: any = productDescRef.current?.value;
    const proPrice: any = productPriceRef.current?.value;
    const proRes: any = productRestaurantRef.current?.value;
    const img_url: any = imgUrl;

    if (!isInputValid(proName, proDesc, proRes, img_url, proPrice)) {
      toast({
        title: "Please fill all the inputs!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
      return;
    }

    const form: Products = {
      name: proName,
      price: proPrice,
      description: proDesc,
      rest_id: proRes,
      img_url: img_url,
    };

    try {
      const res = await addProducts(form);

      if (res?.status === 201) {
        if (
          productNameRef?.current &&
          productDescRef?.current &&
          productPriceRef?.current &&
          productRestaurantRef?.current
        ) {
          (productDescRef.current.value = ""),
            (productNameRef.current.value = ""),
            (productPriceRef.current.value = ""),
            (productRestaurantRef.current.value = "");
        }

        setTimeout(() => {
          changeHidden();
        }, 500);
        toast({
          title: "Product created successfully!",
          status: "success",
          duration: 2000,
          position: "top-right",
          variant: "subtle",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred while adding the product.",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle",
      });
    }
  }

  const isInputValid = (
    proName: string | undefined,
    proDesc: string | undefined,
    proRes: string | undefined,
    proPrice: number,
    img_url: any
  ): boolean => {
    return !!proName && !!proDesc && !!proRes && !!proPrice && !!img_url;
  };

  async function restaurantRender() {
    try {
      const response = await getRestaurants();
      const restaurantArr = response?.data.result.data;

      let items = restaurantArr.map((item: any) => item.name);

      setRestaurantArr(items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    restaurantRender();
  }, []);

  const changeLanguage = (locale: string) => {
    setSelectedLanguage(locale);
    router.push(router.pathname, router.asPath, { locale });
    localStorage.setItem("lang", locale);
    setShowDropdown(false);
  };

  const languageFlagMap: { [key: string]: string } = {
    en: "/usuk.png",
    az: "/azerbaijan.png",
    fr: "/russian.png",
  };

  const availableLanguages = Object.keys(languageFlagMap).filter(
    (lang) => lang !== selectedLanguage
  );

  return (
    <Box className="flex justify-between fixed top-0 left-0 right-0 z-10 bg-darkBlue20 py-3 pl-5 pr-4 h-16 mx-6 rounded-b-xl">
      <Box className=" flex items-center gap-4">
        <Box>
          <Image
            className=" block md:hidden cursor-pointer"
            height={40}
            width={40}
            alt="hamburger"
            src="/ham.svg"
          />
        </Box>
        <Box>
          <Text className="font-extrabold text-[28px] text-white10" as="h1">
            Yummy
            <span className="text-orange">.</span>
          </Text>
        </Box>
      </Box>

      <Box className="flex gap-5 items-center">
        <Box className=" flex items-center gap-3">
          <Button
            size="xs"
            borderRadius="20px"
            colorScheme="pink"
            className="text-white10 "
            style={{ boxShadow: "0px 4px 4px 0px rgba(39, 174, 96, 0.2)" }}
            onClick={handleAddProductClick}
          >
            +<span className=" hidden md:block">ADD PRODUCT</span>
          </Button>
          <div className="relative flex items-center mr-8">
            <div
              className={`cursor-pointer flex items-center ${
                showDropdown ? "active" : ""
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={languageFlagMap[selectedLanguage]}
                alt={selectedLanguage}
                className="w-12 h-10 rounded-full transition-transform transform hover:scale-110"
              />
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-gray200 border border-black rounded-md z-50">
                  {availableLanguages.map((lang) => (
                    <img
                      key={lang}
                      src={languageFlagMap[lang]}
                      alt={lang}
                      className="w-12 h-10 rounded-full mb-2"
                      onClick={() => changeLanguage(lang)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <Box>
            <Image width={41} height={41} src="/user.png" alt="User" />
          </Box>
        </Box>
        <Box>
          <Text className="text-white10 hidden md:block  ">Admin</Text>
        </Box>
      </Box>

      <AdminModal1
        arr={restaurantArr}
        onClickClose={changeHidden}
        mod="3"
        p="Add Product"
        p1="Upload  image"
        p2="Add your Product information"
        btn="Add Product"
        hidden={hidden}
        ButtonOnClick={createProducts}
        productNameRef={productNameRef}
        imgRef={ImgRef}
        productDescRef={productDescRef}
        productPriceRef={productPriceRef}
        productRestaurantRef={productRestaurantRef}
        getImgUrl={getImgUrl}
      />
    </Box>
  );
}

export default Header;
