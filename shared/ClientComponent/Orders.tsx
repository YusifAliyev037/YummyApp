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
import { GetUserOrder, deleteUserOrder } from '../AdminComponents/Services/axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { filluserOrder } from '../redux/global/globalSlice';
import { log } from 'console';
import Login from '@/pages/login';
import SizeExample from './Section5/ModalOrders';



 export interface OrderItem {
  amount: number;
  count: number;
  created: number;
  description: string;
  id: string;
  img_url: string;
  name: string;
  price: number;
  rest_id: string;
 
}






const OrdersTable: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  
  const dispatch = useDispatch();
  const orderArr = useSelector((state: RootState) => state.global.userOrder) ;

  async function getorder () {
    let data=await GetUserOrder()
    dispatch(filluserOrder(data.data.result.data))    
    
  }

  useEffect(()=>{
    getorder()

  },[])

  const handleDeleteClick = (orderId: string) => {
    console.log(orderId);
    
    setSelectedOrder(orderId);
    
    
    onOpen();
  };

  const handleConfirmDelete = () => {
    if (selectedOrder !== null) {
    

        deleteUserOrder(selectedOrder);
        const filteredOrders = orderArr.filter(order => order.id !== selectedOrder);
        dispatch(filluserOrder(filteredOrders))  


    
     
    }
    console.log('modal', );
    onClose();
  };

  function view(id:string){
    setIsOpenViewModal(true)
    const filteredOrders = orderArr.filter(order => order.id == id);
    setOrders(filteredOrders[0].products)

  
    


  }
  

function formatTimestampToDate(timestamp:number) {
  if (!timestamp) {
    return 'Invalid date'; 
  }
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

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
          {orderArr.map((order,index) => (
            <tr
              key={order.id}
              className='h-[60px] border-b-2 p-8 text-ordersBg'
            >
              <td className='w-[100px] text-center'>{9100+index}</td>
              <td className='w-[100px] text-center'>{order.created && formatTimestampToDate(order.created)}</td>

              <td className='w-[200px] text-center'>
               {order.delivery_address}
              </td>
              <td className='w-[100px] text-center'>{order.amount}</td>
              <td className='w-[100px] text-center'>{translate(parseInt(order.payment_method || '0') === 0 ? 'Pay Cash' : 'Credit Card', locale)}</td>

              <td className='w-[100px] text-center'>{order.contact
              }</td>
              <td className='w-[140px] text-center'>
              <ButtonGroup>
               <IconButton
               color='teal'
               aria-label='Edit'
              icon={<ViewIcon />}
              onClick={() => view(order.id as string)}

/>
                  <IconButton
                    color='red'
                    aria-label='Delete'
                    icon={<DeleteIcon />}
                    onClick={() => handleDeleteClick(order.id as string)}
                  />
                </ButtonGroup>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
      <DeleteUserModul
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={()=>handleConfirmDelete()}
        
      />

<SizeExample isOpen={isOpenViewModal} orders={orders} setIsOpenSizeExample={setIsOpenViewModal} onClose={() => setIsOpenViewModal(false)} />
    </Box>
  );
};

export default OrdersTable;
