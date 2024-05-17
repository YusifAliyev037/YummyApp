import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Form, delCategories, getCategories, updateCategories } from './Services/axios';
import ModulDelete from './ModulDelete';
import { useDispatch } from 'react-redux';

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

  const categoryRef = useRef<HTMLInputElement>(null);

  const slugRef = useRef<HTMLInputElement>(null);

  const imgRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch()

  const toast = useToast()

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
      toast({
        title: "Category in successfully!",
        status:"success",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });

    }catch(error){
      console.log(error);
      
    }
    setDeleteModal(false)
  }

  async function updateCategory(){
    const category = categoryRef?.current?.value;
    const slug = slugRef?.current?.value;
    const img = imgRef?.current?.value;


    const form: Form = {
      name:category,
      slug,
      img_url: img
    };

    if( !isInputValid(category, slug, img)){
      toast({
        title: "Please fill all the inputs!!",
        status:"success",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });
    }

    const res = await updateCategories(categoryId?.id ?? '', form);

    if(res?.status === 200){
      toast({
        title: "Category updated successfully!",
        status:"success",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });

      const updatedData = categories.map((item:any) =>{
        if(item.id === categoryId?.id){
          return res.data.data
        }
        return item
      })
    }


  }

  
  function isInputValid(
    category: string | undefined,
    slug: string | undefined,
    img: string | undefined
  ): boolean {
    return !!category && !!slug && !!img;
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
