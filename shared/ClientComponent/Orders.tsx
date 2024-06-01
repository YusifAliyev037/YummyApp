import { DeleteIcon, ViewIcon } from '@chakra-ui/icons';

import {
  Box,
  ButtonGroup,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import DeleteUserModul from './DeleteUserModul';
import { useRouter } from 'next/router';
import { translate } from '@/public/lang/translate';

interface Order {
  id: number;
  time: string;
  deliveryAddress: string;
  amount: number;
  paymentMethod: string;
  contact: string;
}

const OrdersTable: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  const handleDeleteClick = (orderId: number) => {
    setSelectedOrder(orderId);
    onOpen();
  };

  const handleConfirmDelete = () => {
    console.log('Order deleted', selectedOrder);
    onClose();
  };

  const orders: Order[] = [
    {
      id: 9177,
      time: '022401',
      deliveryAddress: '29 Eve Street, 543 Evenue Road, NY 87876',
      amount: 249.7,
      paymentMethod: 'Cash On Delivery',
      contact: '994-51-410-3130',
    },
  ];

  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  
  const locale = router.locale || 'en';
  return (
    <Box className='flex flex-col  mt-4 mr-8   h-[550px] gap-9  bg-white40'>
      <Box className='ml-8 mt-10 '>
        <Text
          width='164px'
          height='32px'
          color='#4F4F4F'
        >
          {translate("Your Orders",locale)}
          
        </Text>
      </Box>
      <table className='bg-white m-5'>
        <thead className='h-[50px] border-b-2 text-ordersBg'>
          <tr className='p-8'>
            <th className='w-[100px] text-center'>{translate("ID",locale)}</th>
            <th className='w-[120px] text-center'>{translate("Time",locale)}</th>
            <th className='w-[120px] text-center'>{translate("Delivery Address",locale)}</th>

            <th className='w-[150px] text-center'>{translate("Amount",locale)}</th>
            <th className='w-[150px] text-center'>{translate("Payment Method",locale)}</th>
            <th className='w-[150px] text-center'>{translate("Contact",locale)}</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className='h-[60px] border-b-2 p-8 text-ordersBg'
            >
              <td className='w-[100px] text-center'>9177</td>
              <td className='w-[100px] text-center'>022401</td>
              <td className='w-[100px] text-center'>25 Dec 2021</td>
              <td className='w-[200px] text-center'>
                29 Eve Street,543 Evenue Road,Ny 87876
              </td>
              <td className='w-[100px] text-center'>$249.7</td>
              <td className='w-[100px] text-center'>{translate("Cash On Delivery",locale)}</td>
              <td className='w-[100px] text-center'>994-51-410-3130</td>
              <td className='w-[140px] text-center'>
                <ButtonGroup>
                  <IconButton
                    color='teal'
                    aria-label='Edit'
                    icon={<ViewIcon />}
                  />
                  <IconButton
                    color='red'
                    aria-label='Delete'
                    icon={<DeleteIcon />}
                    onClick={() => handleDeleteClick(9177)}
                  />
                </ButtonGroup>
              </td>
            </tr>
          ))}
          <tr className='h-[60px] border-b-2 p-8 text-ordersBg'>
            <td className='w-[100px] text-center'>9177</td>
            <td className='w-[100px] text-center'>022401</td>
            <td className='w-[100px] text-center'>25 Dec 2021</td>
            <td className='w-[200px] text-center'>
              29 Eve Street,543 Evenue Road,Ny 87876
            </td>{' '}
            <td className='w-[100px] text-center'>$249.7</td>
            <td className='w-[100px] text-center'>{translate("Cash On Delivery",locale)}</td>
            <td className='w-[100px] text-center'>994-51-410-3130</td>
            <td className='w-[140px] text-center'>
              <ButtonGroup>
                <IconButton
                  color='teal'
                  aria-label='Edit'
                  icon={<ViewIcon />}
                />
                <IconButton
                  color='red'
                  aria-label='Delete'
                  icon={<DeleteIcon />}
                  onClick={() => handleDeleteClick(9177)}
                />
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </table>
      <DeleteUserModul
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default OrdersTable;
