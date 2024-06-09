// import BoxCheck1 from "@/shared/ClientComponent/BoxCheck1";
// import BoxCheck2 from "@/shared/ClientComponent/BoxCheck2";
import BoxCheck1 from "@/shared/ClientComponent/BoxCheck1";
import BoxCheck2 from "@/shared/ClientComponent/BoxCheck2";
import Footer from "@/shared/ClientComponent/ClientFooter";
import ClientHeader from "@/shared/ClientComponent/ClientHeader";
import Payment from "@/shared/ClientComponent/Payment";
import UserModul from "@/shared/ClientComponent/UserModul";
import { Box } from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Box>
      <ClientHeader />
      <Box className="flex" height="790px" gap="5px">
        <Box>
          <UserModul />
        </Box>
        <Box display="flex">
          <BoxCheck1/>
          {/* <Payment /> */}
          <BoxCheck2 />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Checkout;
