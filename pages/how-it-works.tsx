import type { NextPage } from "next";
import Head from "next/head";
import { translate } from "@/public/lang/translate";
import { useRouter } from "next/router";
import { useEffect } from "react";
import dynamic from "next/dynamic";


const ClientHeader = dynamic(() => import("../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../shared/ClientComponent/ClientFooter"))

const HOWITWORKS: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem("lang") || "en";
    router.push(router.pathname, router.asPath, { locale });
  }, []);

  const locale = router.locale || "en";
  return (
    <>
      <Head>
        <title>{translate("How It Works", locale)}</title>
        <meta
          name="description"
          content={translate("Description of how it works", locale)}
        />
      </Head>
      <ClientHeader />

      <div className="animate-slideIn  max-w-7xl mx-auto pt-[70px] px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="hover:scale-105 font-mukta text-3xl font-semibold text-black w-[273px] h-[36px] leading-30 tracking-tight">
          {translate("  How It Works", locale)}
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
