import type { NextPage } from "next";
import Head from "next/head";
import ClientHeader from "../shared/ClientComponent/ClientHeader";
import ClientFooter from "../shared/ClientComponent/ClientFooter";

const HOWITWORKS: NextPage = () => {
  return (
    <>
      <Head>
        <title>How It Works</title>
        <meta name="description" content="Description of how it works" />
      </Head>
      <ClientHeader />

      <div className="animate-slideIn  max-w-7xl mx-auto pt-[70px] px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="hover:scale-105 font-mukta text-3xl font-semibold text-black w-[273px] h-[36px] leading-30 tracking-tight">
          How It Works
        </h2>
        <p className="hover:scale-105 mt-2 max-w-2xl text-lg pt-[20px] mb-[30px] text-gray300 w-[1034px] h-[184px] font-roboto font-medium leading-35 tracking-tighter">
          Delivery may be extended during sale periods. Please refer to the
          checkout page for an updated estimate for your location. Kindly note
          that once you have placed an order, it is no longer possible to modify
          your order. Taxes and duties are included in all product prices. It is
          possible to place an order with shipment to a different address than
          your home or billing address when paying with a credit card. Please
          note that Klarna payments require that your order is shipped to your
          registered home address.
        </p>

        <div>
          <img
            src="/howitworks.png"
            className="hover:scale-105"
            alt="How It Works Image"
          />
        </div>
      </div>

      <ClientFooter />
    </>
  );
};

export default HOWITWORKS;
