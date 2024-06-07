import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Form, delCategories, getCategories, getEditCategies, updateCategories } from './Services/axios';
import ModulDelete from './ModulDelete';
import { useDispatch, useSelector } from 'react-redux';
import { fillCategory } from '../redux/global/globalSlice';
import { AdminModal1 } from './AdminModal1';

export interface CategoryType {
  id: string;
  img_url: string;
  name: string;
  slug: string;
}

interface Props {
  customIds?: number[];
}

const TableCategory: React.FC<Props> = ({ customIds }) => {
  const dispatch = useDispatch();

  const toast = useToast();

  const categoryRef = useRef<HTMLInputElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>('');
  const [hidden, setHidden] = useState(true);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<CategoryType | null>(null);
  const [activeId, setActiveId] = useState('');
  
  const catRed: CategoryType[] = useSelector((state: any) => state.global.category);

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };

  const getImgUrl = (url: string): void => {
    setImgUrl(url);
  };

  async function handleEditCategory(id: string) {
    setActiveId(id)
    setHidden(false);
     
    const res = await getEditCategies(id);
    console.log(res);
    
    if(res?.status === 200) {
      const currentData = res?.data.result.data;
      if(categoryRef.current && slugRef.current && imgRef.current) {
        (categoryRef.current as {value: string}).value = currentData?.name || "";
        (slugRef.current as {value: string}).value = currentData?.slug || "";
        (imgRef.current as {src: string}).src = currentData?.img_url || ""; 
      }
    }
  };

  async function updateCategory() {
    const category = categoryRef?.current?.value;
    const slug = slugRef?.current?.value;
    const img = imgRef.current?.src;

    const form: Form = {
      name: category,
      slug,
      img_url: img,
    };

    if (!isInputValid(category, slug, img)) {
      toast({
        title: 'Please fill all the inputs!',
        status: 'error',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      return;
    }

    const res = await updateCategories(activeId, form);

    if (res?.status === 200) {
      toast({
        title: 'Category updated successfully!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      changeHidden();
      const updatedData = catRed.map((item: any) => {
        if(item.id === activeId){
          return res.data.data
        }
        return item
      })
      dispatch(fillCategory(updatedData))
    }
  };

  const isInputValid = (
    category: string | undefined,
    slug: string | undefined,
    img: string | undefined
  ): boolean => {
    return !!category && !!slug && !!img;
  };

  const handleDeleteButton = (categoryId: CategoryType) => {
    setCategoryId(categoryId);
    setDeleteModal(true);
  };

  const handleCloseModal = () => {
    setDeleteModal(false);
  };

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      const categoryArr = res?.data.result.data;
      dispatch(fillCategory(categoryArr));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async () => {
    if (!categoryId || !categoryId.id) {
      toast({
        title: 'No category selected for deletion.',
        status: 'error',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      return;
    }

    try {
      const res = await delCategories(categoryId.id);
      if (res?.status === 204) {
        const deletedArray = catRed.filter((item) => item.id !== categoryId.id);
        dispatch(fillCategory(deletedArray));
        toast({
          title: 'Category deleted successfully!',
          status: 'success',
          duration: 2000,
          position: 'top-right',
          variant: 'subtle',
        });
      } else {
        throw new Error('Failed to delete category');
      }
    } catch (error) {
      toast({
        title: 'Failed to delete category.',
        status: 'error',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
    } finally {
      setDeleteModal(false);
    }
  };

  return (
    <div className='m-3 xxl:ml-0 xs:ml-10'>
      <AdminModal1
        onClickClose={changeHidden}
        mod='1'
        p='Edit Category'
        p1='Upload image'
        p2='Edit your Category information'
        btn='Upload Category'
        hidden={hidden}
        ButtonOnClick={updateCategory}
        categoryRef={categoryRef}
        imgRef={imgRef}
        slugRef={slugRef}
        getImgUrl={getImgUrl}
      />
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
          {catRed?.map((item, index) => (
            <tr key={index}>
              <td className='text-center h-12 text-base'>
                {customIds ? customIds[index] + 9170 : index + 9170}
              </td>
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
                  onClick={() => handleEditCategory(item.id)}
                />
                <IconButton
                  aria-label='Delete'
                  icon={<DeleteIcon />}
                  size='sm'
                  color='red'
                  variant='unstyled'
                  onClick={() => handleDeleteButton(item)}
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
