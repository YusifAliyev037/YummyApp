import { Box, Button, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <Box className='flex flex-col  mt-4 mr-8   h-[550px] gap-9  bg-white40'>
        <Box className='ml-8 mt-10 '>
          <Text width='164px' height='32px' color='#4F4F4F'>Profile</Text>
        </Box>
      <Box>
        
        <Box className='flex justify-center'>
          <img src="/uploaduser.svg" alt="upload" />
        </Box>
      </Box>
      <Box className='flex justify-center'>
        <Box ml='4'>
          <Box >
            <Text color='#4F4F4F'>Contact</Text>
            <Input width='444px' height='53px' bg='white' type='number' placeholder='+994' />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>User Name</Text>
            <Input width='444px' height='53px' bg='white' type='text' placeholder='aliyevAli' />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>Full Name</Text>
            <Input width='444px' height='53px' bg='white' type='text' placeholder='Aliyev Ali' />
          </Box>
        </Box>
        <Box ml='4'>
          <Box>
            <Text color='#4F4F4F'>Email</Text>
            <Input width='444px' height='53px' bg='white' type='email' placeholder='aliyev@gmail.com' />
          </Box>
          <Box marginTop='7px'>
            <Text color='#4F4F4F'>Address</Text>
            <Input width='444px' height='53px' bg='white' type='text' placeholder='Yasamal 104, Baku' />
          </Box>
          <Button marginTop='32px' width='444px' height='53px' bg='#6FCF97'>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
