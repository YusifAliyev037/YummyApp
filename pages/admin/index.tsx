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
    <Box  className=" bg-darkBlue10 relative ">
      <Head>
        <title>Dashboard</title>
       <MetaSeo title="Dashboard" desc="Welcome to admin main page!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Box className=" ">
      <Box className="flex  md: flex-row">
        <PushModul/>
        <PieCharts/>
        <LineCharts/>
      </Box>
      <Box className="flex justify-end gap-3">
    <RiskBar/>
    <BarCharts/>
      </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
