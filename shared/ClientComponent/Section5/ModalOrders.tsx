import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { translate } from '@/public/lang/translate';
import { OrderItem } from '../Orders';

interface SizeExampleProps {
  isOpen: boolean; 
  onClose: () => void; 
  setIsOpenSizeExample: (isOpen: boolean) => void;
  orders:OrderItem [];
}

const SizeExample: React.FC<SizeExampleProps> = ({ isOpen, onClose, setIsOpenSizeExample ,orders }) => {
    console.log(orders);
    
  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="70%">
        
        <ModalCloseButton />
        <ModalBody className='flex items-center justify-center'>
          <table className='bg-white m-5'>
            <thead className='h-[50px] border-b-2 text-ordersBg'>
              <tr className='p-8'>
                <th className='w-[120px] text-center'>Image</th>
                <th className='w-[120px] text-center'>"Name</th>
                <th className='w-[150px] text-center'>Price</th>
                <th className='w-[150px] text-center'>Count</th>
                <th className='w-[150px] text-center'>Amount</th>
              </tr>
            </thead>
            <tbody>
            {orders.map(order => {
  return (
    <tr className='h-[60px] border-b-2 p-8 text-ordersBg' key={order.id}>
      <td className='w-[100px] text-center'>
  <img src={order.img_url} alt='Product Image' />
</td>
<td className='w-[100px] text-center'>{order.name}</td>
<td className='w-[100px] text-center'>{order.price}</td>
<td className='w-[100px] text-center'>{order.count}</td>
<td className='w-[100px] text-center'>{order.amount}</td>
      
      
    </tr>
  );
})}

            </tbody>
          </table>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SizeExample;
