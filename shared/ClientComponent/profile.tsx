import { Box, Button, Input, Text, Toast, useToast } from '@chakra-ui/react';
import React, { ChangeEvent, useState, FormEvent, useEffect } from 'react';
import { updateProfile } from '../AdminComponents/Services/axios';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addlogin, updateLogin } from '../redux/global/globalSlice';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../../server/configs/firebase";
import { useRouter } from 'next/router';
import { translate } from '@/public/lang/translate';

interface FormRegister {
  phone?: string;
  username?: string;
  fullname?: string;
  email?: string;
  address?: string;
  password?: string;
  access_token?: string | undefined;
  img_url?: string | undefined;
}

const Profile = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.global.login);

  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgOnload, setImgOnload] = useState(false);

  const [formData, setFormData] = useState<FormRegister>({
    phone: '',
    username: '',
    fullname: '',
    email: '',
    address: '',
    password: '',
    img_url: '',
  });

 
  

  const getİmage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const name = file.name;
    const imageRef = ref(fileStorage, `files/images/${name}`);

    uploadBytes(imageRef, file).then((snapshot) => {
      setImgOnload(true);
      getDownloadURL(snapshot.ref).then((url) => {
        setImgOnload(false);
        setImgUrl(url);
        setFormData((prevData) => ({
          ...prevData,
          img_url: url,
        }));
      });
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === 'email') return;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email || '')) {
      alert('Please enter a valid email address.');
      return;
    }
    try {
      if (formData.access_token) {
        const response = await updateProfile(formData, formData.access_token);
        dispatch(updateLogin(response?.data));
        dispatch(addlogin(formData));

        toast({
          title: 'Success',
          status: 'success',
          isClosable: true,
          position: 'top-right',
        });

        console.log(response);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
    console.log(formData);
  };

  useEffect(() => {
    if (loginState !== formData) {
      setFormData((prevData) => ({
        ...prevData,
        ...loginState,
      }));
    }
  }, [loginState]);
  // translate
  const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  
  const locale = router.locale || 'en';
  return (
    <Box className='flex flex-col  mt-4 mr-8   h-[550px] gap-9  bg-white40'>
      <Box className='ml-8 mt-10 '>
        <Text
          width='164px'
          height='32px'
          color='#4F4F4F'
        >
          {translate(" Profile",locale)}
         
        </Text>
      </Box>
      <Box>
        <Box className='flex justify-center '>
          <label htmlFor='file-input'>
            {imgUrl ? (
              <img
                src={imgUrl}
                alt='Profile'
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
            ) : (
              <Box className='relative'>
                <input onChange={getİmage} type='file' id='file' accept='image/*'
                className='absalute opacity-0 cursor-pointer'
                />
                <img src="/uploaduser.svg" alt="Upload" />
              </Box>
            )}
          </label>
          <Input
            type='file'
            id='file-input'
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </Box>
      </Box>
      <Box className='flex justify-center'>
        <Box ml='4'>
          <Box>
            <Text color='#4F4F4F'>Contact</Text>
            <Input
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              width='444px'
              height='53px'
              bg='white'
              type='number'
              placeholder='+994'
            />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>{translate("User Name",locale)}</Text>
            <Input
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              width='444px'
              height='53px'
              bg='white'
              type='text'
              placeholder='aliyevAli'
            />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>{translate("Full Name",locale)}</Text>
            <Input
              name='fullname'
              value={formData.fullname}
              onChange={handleInputChange}
              width='444px'
              height='53px'
              bg='white'
              type='text'
              placeholder='Aliyev Ali'
            />
          </Box>
        </Box>
        <Box ml='4'>
          <Box>
            <Text color='#4F4F4F'>{translate("Email",locale)}</Text>
            <Input
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              width='444px'
              height='53px'
              bg='white'
              type='email'
              placeholder='aliyev@gmail.com'
              focusBorderColor='red.500'
            />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>{translate("Address",locale)}</Text>
            <Input
              name='address'
              value={formData.address}
              onChange={handleInputChange}
              width='444px'
              height='53px'
              bg='white'
              type='text'
              placeholder='Yasamal 104, Baku'
            />
          </Box>
          <Button
            onClick={handleSubmit}
            type='submit'
            marginTop='32px'
            width='444px'
            height='53px'
            bg='#6FCF97'
          >
            {translate("Save",locale)}
            
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;


