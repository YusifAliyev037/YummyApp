import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { getCategories } from './Services/axios';

interface CategoryType {
  id: number;
  img_url: string;
  name: string;
  slug: string;
}

const TableCategory: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function fetchCategories() {
    try {
      const res = await getCategories();
      setCategories(res?.data.result.data);
       console.log(res?.data);
       
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='m-3'>
      <table className='w-full bg-white'>
        <thead>
          <tr>
           <th className='py-4'>ID</th>
           <th className='py-4'>Image</th>
           <th className='py-4'>Name</th>
           <th className='py-4'>Slug</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, index) => (
            <tr key={index}>
              <td className='text-center h-12 text-base'>{item.id}</td>
              <td className='text-center h-12 text-base'>
                {item.name ? (
                  <Box
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={item.img_url}
                      alt={item.name}
                      style={{ width: '40px', height: '40px', objectFit:"cover"}}
                    />
                  </Box>
                ) : (
                  'No Image'
                )}
              </td>
              <td className='text-center h-12 text-base'>{item.name}</td>
              <td className='text-center h-12 text-base'>{item.slug}</td>
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
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCategory;
