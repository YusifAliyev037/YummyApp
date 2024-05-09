import BarCharts from "@/shared/AdminComponents/BarCharts";
import Header from "@/shared/AdminComponents/Header";
import LineCharts from "@/shared/AdminComponents/LineChart";
import PieCharts from "@/shared/AdminComponents/PieChart";
import PushModul from "@/shared/AdminComponents/PushModul";
import MetaSeo from "@/shared/MetaSeo";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const AdminDashboard: NextPage = () => {

  
  return (
    <Box  className=" bg-darkBlue10 relative">
      <Head>
        <title>Dashboard</title>
       <MetaSeo title="Dashboard" desc="Welcome to admin main page!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Box className="flex">
      <PushModul/>
    <PieCharts/>
    <LineCharts/>
      </Box>
    <BarCharts/>
      
      
      

      <h1>Welcome to Admin page</h1>
    </Box>
  );
};

export default AdminDashboard;
