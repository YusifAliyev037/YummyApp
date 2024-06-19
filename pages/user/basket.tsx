import React from "react";
import dynamic from "next/dynamic";

const ClientHeader = dynamic(() => import("../../shared/ClientComponent/ClientHeader"))
const ClientFooter = dynamic(() => import("../../shared/ClientComponent/ClientFooter"))
const UserModul = dynamic(() => import("@/shared/ClientComponent/UserModul"))
const UserBasket = dynamic(() => import("@/shared/ClientComponent/UserBasket"))

const Basket: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ClientHeader />
      <main className="flex-grow flex space-x-4 gap-[4px]">
        <UserModul />
        <div className=" w-[1120px] ">
        <UserBasket />
        </div>
      </main>
      <ClientFooter />
    </div>
  );
};

export default Basket;
