import BarCharts from "@/shared/AdminComponents/BarCharts";
import Header from "@/shared/AdminComponents/Header";
import LineCharts from "@/shared/AdminComponents/LineChart";
import PieCharts from "@/shared/AdminComponents/PieChart";
import PushModul from "@/shared/AdminComponents/PushModul";
import RiskBar from "@/shared/AdminComponents/RiskBar";
import MetaSeo from "@/shared/MetaSeo";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const AdminDashboard: NextPage = () => {

  
  return (
    <Box className="bg-darkBlue10 relative xxl:w-full ">
      <Head>
        <title>Dashboard</title>
        <MetaSeo title="Dashboard" desc="Welcome to admin main page!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box className="flex flex-wrap gap-4 pr-4 pl-4 mr-8">
       
          <PushModul />
     
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
