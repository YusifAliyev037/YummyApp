import { Box, Button, Input, Text } from '@chakra-ui/react';

import React, { ChangeEvent, useState, FormEvent } from 'react';
import { updateProfile } from '../AdminComponents/Services/axios';
import { useRouter } from 'next/router';
interface FormRegister {
  contact?: string;
  username?: string;
  fullname?: string;
  email?: string;
  address?: string;
  password?: string; 
}
const Profile = () => {


 
  const [formData,setFormData]=useState<FormRegister>({
    contact:'',
    username:'',
    fullname:'',
    email:'',
    address:'',
    password:'',

  })
  const [selectedImage, setSelectedImage] = useState<File|null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string|null>(null);
  const router = useRouter();

   const handleInputChange=(e:ChangeEvent<HTMLInputElement>):void=>{
const {name,value}=e.target;
setFormData((prevData)=>({
  ...prevData,[name]:value,
}))
   }

   const handleImageChange=(e: ChangeEvent<HTMLInputElement>): void=>{
    const file=e.target.files?.[0] || null;
    if(file){
      setSelectedImage(file);
      const reader=new FileReader()
      reader.onloadend=()=>{
        setImagePreviewUrl(reader.result as string);
      }
      reader.readAsDataURL(file);
    }

   }
   const handleSubmit= async (e: FormEvent): Promise<void>=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email || '')) {
      alert('Please enter a valid email address.');
      return;
    }
    try {
      const response=await updateProfile(formData)
      console.log('Profile updated successfully:',response);
      
setFormData({
  contact:'',
  username:'',
  fullname:'',
  email:'',
  address:'',

})
      console.log('Profile updated successfully:', response)
    } catch (error) {
      console.error('Error updating profile:', error);
    }
console.log(formData);

   }

  return (
    <Box className='flex flex-col  mt-4 mr-8   h-[550px] gap-9  bg-white40'>
        <Box className='ml-8 mt-10 '>
          <Text width='164px' height='32px' color='#4F4F4F'>Profile</Text>
        </Box>
      <Box>

        
      <Box className='flex justify-center '>
          <label htmlFor="file-input">
            {imagePreviewUrl ? (
              <img src={imagePreviewUrl} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            ) : (
              <img src="/uploaduser.svg" alt="Upload" />
            )}
          </label>
          <Input type="file" id="file-input" style={{ display: 'none' }} onChange={handleImageChange} />
        </Box>
      </Box>
      <Box className='flex justify-center'>
    
        <Box ml='4'>
          <Box >
            <Text color='#4F4F4F'>Contact</Text>
            <Input name='contact' value={formData.contact} onChange={handleInputChange} width='444px' height='53px' bg='white' type='number' placeholder='+994' />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>User Name</Text>
            <Input name='username' value= {formData.username} onChange={handleInputChange} width='444px' height='53px' bg='white' type='text' placeholder='aliyevAli' />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>Full Name</Text>
            <Input name='fullname' value={formData.fullname} onChange={handleInputChange} width='444px' height='53px' bg='white' type='text' placeholder='Aliyev Ali' />
          </Box>
        </Box>
        <Box ml='4'>
          <Box>
            <Text color='#4F4F4F'>Email</Text>
            <Input name='email' value= {formData.email} onChange={handleInputChange} width='444px' height='53px' bg='white' type='email' placeholder='aliyev@gmail.com' />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>Address</Text>
            <Input name='address' value= {formData.address} onChange={handleInputChange} width='444px' height='53px' bg='white' type='text' placeholder='Yasamal 104, Baku' />
          </Box>
          <Button onClick={handleSubmit} type='submit' marginTop='32px' width='444px' height='53px' bg='#6FCF97'>
            Save
          </Button>
        </Box>
     
      </Box>
    </Box>
  );
}

export default Profile;
