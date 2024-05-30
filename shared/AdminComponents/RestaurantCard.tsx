import { Box, ButtonGroup, Card, CardBody, IconButton, Image, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import { fillRestaurants, setIsDeleteModalOpen, setRestaurantToDelete } from '../redux/global/globalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant, deleteRestaurant, getCategories, getEditRestaurant, updateRestaurant } from './Services/axios';
import { RootState } from '../redux/store';
import { AdminModal1 } from './AdminModal1';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ModulDelete from './ModulDelete';

function RestaurantCard() {
    const dispatch = useDispatch();

    const toast = useToast();

    const [editHidden, setEditHidden] = useState<boolean>(true);

    const [resCategoryARR, setResCategoryARR] = useState<string[]>([]);

    const [activeId, setActiveId] = useState('')

    const restaurants: Restaurant[] = useSelector((state: RootState) => state.global.restaurant) || [];
    const isDeleteModalOpen = useSelector(
        (state: RootState) => state.global.isDeleteModalOpen
      );
      const restaurantToDelete = useSelector(
        (state: RootState) => state.global.restaurantToDelete
      );

    const changeEditHidden = (): void => {
        setEditHidden((prev) => !prev);
      };
      const handleCloseModal = () => {
        dispatch(setIsDeleteModalOpen(false));
      };

      const categoryIdRef = useRef<HTMLInputElement>(null);
      const addressRef = useRef<HTMLInputElement>(null);
      const cuisineRef = useRef<HTMLInputElement>(null);
      const priceRef = useRef<HTMLInputElement>(null);
      const deliveryMinRef = useRef<HTMLInputElement>(null);
      const imgRef = useRef<HTMLInputElement>(null);
      const resNameRef = useRef<HTMLInputElement>(null);
      const [imgUrl, setImgUrl] = useState<string>('');

      function getImgUrl(url: string): void {
        setImgUrl(url);
      }



      const handleDeleteButtonClick = (restaurant: Restaurant) => {
        dispatch(setRestaurantToDelete(restaurant));
        dispatch(setIsDeleteModalOpen(true));
      };

      const handleDeleteConfirmed = async () => {
        if (!restaurantToDelete) return;
        try {
          await deleteRestaurant(restaurantToDelete.id);
    
          const updatedRestaurants = restaurants.filter(
            (restaurant) => restaurant.id !== restaurantToDelete.id
          );
    
          dispatch(fillRestaurants(updatedRestaurants));
        } catch (error) {
          console.log(error);
        }
        dispatch(setIsDeleteModalOpen(false));
      };

    async function handleEditRestaurant(id:string){
        setActiveId(id);
        setEditHidden(false)
    
        const res = await getEditRestaurant(id);
        console.log(res);
    
        if(res?.status === 200){
          const  currentData = res?.data.result.data;
          if(cuisineRef.current && 
            resNameRef.current && 
            addressRef.current && 
            deliveryMinRef.current && 
            priceRef.current && 
            imgRef.current && 
            categoryIdRef.current){
             (resNameRef.current as {value: string}).value = currentData?.resName || "";
             (addressRef.current as {value: string}).value = currentData?.address || "";
             (deliveryMinRef.current as {value: string}).value = currentData?.delivery_min || "";
             (priceRef.current as {value: string}).value = currentData?.price || "";
             (imgRef.current as {value: string}).value = currentData?.img_url || "";
             (categoryIdRef.current as {value: string}).value = currentData?.category_id || "";
             (cuisineRef.current as {value: string}).value = currentData?.cuisine || "";
            }
        }
        
      }
    
      async function editRestaurant(){
        const resName: any = resNameRef.current?.value;
        const address:any = addressRef.current?.value;
        const category_id:any = categoryIdRef.current?.value;
        const cuisine:any = cuisineRef.current?.value;
        const price:any = priceRef.current?.value;
        const delivery_min:any = deliveryMinRef.current?.value;
        const img_url:any = imgUrl;
    
        const form: Restaurant = {
          name: resName,
          category_id: category_id,
          img_url: img_url,
          cuisine: cuisine,
          delivery_min: delivery_min,
          delivery_price: price,
          address: address,
        };
    
        if(!isInputValid(
          resName,
          address,
          category_id,
          cuisine,
          price,
          delivery_min,
          img_url
        )){
          toast({
            title: 'Please fill all the inputs!',
            status: 'error',
            duration: 2000,
            position: 'top-right',
            variant: 'subtle',
          });
          return
    
        }
    
        const res = await updateRestaurant(activeId, form);
    
        if( res?.status === 200){
          toast({
            title: 'Restaurant updated successfully!',
            status: 'success',
            duration: 2000,
            position: 'top-right',
            variant: 'subtle',
          });
          changeEditHidden();
    
          const updatedRestaurants = restaurants.map((item:any)=>{
            if(item.id === activeId){
              return res.data.data
            }
            return item
          })
          dispatch(fillRestaurants(updatedRestaurants))
        }
      }

      function isInputValid(
        resName: string,
        address: string,
        category_id: number | undefined,
        cuisine: string,
        price: number,
        delivery_min: number,
        img_url: any
      ): boolean {
        return (
          !!resName &&
          !!address &&
          !!category_id &&
          !!cuisine &&
          !!price &&
          !!delivery_min &&
          !!img_url
        )
      }

      async function catigoriesRender2() {
        try {
          const response = await getCategories();
          const categoryArr = response?.data.result.data;
    
          let items = categoryArr.map((item: any) => item.name)
    
          setResCategoryARR(items)
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        catigoriesRender2()
      }, [])
  return (
   <Box>
<AdminModal1
          arr={resCategoryARR}
          mod='2'
          p='Edit Restaurant  '
          p1='Upload  image'
          p2='Update your Restaurant information'
          btn='Update Restaurant'
          getImgUrl={getImgUrl}
          hidden={editHidden}
          onClickClose={changeEditHidden}
          categoryIdRef={categoryIdRef}
          addressRef={addressRef}
          cuisineRef={cuisineRef}
          priceRef={priceRef}
          deliveryMinRef={deliveryMinRef}
          resNameRef={resNameRef}
          ButtonOnClick={editRestaurant}
          imgRef={imgRef}
          
        />
         <Box className='flex flex-wrap gap-4'>
            {Array.isArray(restaurants) && restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className='w-full md:w-[247px] h-[83px] flex flex-col justify-center p-2'
                boxShadow='lg'
                borderRadius='lg'
              >
                <CardBody className='flex items-center p-0'>
                  <Image
                    className='w-[65px] h-[65px] object-cover'
                    src={
                      restaurant.img_url ||
                      'https://media.traveler.es/photos/6137726a7ad90bc43bae0055/master/pass/123930.jpg'
                    }
                    alt={restaurant.name}
                    borderRadius='md'
                  />
                  <Stack
                    ml='2'
                    spacing='1'
                    flex='1'
                  >
                    <Text
                      fontSize='sm'
                      fontWeight='bold'
                    >
                      {restaurant.name}
                    </Text>
                    <Text fontSize='text-[5px]'>
                      Delivery Price: ${restaurant.delivery_price}
                    </Text>
                  </Stack>
                  <ButtonGroup
                    spacing='1'
                    flexDirection='column'
                    justifyContent='center'
                    ml='auto'
                  >
                    <IconButton
                      aria-label='Edit'
                      icon={<EditIcon />}
                      size='xs'
                      fontSize='12px'
                      variant='ghost'
                      colorScheme='teal'
                      onClick={()=> handleEditRestaurant(restaurant.id)}
                    />
                    <IconButton
                      aria-label='Delete'
                      icon={<DeleteIcon />}
                      size='xs'
                      fontSize='12px'
                      variant='ghost'
                      colorScheme='red'
                      onClick={() => handleDeleteButtonClick(restaurant)}
                    />
                  </ButtonGroup>
                </CardBody>
              </Card>
            ))}
          </Box>
          {isDeleteModalOpen && (
        <ModulDelete
          isOpen={isDeleteModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleDeleteConfirmed}
        />
      )}

   </Box>
  )
}

export default RestaurantCard