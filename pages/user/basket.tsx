import UserModul from "@/shared/ClientComponent/UserModul";
import React from "react";
import ClientHeader from "@/shared/ClientComponent/ClientHeader";
import ClientFooter from "@/shared/ClientComponent/ClientFooter";
import UserBasket from "@/shared/ClientComponent/UserBasket";

const Basket: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ClientHeader />
      <main className="flex-grow flex space-x-4 gap-[4px]">
        <UserModul />
        <UserBasket />
      </main>
      <ClientFooter />
    </div>
  );
};

export default Basket;
