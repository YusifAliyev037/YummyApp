import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { translate } from "@/public/lang/translate";

interface Props {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserModul() {
  const { push, asPath } = useRouter();
  const router=useRouter()
  

  const isActive = (path: string) => (asPath === path ? "#FFB5A5" : "none");
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  
  const locale = router.locale || 'en';
  return (
    <Box
      as="section"
      className="bg-white40 rounded-xl mt-4 p-5 ml-7  "
      width="325px"
      height="515px"
    >
      <Box as="ul" className="flex flex-col mt-8">
        <Box mb="32px">
          <Button
            onClick={() => push("/user")}
            className="flex gap-7 w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52"
            color="text-redUserModul"
            // colorScheme='none'
            style={{
              justifyContent: "flex-start",
              backgroundColor: isActive("/user"),
            }}
            as="li"
          >
            <Image width={18} alt="profile" height={18} src="/profile.svg" />
            {translate("Profile",locale)}
          
          </Button>
        </Box>
        <Box mb="32px">
          <Button
            onClick={() => push("/user/basket")}
            className="flex gap-7 w-52 text-userText justify-start cursor-pointer hover:bg-redUserModul10 hover:w-52"
            color="text-userText"
            style={{
              justifyContent: "flex-start",
              backgroundColor: isActive("/user/basket"),
            }}
            as="li"
          >
            <Image width={18} alt="basket" height={18} src="/basket.svg" />
            {translate("Your Basket",locale)}
            
          </Button>
        </Box>
        <Box mb="32px">
          <Button
            onClick={() => push("/user/orders")}
            className="flex gap-7 ju w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52"
            color="text-userText"
            style={{
              justifyContent: "flex-start",
              backgroundColor: isActive("/user/orders"),
            }}
            as="li"
          >
            <Image width={18} alt="orders" height={18} src="/basket.svg" />
            {translate("Your Orders",locale)}
        
          </Button>
        </Box>
        <Box mb="32px">
          <Button
            onClick={() => push("/user/checkout")}
            className="flex gap-7 w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52"
            color="text-userText"
            style={{
              justifyContent: "flex-start",
              backgroundColor: isActive("/user/checkout"),
            }}
            as="li"
          >
            <Image width={18} alt="Checkout" height={18} src="/basket.svg" />
            {translate("Checkout",locale)}
            
          </Button>
        </Box>
        <Box mb="32px">
          <Button
            onClick={() => push("/login")}
            className="flex gap-7 w-52 text-userText cursor-pointer hover:bg-redUserModul10 hover:w-52"
            color="text-userText"
            style={{
              justifyContent: "flex-start",
              backgroundColor: isActive("/login"),
            }}
            as="li"
          >
            <Image width={18} alt="Logout" height={18} src="/basket.svg" />
            {translate("Logout",locale)}
      
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default UserModul;
