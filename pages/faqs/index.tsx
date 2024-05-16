import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import axios from "axios";
import ClientHeader from "../../shared/ClientComponent/ClientHeader";

import SectionFaq from "../faqs/Section/index"

const Faqs = () => {
  return (
    <>
      <ClientHeader />
      <SectionFaq />
    </>
  );
};

export default Faqs;
