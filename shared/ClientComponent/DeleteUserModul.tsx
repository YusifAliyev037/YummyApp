import React, { useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { translate } from '@/public/lang/translate';

interface DeleteUserModulProps {
  isOpen: boolean;

  onClose: () => void;
  onConfirm?: () => void;
}

const DeleteUserModul: React.FC<DeleteUserModulProps> = ({ isOpen, onClose,onConfirm }) => {
  const finalRef = useRef<HTMLDivElement>(null);
  const router=useRouter()
  
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  
  const locale = router.locale || 'en';
  const translatedMessage = translate("attention_message", locale);
  return (
    <>
      <Box
        as='h1'
        ref={finalRef}
        tabIndex={-1}
        aria-label='Focus moved to this box'
      >
        
      </Box>

      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='text-center'>
            {translate("Are you sure it’s deleted ?",locale)}
          
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <ModalBody>
      <div className="text-center" dangerouslySetInnerHTML={{ __html: translatedMessage }} />
    </ModalBody>
          </ModalBody>

          <ModalFooter justifyContent='center'>
            <Button
              className='w-28 text-black'
              colorScheme='white'
              mr={3}
              onClick={onClose}
              color='#BDBDBD'
              borderWidth='1px'
              borderColor='#BDBDBD'
            >
              {translate("Cancel",locale)}
           
            </Button>

            <Button className='w-28 text-white' colorScheme='red' onClick={onConfirm}>
            {translate("Delete",locale)}

              
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteUserModul;
