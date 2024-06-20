import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

const ClientHeader = dynamic(() => import('../../shared/ClientComponent/ClientHeader'));
const Footer = dynamic(() => import('../../shared/ClientComponent/ClientFooter'));
const UserModul = dynamic(() => import('@/shared/ClientComponent/UserModul'));
const OrdersTable = dynamic(() => import('@/shared/ClientComponent/Orders'));

const Orders = () => {
  return (
    <Box>
      <ClientHeader />
      <Box className="flex" width={'100%'}>
    
        <Box display={['none', 'block']} width={['100%', '26%']} height={['auto', '634px']}>
          <UserModul />
        </Box>
        <Box width={['100%', '74%']}>
          <OrdersTable />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Orders;
