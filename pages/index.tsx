import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ClientHeader from "../components/ClientHeader/index";
import HomeSection1 from "../pages/client/Section1/index";

const Home = () => {
  

  return (
    
    <>
    <ClientHeader />
    <HomeSection1 />
  </>

  );
};

export default Home;
