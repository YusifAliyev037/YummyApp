import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import AdminModal from "./AdminModal"; 
import AddProductsInputs from "./AddProductsInputs"; 

function Header() {
  const [hidden, Sethidden] = useState(true);

  const handleAddProductClick = () => {
    Sethidden(false);
  };

  return (
    <Box className="flex justify-between fixed top-0 left-0 right-0 z-10 bg-darkBlue20 py-3 pl-5 pr-4 h-16 mx-6 rounded-b-xl">
      <Box className=" flex items-center gap-4">
      <Box>
        <Image
        className=" block md:hidden cursor-pointer"
         height={40} 
         width={40} 
         alt="hamburger" 
         src="/ham.svg"/>
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
          +
          <span className=" hidden md:block">ADD PRODUCT</span> 
        </Button>
        <Box>
          <Image className=" hidden md:block" width={41} height={41} src="/eng.svg" alt="English Language" />
        </Box>
        <Box>
          <Image width={41} height={41} src="/user.png" alt="User" />
        </Box>
        </Box>
        <Box>
          <Text className="text-white10 hidden md:block  ">Admin</Text>
        </Box>
      </Box>

      <AdminModal
        hidden={hidden}
        Sethidden={Sethidden}
        addName={"Add Restaurant"}
        imgName={"Upload your product image"}
        informationName={"Add your Product description"}
        component={<AddProductsInputs />}
      />
    </Box>
  );
}

export default Header;
