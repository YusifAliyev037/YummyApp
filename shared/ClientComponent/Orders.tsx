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

  function view(id: string) {
    setIsOpenViewModal(true);
    const filteredOrders = orderArr.filter(order => order.id == id);
    
    if (filteredOrders.length > 0 && filteredOrders[0].products) {
      setOrders(filteredOrders[0].products);
    } else {
      setOrders([]);  // or handle the error case as needed
    }
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
    <Box   className='    md:mt-4 md:mr-8 md:bg-white40 ' display={"flex"} flexDirection={"column"} alignItems={{base:"cente",md:"start"}} justifyContent={{base:"center",md:"start"}}  >
      <Box className='m-8  '>
        <Text
       fontSize={{ base: "24px", md: "32px" }} 
       height={{ base: "24px", md: "32px" }}
       color="#4F4F4F"
        >
          {translate("Your Orders",locale)}
          
        </Text>
      </Box>
     
 <Box  className='overflow-auto   overflowX-auto overflowY-auto h-[300px] md:h-[400px] m-4' >
 <table className='bg-white    '>
        <thead className=' h-16 border-b-2 text-lg  text-ordersBg'>
          <tr className='p-8'>
            <th className='md:w-36 md:text-center md:text-xl text-sm '>{translate("ID",locale)}</th>
            <th className='md:w-36 md:text-center md:text-xl text-sm '>{translate("Time",locale)}</th>
            <th className='md:w-36 md:text-center md:text-xl text-sm '>{translate("Delivery Address",locale)}</th>

            <th className='md:w-36 md:text-center md:text-xl text-sm p-4'>{translate("Amount",locale)}</th>
            <th className='md:w-36 md:text-center md:text-xl text-sm '>{translate("Payment Method",locale)}</th>
            <th className='md:w-36 md:text-center md:text-xl text-sm '>{translate("Contact",locale)}</th>
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

     </Box>
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
