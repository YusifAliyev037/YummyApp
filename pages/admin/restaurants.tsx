import {
  InputGroup,
  Button,
  Select,
  Text,
  Box,
 
  useToast,
} from '@chakra-ui/react';
import Head from 'next/head';
import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fillRestaurants,


} from '@/shared/redux/global/globalSlice';
import { RootState } from '@/shared/redux/store';
import {
 
  getRestaurants,
  Restaurant,
  AddRestaurant,
  getCategories,

} from '@/shared/AdminComponents/Services/axios';
import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1';
import RestaurantCard from '@/shared/AdminComponents/RestaurantCard';
import { useRouter } from 'next/router';
import { translate } from '@/public/lang/translate';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))

const Restaurants: FC = () => {

  const toast = useToast()

  const dispatch = useDispatch();

  const [data, setData] = useState<Restaurant[]>([]);

  const [data2, setData2] = useState<Restaurant[]>([]);

  const [hidden, setHidden] = useState<boolean>(true);


  const [resCategoryARR, setResCategoryARR] = useState<string[]>([]);
  
  const restaurants: Restaurant[] = useSelector((state: RootState) => state.global.restaurant) || [];



  const changeHidden = (): void => {
    setHidden((prev) => !prev);
  };


  async function fetchRestaurants() {
    try {
      const res = await getRestaurants();
      const categoryArr = res?.data.result.data;
      setData(categoryArr);
      setData2(categoryArr);
      dispatch(fillRestaurants(categoryArr)); 
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

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

  async function handleCreateRestaurant() {
    const resName: any = resNameRef.current?.value;
    const address: any = addressRef.current?.value;
    const category_id: any = categoryIdRef.current?.value;
    const cuisine: any = cuisineRef.current?.value;
    const price: any = priceRef.current?.value;
    const delivery_min: any = deliveryMinRef.current?.value;
    const img_url: any = imgUrl;
 
    

    if (!isInputValid(
      resName,
      address,
      category_id,
      cuisine,
      price,
      delivery_min,
      img_url
    )) {
      toast({
        title: "Please fill all the inputs!",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
      return
    }

    const form: Restaurant = {
      name: resName,
      category_id: category_id,
      img_url: img_url,
      cuisine: cuisine,
      delivery_min: delivery_min,
      delivery_price: price,
      address: address,
    };

    try {
      const res = await AddRestaurant(form);

      if (res?.status === 201) {
        if (
          resNameRef?.current &&
          cuisineRef?.current &&
          categoryIdRef?.current &&
          deliveryMinRef?.current &&
          priceRef?.current &&
          addressRef?.current &&
          imgRef?.current
        ) {
          resNameRef.current.value = "";
          cuisineRef.current.value = "";
          categoryIdRef.current.value = "";
          deliveryMinRef.current.value = "";
          priceRef.current.value = "";
          addressRef.current.value = "";
          imgRef.current.value = ""
        }

        setTimeout(() => {
          changeHidden()
        }, 500);
        toast({
          title: "Restaurant created successfully!",
          status: "success",
          duration: 2000,
          position: "top-right",
          variant: "subtle"
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred while adding the restaurant.",
        status: "warning",
        duration: 2000,
        position: "top-right",
        variant: "subtle"
      });
    }
  }

  const handleRestaurantClick = () => setHidden(false);





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

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;

    if (value == "all") {
      dispatch(fillRestaurants(data2));
      return
    }

    let newValue = data2.filter((item: any) => item?.category_id == value)

    dispatch(fillRestaurants(newValue))
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
  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';
  return (
    <Box className='bg-darkBlue10 min-h-screen'>
      <Box as='header'>
        <Head>
          <title>{translate("Restaurants",locale)}</title>
          <MetaSeo
            title='Restaurants'
            desc='Restaurants Page'
          />
          <link
            rel='icon'
            href="/adminn.ico"
          />
        </Head>
        <Header />
        <AdminModal1
          arr={resCategoryARR}
          mod='2'
          p='Add Restaurant  '
          p1='Upload  image'
          p2='Add your Restaurant information'
          btn='Create Restaurant'
          getImgUrl={getImgUrl}
          hidden={hidden}
          onClickClose={changeHidden}
          categoryIdRef={categoryIdRef}
          addressRef={addressRef}
          cuisineRef={cuisineRef}
          priceRef={priceRef}
          deliveryMinRef={deliveryMinRef}
          resNameRef={resNameRef}
          ButtonOnClick={handleCreateRestaurant}
          imgRef={imgRef}
        />
      
      
      </Box>
      <Box
        as='main'
        className='flex flex-col md:flex-row'
      >
        <PushModul />
        <Box
          as='section'
          className='w-full md:mr-8'
        >
          <Box
            bg='#27283C'
            className='relative flex flex-col md:flex-row items-center mb-12 w-full px-8 mt-20 rounded-xl'
            height={73}
          >
            <Text
              color='white'
              className='absolute left-8 md:relative mb-2 md:bottom-auto md:left-auto w-32 md:mb-0'
            >
              {translate("Restaurants",locale)}
             
            </Text>
            <InputGroup className='flex flex-wrap justify-end items-center gap-7 w-full md:w-auto mt-4 md:mt-0'>
              <Select
                bgColor='#5A5B70'
                borderRadius={14}
                width={200}
                height={35}
                placeholder='Select Category'
                className='hidden md:block w-full md:w-auto'
                onChange={handleSelectChange}
              >
                {Array.isArray(restaurants) && restaurants.map((restaurant, index) => (
                  <option
                    key={index}
                    value={restaurant.category_id}
                  >
                    {restaurant.name}
                  </option>
                ))}
              </Select>
              <Box className='w-full md:w-auto'>
                <Button
                  borderRadius={14}
                  colorScheme='pink'
                  onClick={handleRestaurantClick}
                  className='w-full md:w-auto'
                >
                  {translate("+ ADD RESTAURANT",locale)}
                  
                </Button>
              </Box>
            </InputGroup>
          </Box>
          
          <RestaurantCard/>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Restaurants;
