import { Box, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

function RestaurantIdBasket() {
  const { push } = useRouter();
  
  return (
    <div className='bg-gray200 p-4 h-[600px]'>
      {/* FOR WEB EMPTY BASKET */}
      <div className="hidden sm:flex flex-col justify-between h-full">
        <div className="flex items-center gap-1">
          <Image
            boxSize={30}
            // src="/basketIconGray.svg"
            alt="basket"
          />
          <p className="font-medium text-white50 text-lg mt-2">
            {/* {basketData?.total_item} items */}
          </p>
        </div>
        <div className="flex flex-col my-5 items-center mx-auto">
          <Image
            className="w-full"
            boxSize={0}
            src="/emptyGray.svg"
            alt="empty"
          />
          <p className="text-4xl text-white50 font-semibold text-center">
            Opps! <br /> Basket is empty
          </p>
        </div>
        <div className="flex rounded-full mt-auto items-center justify-between p-2 bg-white50">
          <p className="text-white text-lg font-medium ml-4">Checkout</p>
          <button
            className="bg-white text-white50 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500"
          >
            0$
          </button>
        </div>
      </div>

      {/* FOR MOBILE EMPTY BASKET */}
      <div className="block sm:hidden">
        <div>
          <Image
            className="mx-auto"
            boxSize={50}
            src="/closeFilter.svg"
            alt="closeFilter"
            // onClick={toggleShowBasket}
          />
        </div>
        <div className="flex flex-col my-5 items-center mx-auto">
          <Image
            className="w-full"
            boxSize={0}
            src="/emptyRed.svg"
            alt="empty"
          />
          <p className="text-4xl text-red400 font-semibold text-center">
            Opps! <br /> Basket is empty
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantIdBasket;
