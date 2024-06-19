import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";

const ClientHeader = dynamic(() => import("../../shared/ClientComponent/ClientHeader"))
const Footer = dynamic(() => import("../../shared/ClientComponent/ClientFooter"))
const UserModul = dynamic(() => import("@/shared/ClientComponent/UserModul"))
const BoxCheck1 = dynamic(() => import("@/shared/ClientComponent/BoxCheck1"))


const Checkout = () => {
  return (
    <Box>
      <ClientHeader />
      <Box className="flex" height="790px" gap="17px">
        <Box>
          <UserModul />
        </Box>
        <Box display="flex">
          <BoxCheck1 />
        
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Checkout;
