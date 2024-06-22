import { translate } from '@/public/lang/translate';
import {  getOrdersList } from '@/shared/AdminComponents/Services/axios';
import TableForOrder from '@/shared/AdminComponents/Table';
import { Box, Flex, Text, Spinner } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))

function Orders() {
  let TableNames = ["ID", "Customer ID", "Time", "Delivery Address", "Amount", "Payment Method", "Contact"];

  interface Product {
    count: number;
    description: string;
    id: string;
    img_url: string;
    name: string;
    price: number;
    rest_id: string;
    amount: number;
    created: number;
  }

  interface Order {
    id: string;
    amount: number;
    delivery_address: string;
    created: number; 
    contact: string;
    customer_id: string;
    payment_method: string;
    products: Product[];
  }

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  console.log(orders);

  async function getOrders() {
    try {
      let data = await getOrdersList();
      setOrders(data.data.result.data);
      setIsLoading(false); 
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to load orders. Please try again later.");
      setIsLoading(false); 
    }
  }

  const router = useRouter();
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
    getOrders();
  }, []);

  const locale = router.locale || 'en';

  return (
    <Box className="bg-darkBlue10 h-screen w-[100%]" >
      <Head>
        <title>{translate("Orders", locale)}</title>
        <MetaSeo title="Orders" desc="Orders Page" />
        <link rel="icon" href="/adminn.ico" />
      </Head>
      <Header />
      <Box display={"flex"}>
        <PushModul />
        <Box className='md:w-[78%] w-[100%] '>
          <Box display={"flex"} justifyContent={"flex-end"} height={"660px"} flexDirection={"column"} gap={"41px"}>
            <Box bg={"#27283C"} height={"73px"} borderRadius={"14px"} display={"flex"} alignItems={"center"}>
              <Text color="#F2F2F2DE" fontSize="21px" fontFamily="Roboto" lineHeight="21px" paddingLeft={"33px"}>
                {translate("Orders", locale)}
              </Text>
            </Box>
            <Box       height={{ base: '70vh', md: "464px" }} 
            overflowY="auto" 
            overflowX="auto" >
              {isLoading ? (
                <Flex justifyContent="center" alignItems="center" height="100%">
                  <Spinner size="xl" />
                </Flex>
              ) : error ? (
                <Text color="red.500">{error}</Text>
              ) : (
                <TableForOrder order={orders} name={TableNames} setOrders={setOrders} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Orders;
