import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { delCategories, getCategories } from './Services/axios';
import ModulDelete from './ModulDelete';

interface CategoryType {
  id: string;
  img_url: string;
  name: string;
  slug: string;
}

interface Props {
  customIds?:number[];
}

const TableCategory: React.FC<Props> = ({ customIds }) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<CategoryType | null>(null)


 const handleDeleteButton  = (categoryId:CategoryType) =>{
  setCategoryId(categoryId)
      setDeleteModal(true)
  }

 const handleCloseModal = () =>{
  setDeleteModal(false)
 } 

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

  async function deleteCategory(){
    if(!categoryId) return;
    try{
      await delCategories(categoryId.id)
      setCategories(categories.filter((res)=> res.id !==categoryId.id))
    }catch(error){
      console.log(error);
      
    }
    setDeleteModal(false)
  }

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
              <td className='text-center h-12 text-base'>{customIds ? customIds[index] + 9170 : index + 9170}</td>
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
                      style={{ width: '40px', height: '40px', objectFit: 'cover' }}
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
                  onClick={()=>handleDeleteButton(item)}
                />
              </td>
            </tr>
          ))}

          
          {deleteModal && (
          <ModulDelete
          isOpen={deleteModal}
          onClose={handleCloseModal}
          onConfirm={deleteCategory}
          />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCategory;
