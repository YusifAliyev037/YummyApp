import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, useToast } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { OfferValues, delOffer, getCategories, getEditOffer, getOffer, updateOffer } from './Services/axios';
import ModulDelete from './ModulDelete';
import { useDispatch, useSelector } from 'react-redux';
import { fillOffer } from '../redux/global/globalSlice';
import { AdminModal1 } from './AdminModal1';
import { shortText } from '../utils/shortText';
import { useRouter } from 'next/router';
import { translate } from '@/public/lang/translate';




const OfferTable: React.FC = () => {

  const dispatch = useDispatch();

  const toast = useToast();

  const offerNameRef = useRef<HTMLInputElement>(null);
  const offerDescRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>('');

  const [hidden, setHidden] = useState(true);

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const [offerId, setOfferId] = useState<OfferValues | null>(null);

  const [activeId, setActiveId] = useState('');

  const offerRed:OfferValues[] = useSelector((state:any) => state.global.offer);

  const changeHidden = (): void => {
    setHidden((prev: boolean) => !prev);
  };

  const getImgUrl = (url: string): void => {
    setImgUrl(url);
  };
 
  const handleDeleteButton = (offerId: OfferValues) =>{
    setOfferId(offerId)
    setDeleteModal(true)
  
  }


 const handleCloseModal = () =>{
  setDeleteModal(false)
 } 


 async function hendleEditoffer(id:any){
    setActiveId(id);
    setHidden(false);

    const res = await getEditOffer(id)


    if(res?.status === 200) {
      const currentData = res?.data.result.data;
      if(offerNameRef.current && offerDescRef.current && imgRef.current) {
        (offerNameRef.current as {value: string}).value = currentData?.name || "";
        (offerDescRef.current as {value: string}).value = currentData?.slug || "";
        (imgRef.current as {src: string}).src = currentData?.img_url || ""; 
      }
    }
  };


async function updatesOffer() {
  const offerName = offerNameRef?.current?.value;
  const offerDesc = offerDescRef?.current?.value;
  const img = imgUrl;
  console.log(offerDesc);
  console.log(offerName);
  console.log(img);
  

  if (!isInputValid(offerName, offerDesc, img)) {
    toast({
      title: "Please fill all the inputs!",
      status: "warning",
      duration: 2000,
      position: "top-right",
      variant: "subtle"
    });
    return
  }

  const form: OfferValues = {
    name: offerName,
    description: offerDesc,
    img_url: img
  };

  try {
    const res = await updateOffer(activeId, form);

    if (res?.status === 200) {
      toast({
        title: 'Offer updated successfully!',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        variant: 'subtle',
      });
      changeHidden();
      const updatedData = offerRed.map((item: any) => {
        if (item.id === activeId) {
          return res.data.data;
        }
        return item;
      });
      dispatch(fillOffer(updatedData));
    }
  } catch (error) {
    toast({
      title: 'Error updating offer',
      status: 'error',
      duration: 2000,
      position: 'top-right',
      variant: 'subtle',
    });
  }
}



const deleteOffer = async () => {
  if (!offerId || !offerId.id) {
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
    const res = await delOffer(offerId.id);
    if (res?.status === 204) {
      const deletedArray = offerRed.filter((item) => item.id !== offerId.id);
      dispatch(fillOffer(deletedArray));
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


 const fetchOffer = async () => {
  try{

    const res = await getOffer();
    const offerArr = res?.data.result.data;
    dispatch(fillOffer(offerArr))

  }catch(error){
    console.log(error);
    
  }
 }

 useEffect(()=>{
  fetchOffer()
 },[])

 function isInputValid(
  offerName: string | undefined,
  offerDesc: string | undefined,
  img: string | undefined
): boolean {
  return !!offerName && !!offerDesc && !!img;
}
const router=useRouter()
useEffect(() => {
  const locale = localStorage.getItem('lang') || 'en';
  router.push(router.pathname, router.asPath, { locale });
}, []);
const locale = router.locale || 'en';
  return (
    <div className='m-3'>
       <AdminModal1
        onClickClose={changeHidden}
        mod='4'
        p='Edit Offer'
        p1='Upload  image'
        p2='Edit your offer information'
        btn='Upload Offer'
        hidden={hidden}
        ButtonOnClick={updatesOffer}
        offerNameRef={offerNameRef}
        offerDescRef={offerDescRef}
        imgRef={imgRef}
        getImgUrl={getImgUrl}
      />
      <table className='w-full bg-white'>
        <thead>
          <tr>
            <th className='py-4'>{translate("ID",locale)}</th>
            <th className='py-4'>{translate("Image",locale)}</th>
            <th className='py-4'>{translate("Title",locale)}</th>
            <th className='py-4'>{translate("Descriptions",locale)}</th>
          </tr>
        </thead>
        <tbody>
          {offerRed.map((item, index) => (
            <tr key={index}>
              <td className='text-center h-12 text-base'>{ shortText(item.id, 6)}</td>
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
              <td className='text-center h-12 text-base'>{ shortText(item.name,20) }</td>
              <td className='text-center h-12 text-base'>{  shortText(item.description,20)}</td>
              <td className='text-right pr-2 g-2'>
                <IconButton
                  aria-label='Edit'
                  icon={<EditIcon />}
                  size='sm'
                  color='teal'
                  variant='unstyled'
                  onClick={() => hendleEditoffer(item.id)}
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
          onConfirm={deleteOffer}
          />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OfferTable;