import Header from "@/shared/AdminComponents/Header";
import MetaSeo from "@/shared/MetaSeo";
import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const AdminDashboard: NextPage = () => {
  return (
    <Box  className=" bg-darkBlue10 h-screen">
      <Head>
        <title>Dashboard</title>
       <MetaSeo title="Dashboard" desc="Welcome to admin main page!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      

      <h1>Welcome to Admin page</h1>
    </Box>
  );
};

export default AdminDashboard;
