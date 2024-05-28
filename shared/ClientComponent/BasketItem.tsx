import React from "react";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

interface BasketItemProps {
  imageSrc: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const BasketItem: React.FC<BasketItemProps> = ({
  imageSrc,
  name,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => (
  <Box className="flex items-center justify-between py-2 border-b mr-[35px] w-[900px] h-[130px] border-gray100">
    <Image src={imageSrc} alt={name} className="w-22 h-22" />
    <Box className="flex-1 ml-4">
      <Text className="font-semibold">{name}</Text>
      <Text className="text-gray600">${price.toFixed(2)}</Text>
    </Box>
    <Box className="flex items-center space-x-2">
      <Button onClick={onDecrease} className="bg-gray200 px-2">
        -
      </Button>
      <Text>{quantity}</Text>
      <Button onClick={onIncrease} className="bg-gray200 px-2">
        +
      </Button>
    </Box>
    <Button onClick={onRemove} className="text-gray400 hover:text-red600">
      <FaTrashAlt />
    </Button>
  </Box>
);

export default BasketItem;
