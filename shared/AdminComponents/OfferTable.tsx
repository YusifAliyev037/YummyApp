import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { getCategories } from './Services/axios';
import ModulDelete from './ModulDelete';

interface CategoryType {
  id: number;
  img_url: string;
  name: string;
  slug: string;
}

interface TestData {
    Id: number;
    Image: string;
    Name: string;
    Slog: string;
  }
  
  interface Props {
    testData: TestData[];
  }

const OfferTable: React.FC<Props> = ({ testData }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
 console.log(testData);
 

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
          {testData.map((item, index) => (
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
          ))}

          
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