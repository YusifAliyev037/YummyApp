import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import axios from "axios";
import ClientHeader from "@/components/ClientHeader";
import SectionFaq from "@/pages/client/Faqs/Section/index";

const Faqs = () => {
  return (
    <>
      <ClientHeader />
      <SectionFaq />
    </>
  );
};

export default Faqs;
