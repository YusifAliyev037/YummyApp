import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const ClientHeader = dynamic(() => import("../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../shared/ClientComponent/ClientFooter"))


const NOTFOUND: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="Page not found" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ClientHeader />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-[1373px] h-[727px]">
          <Image
            src="/404.svg"
            alt="404 Image"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
      </div>
      <ClientFooter />
    </>
  );
};

export default NOTFOUND;
