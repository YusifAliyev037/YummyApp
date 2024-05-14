import React, { useRef } from 'react';
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
  useDisclosure,
} from '@chakra-ui/react';

interface ModulDeleteProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModulDelete: React.FC<ModulDeleteProps> = ({ isOpen, onClose }) => {
  const { onOpen } = useDisclosure();
  const finalRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        as='h1'
        ref={finalRef}
        tabIndex={-1}
        aria-label='Focus moved to this box'
      >
        Some other content that'll receive focus on close.
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
            Are you sure it’s deleted ?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text className='text-center'>
              Attention! If you delete this <br />product, it will not come
              back...
            </Text>
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
              Cancel
            </Button>

            <Button className='w-28 text-white' colorScheme='red'>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModulDelete;
