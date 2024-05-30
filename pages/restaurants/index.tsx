import ClientHeader from "@/shared/ClientComponent/ClientHeader";
import ClientFooter from "@/shared/ClientComponent/ClientFooter";
import React from "react";
import RestaurantNavbar from "@/shared/ClientComponent/RestaurantNavbar";
import RestaurantCard from "@/shared/ClientComponent/RestaurantCard";
import { Box } from "@chakra-ui/react";

function index() {
  return (
    <>
      <Box>
        <Box as="header">
          <ClientHeader />
        </Box>
        <Box as="main" className=" flex">
          <RestaurantNavbar />
          <RestaurantCard />
        </Box>
        <Box as="footer">
          <ClientFooter />
        </Box>
      </Box>
    </>
  );
}

export default index;
