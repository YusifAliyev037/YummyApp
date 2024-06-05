import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";
import BasketItem from "./BasketItem";
import {
  getBasket,
  addBasket,
  deleteBasket,
  clearBasket,
  BasketItemProps,
} from "../AdminComponents/Services/axios";

const UserBasket: React.FC = () => {
  const [basketItems, setBasketItems] = useState<BasketItemProps[]>([]);

  useEffect(() => {
    const fetchBasketItems = async () => {
      try {
        const data = await getBasket();
        setBasketItems(data);
        console.log(data, "data");
      } catch (error) {
        console.error("Error fetching basket items:", error);
      }
    };

    fetchBasketItems();
  }, []);

  const handleIncrease = (index: number) => {
    const newItems = [...basketItems];
    newItems[index].quantity += 1;
    setBasketItems(newItems);
  };

  const handleDecrease = (index: number) => {
    const newItems = [...basketItems];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
    }
    setBasketItems(newItems);
  };

  const handleRemove = async (index: number) => {
    const item = basketItems[index];
    try {
      await deleteBasket(item.name);
      const newItems = basketItems.filter((_, i) => i !== index);
      setBasketItems(newItems);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const calculateTotal = () => {
    return basketItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    window.location.href = "/user/checkout";
  };

  const isScrollable = basketItems.length > 3;

  return (
    <Box className="w-[1030px] h-[730px] bg-gray200 ml-[40px] mt-[15px] pb-[40px] mb-[40px] mr-[30px] p-8  relative">
      <Text className="text-2xl font-bold mb-4">Your Basket</Text>

      <div className="text-red500 mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <FaShoppingBasket className="mr-2" />
          <span>{basketItems.length} items</span>
        </div>
      </div>

      <Box
        className={`overflow-y-auto ${
          isScrollable
            ? "h-[470px] scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-300"
            : "h-auto"
        }`}
      >
        {basketItems.map((item, index) => (
          <BasketItem
            key={index}
            imageSrc={item.imageSrc}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </Box>

      <Box
        onClick={handleCheckout}
        className="absolute bg-red400 cursor-pointer text-white px-6 py-2 w-[936px] h-[58px] rounded-30 flex justify-between items-center p-4 shadow-lg"
        style={{ bottom: "38px" }}
      >
        <Text className="text-xl font-semibold">Checkout</Text>
        <button className="text-xl font-semibold w-[189px] h-[43px] text-red500 bg-white rounded-50">
          ${calculateTotal().toFixed(2)}
        </button>
      </Box>
    </Box>
  );
};

export default UserBasket;
