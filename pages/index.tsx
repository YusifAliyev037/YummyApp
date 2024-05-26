import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";


import HomeSection1 from "../shared/ClientComponent/Section1/index"
import HomeSection2 from "../shared/ClientComponent/Section2/index"
import ClientHeader from "@/shared/ClientComponent/ClientHeader";

const Home = () => {
  

  return (
    
    <>
    <ClientHeader />
    <HomeSection1 />
    <HomeSection2 />
  </>

  );
};

export default Home;
