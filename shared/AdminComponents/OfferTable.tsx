import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { OfferValues, getCategories } from './Services/axios';
import ModulDelete from './ModulDelete';
import { useDispatch, useSelector } from 'react-redux';





const OfferTable: React.FC = () => {

  const dispatch = useDispatch();

  const toast = useToast();

  const offerNameRef = useRef<HTMLInputElement>(null);
  const offerDescRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>('');

  const [hidden, setHidden] = useState(true);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const [offerId, setOfferId] = useState('');

  const [activeId, setActiveId] = useState('');

  const offerRed:OfferValues[] = useSelector((state:any) => state.global.offer);

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };

  const getImgUrl = (url: string): void => {
    setImgUrl(url);
  };
 

 const handleDeleteButton  = () =>{
      setDeleteModal(true)
  }

 const handleCloseModal = () =>{
  setDeleteModal(false)
 } 


  return (
    <div className='m-3'>
      <table className='w-full bg-white'>
        <thead>
          <tr>
            <th className='py-4'>ID</th>
            <th className='py-4'>Image</th>
            <th className='py-4'>Title</th>
            <th className='py-4'>Descriptions</th>
          </tr>
        </thead>
        <tbody>
          {/* {testData.map((item, index) => (
            <tr key={index}>
              <td className='text-center h-12 text-base'>{item.Id}</td>
              <td className='text-center h-12 text-base'>
                {item.Name ? (
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={item.Image}
                      alt={item.Name}
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                    />
                  </Box>
                ) : (
                  'No Image'
                )}
              </td>
              <td className='text-center h-12 text-base'>{item.Name}</td>
              <td className='text-center h-12 text-base'>{item.Slog}</td>
              <td className='text-right pr-2 g-2'>
                <IconButton
                  aria-label='Edit'
                  icon={<EditIcon />}
                  size='sm'
                  color='teal'
                  variant='unstyled'
                />
                <IconButton
                  aria-label='Delete'
                  icon={<DeleteIcon />}
                  size='sm'
                  color='red'
                  variant='unstyled'
                  onClick={handleDeleteButton}
                />
              </td>
            </tr>
          ))} */}

          
          {deleteModal && (
          <ModulDelete
          isOpen={deleteModal}
          onClose={handleCloseModal}
          />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OfferTable;