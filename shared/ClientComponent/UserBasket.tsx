import { Box,  useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { addBasket, clearBasket, deleteBasket, getBasket } from '../AdminComponents/Services/axios';
import { useDispatch, useSelector } from 'react-redux';
import { fillBasket } from '../redux/global/globalSlice';
import { RootState } from '../redux/store';
import Image from 'next/image';
import { UserBasketId } from './UserBaketId';

interface BasketItem {
  id: string | number;
  name: string;
  amount: number;
  count: number;
  img_url: string;
}

interface Basket {
  total_item: number;
  items: BasketItem[];
  id: string | number;
  total_amount: number;
}

const initialBasket: Basket = {
  total_item: 0,
  items: [],
  id: '',
  total_amount: 0
};

function RestaurantIdBasket() {
  const { push } = useRouter();

  const toast = useToast();

  const dispatch = useDispatch();
  
  const [showBasket, setShowBasket] = useState(true);

  const basketArr = useSelector((state: RootState) => state.global.basket) || initialBasket;

  const toggleShowBasket = () => {
    setShowBasket(!showBasket);
  }

  async function fetchBasket() {
    const res = await getBasket();
    dispatch(fillBasket(res?.data.result.data));
  }

  useEffect(() => {
    fetchBasket();
  }, []);

  async function handleIncreaseButtonClick(id: string | number) {
    const res = await addBasket(id);
    if (res?.status === 201) {
      dispatch(fillBasket(res?.data));
    }
  }

  async function handleDecreaseButtonClick(id: string | number) {
    const res = await deleteBasket(id);
    if (res?.status === 200) {
      dispatch(fillBasket(res?.data));
    }
  }

  async function handleClearButtonClick(id: string | number) {
    const res = await clearBasket(id);
    if (res?.status === 200) {
      dispatch(fillBasket(res?.data));
      toast({
        title: "Basket cleared successfully!",
        status: "success",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
    }
  }

  return (
    <div className=' bg-gray200  p-4 h-[510px] mr-8 mt-4 mb-3'>
      {(basketArr?.total_item ?? 0) === 0 ? (
        <>
          {/* FOR WEB EMPTY BASKET */}
          <div className="hidden sm:flex flex-col justify-between h-full">
            <div className="flex items-center gap-1">
              <Image
                width={30}
                height={30}
                src={"/emptybasket.svg"}
                alt="basket"
              />
              <p className="font-medium text-white50 text-lg mt-2">
                {basketArr?.total_item} items
              </p>
            </div>
            <div className="flex flex-col my-5 items-center mx-auto">
              <Image
                className="w-full "
                width={40}
                height={40}
                src={"/empitygraybasket.svg"}
                alt="empty"
              />
              <p className="text-4xl  text-white50 font-semibold text-center">
                Opps! <br /> Basket is empty
              </p>
            </div>
            <div className="flex rounded-full mt-auto items-center justify-between p-2 bg-white50">
              <p className="text-white text-lg font-medium ml-4">Checkout</p>
              <button
                className="bg-white text-white50 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
              >0$</button>
            </div>
          </div>

          {/* FOR MOBILE EMPTY BASKET */}
          <div className="block sm:hidden">
            {showBasket && (
              <>
                <div>
                  <Image
                    className="mx-auto"
                    width={50}
                    height={50}
                    src={"/closeFilter.svg"}
                    alt="closeFilter"
                    onClick={toggleShowBasket}
                  />
                </div>
                <div className="flex flex-col my-5 items-center mx-auto">
                  <Image
                    className="w-full "
                    width={30}
                    height={30}
                    src={"/emptyRed.svg"}
                    alt="empty"
                  />
                  <p className="text-4xl  text-red400 font-semibold text-center">
                    Opps! <br /> Basket is empty
                  </p>
                </div>
              </>
            )}
            <div className="flex rounded-full mt-auto items-center justify-between p-2 bg-white50">
              <p
                onClick={toggleShowBasket}
                className="text-white text-lg font-medium ml-4"
              >
                {showBasket ? (
                  "Checkout"
                ) : (
                  <div className="flex items-center gap-1">
                    <Image
                      width={30}
                      height={30}
                      src={"/basketRed.svg"}
                      alt="basket"
                    />
                    <p className="font-medium mt-2 text-red400 text-lg ">
                      {basketArr?.total_item} items
                    </p>
                  </div>
                )}
              </p>
              <button
                className="bg-white text-white50 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
              >0$</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-1">
            <Image width={30} height={0} src={"/emptyRedBasket.svg"} alt="basket" />
            <p className="font-medium text-red400 mt-1 text-lg">
              {basketArr?.total_item} items
            </p>
          </div>
          <div className="mb-5">
            {basketArr?.items?.map((item: BasketItem, index: string | number) => (
              <UserBasketId
                key={index}
                increaseCount={() => handleIncreaseButtonClick(item.id)}
                decreaseCount={() => handleDecreaseButtonClick(item.id)}
                clearBasket={() => handleClearButtonClick(basketArr.id)}
                name={item?.name}
                price={item.amount}
                count={item.count}
                imageSrc={item.img_url}
              />
            ))}
          </div>
          <div
            onClick={() => push("/user/checkout")}
            className="flex rounded-full cursor-pointer mt-auto items-center justify-between p-2 bg-red400"
          >
            <p className="text-white text-lg font-medium ml-4">Checkout</p>
            <button
              className="bg-white text-red400 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
            >{basketArr?.total_amount + " $"}</button>
          </div>
        </>
      )}
    </div>
  );
}

export default RestaurantIdBasket;
