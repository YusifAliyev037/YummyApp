import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ClientHeader from "../shared/ClientComponent/ClientHeader";

const NOTFOUND = () => {
  

  return (
    
    <>
    <ClientHeader/>
  
  </>

  );
};

export default NOTFOUND;