import Footer from "@/shared/ClientComponent/ClientFooter";
import ClientHeader from "@/shared/ClientComponent/ClientHeader";
import UserModul from "@/shared/ClientComponent/UserModul";
import Profile from "@/shared/ClientComponent/profile";
import { Box } from "@chakra-ui/react";
import React from "react";

// const User = () => {
const User: React.FC = () => {
  return (
    <Box>
      <ClientHeader />
      {/* <Box className='flex  ' width={'100%'} >

        <Box width={'26%'} height='601px'> */}
      <Box className="flex flex-col md:flex-row w-full">
        <Box className="w-full md:w-1/4 h-auto md:h-[601px] hidden md:block">
          <UserModul />
        </Box>
        {/* <Box  width={'74%'}> */}
        <Box className="w-full md:w-3/4">
          <Profile />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default User;
