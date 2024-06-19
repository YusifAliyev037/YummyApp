import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";


const ClientHeader = dynamic(() => import("../../shared/ClientComponent/ClientHeader"))
const Footer = dynamic(() => import("../../shared/ClientComponent/ClientFooter"))
const UserModul = dynamic(() => import("@/shared/ClientComponent/UserModul"))
const Profile = dynamic(() => import("@/shared/ClientComponent/profile"))
const User: React.FC = () => {
  return (
    <Box>
      <ClientHeader />
    
      <Box className="flex flex-col md:flex-row w-full">
        <Box className="w-full md:w-1/4 h-auto md:h-[601px] hidden md:block">
          <UserModul />
        </Box>
        <Box className="w-full md:w-3/4">
          <Profile />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default User;
