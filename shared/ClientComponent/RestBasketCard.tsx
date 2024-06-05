import React, { useState } from 'react'
import { Button } from '../AdminComponents/Button';
// import Image from 'next/image';
import Modal from './Modal';
import { Image } from '@chakra-ui/react';



interface BasketCardProps {
    name: string;
    desc?: string;
    price: number;
    count: number;
    imageSrc: string;
    increaseCount?: () => void;
    decreaseCount?: () => void;
    clearBasket?: any;
  }
  
export const RestBasketCard: React.FC<BasketCardProps> = ({
  name,
  desc,
  price,
  count,
  imageSrc,
  increaseCount,
  decreaseCount,
  clearBasket,
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    function clearButton(){
        clearBasket();
        handleModalClose()
    }

    const handleButtonClick = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
  return (
    <>
      <div className="flex justify-between items-center mt-4 gap-2 sm:gap-0 pt-4 border-t-2 border-white60">
        <div className="flex items-center gap-4">
          <Image
            className="hidden sm:block h-11 object-cover w-11"
            width={45}
            height={45}
            src={imageSrc}
            alt={imageSrc}
          />
          <div className="flex flex-col gap-1">
            <p className="text-gray700 font-semibold text-xl">{name}</p>
            <p className="text-userText text-sm sm:text-md font-medium">
              ${price}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-1">
          <div className="flex flex-col items-center bg-white px-3 rounded-full">
            <Button
              className=" text-2xl"
              innerText="+"
              onClick={increaseCount}
            />
            <p className="text-lg font-semibold">{count}</p>
            <Button
              className=" text-3xl"
              innerText="-"
              onClick={decreaseCount}
            />
          </div>
          <Image
            className="hover:cursor-pointer"
            width={30}
            height={0}
            src={"/delete.svg"}
            alt="delete"
            onClick={handleButtonClick}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex justify-between items-center">
          <p className="mx-auto text-2xl sm:text-3xl font-medium">
            {"modalDesc"}
          </p>
          <Button
            className="text-red400 text-lg"
            innerText="&#10006;"
            onClick={handleModalClose}
          />
        </div>

        <p className=" text-userText w-2/3 mx-auto text-center my-5">
          {"modalDesc2"}
        </p>

        <div className="mx-auto flex items-center justify-center gap-9">
          <Button
            className=" border-userText text-userText py-1 px-8 rounded-md border-2 shadow-md hover:scale-95 transition-all duration-500"
            innerText={"modalDesc3"}
            onClick={handleModalClose}
          />
          <Button
            className="bg-red400 border-2 text-white py-1 px-8 rounded-md border-red400 shadow-md hover:scale-95 transition-all duration-500"
            innerText={"modalDesc4"}
            onClick={clearButton}
          />
        </div>
      </Modal>
    </>
  )
}
