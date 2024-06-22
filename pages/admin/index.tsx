import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
import { useEffect } from "react";
import dynamic from "next/dynamic";


const BarCharts = dynamic(() => import("@/shared/AdminComponents/BarCharts"))
const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const LineCharts = dynamic(() => import("@/shared/AdminComponents/LineChart"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))
const RiskBar = dynamic(() => import("@/shared/AdminComponents/RiskBar"))
const PieCharts = dynamic(() => import("@/shared/AdminComponents/PieChart"))
const AdminDashboard: NextPage = () => {
const router=useRouter()

useEffect(() => {
  const locale = localStorage.getItem('lang') || 'en';
  router.push(router.pathname, router.asPath, { locale });
}, []);
const locale = router.locale || 'en';

  return (
    <Box className="bg-darkBlue10 relative xxl:w-full ">
      <Head>
        <title>{translate("Dashboard",locale)}</title>
        <MetaSeo title="Dashboard" desc="Welcome to admin main page!" />
        <link rel="icon" href="/adminn.ico" />
      </Head>
      <Header />
      <Box className="flex flex-wrap gap-4 pr-4  mr-8">
       
          <PushModul   />
     
        <Box className="flex-1 min-w-[300px]">
          <PieCharts />
        </Box>
        <Box className="flex-1 min-w-[300px]">
          <LineCharts  />
        </Box>
      </Box>
      <Box className="flex flex-wrap justify-end gap-4 pr-4 pl-4 ml-6 mr-8">
        <Box className=" text-white text-center text-xl pt-8 bg-darkBlue20 rounded-2xl w-64 h-24  mr-8  mt-80 hidden md:block ">Demo Version</Box>
        <Box className="flex-1 min-w-[300px]">
          <RiskBar />
        </Box>
        <Box className="flex-1 min-w-[300px]">
          <BarCharts />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
