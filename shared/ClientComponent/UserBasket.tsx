import React, { useState } from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingBasket, FaTrashAlt } from "react-icons/fa";

const BasketItem = ({
  imageSrc,
  name,
  price,
  quantity,
}: {
  imageSrc: string;
  name: string;
  price: string;
  quantity: number;
}) => (
  <Box className="flex items-center justify-between py-2 border-b mr-[35px] w-[900px] h-[130px] border-gray100">
    <Image src={imageSrc} alt={name} className="w-22 h-22" />
    <Box className="flex-1 ml-4">
      <Text className="font-semibold">{name}</Text>
      <Text className="text-gray600">{price}</Text>
    </Box>
    <Box className="flex items-center space-x-2">
      <Button className="bg-gray200 px-2">-</Button>
      <Text>{quantity}</Text>
      <Button className="bg-gray200 px-2">+</Button>
    </Box>
    <Button className="text-gray400 hover:text-red600">
      <FaTrashAlt />
    </Button>
  </Box>
);

const UserBasket: React.FC = () => {
  const [basketItems, setBasketItems] = useState([
    {
      imageSrc: "/aboutuspizza.svg",
      name: "Papa John’s Pizza",
      price: "$12.90",
      quantity: 1,
    },
    {
      imageSrc: "/hamburger.svg",
      name: "Cheeseburger",
      price: "$7.90",
      quantity: 2,
    },
    {
      imageSrc: "/coffee.svg",
      name: "Yummy Latte",
      price: "$3.50",
      quantity: 3,
    },
    {
      imageSrc: "/coffee.svg",
      name: "Yummy Cappuccino",
      price: "$3.90",
      quantity: 4,
    },
  ]);

  const handleClick = () => {
    console.log("Checkout button clicked");
  };

  const isScrollable = basketItems.length > 3;

  return (
    <Box className="w-[970px] h-[730px] bg-gray200 mt-[15px] pb-[40px] mr-[35px] p-8 shadow-lg relative">
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
          />
        ))}
      </Box>

      <Box
        onClick={handleClick}
        className="absolute bg-red400 cursor-pointer text-white px-6 py-2 w-[936px] h-[58px] rounded-30 flex justify-between items-center p-4 shadow-lg"
        style={{ bottom: "38px" }}
      >
        <Text className="text-xl font-semibold">Checkout</Text>
        <button className="text-xl font-semibold w-[189px] h-[43px] text-red500 bg-white rounded-50">
          $54.80
        </button>
      </Box>
    </Box>
  );
};

export default UserBasket;
