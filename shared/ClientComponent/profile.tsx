import { Box, Button, Input, Text } from '@chakra-ui/react';
import React from 'react';

const Profile = () => {
  return (
    <Box className='flex flex-col gap-9 bg-white40'>
      <Box>
        <Text color='#4F4F4F'>Profile</Text>
        <Box className='flex justify-center'>
          <img src="/uploaduser.svg" alt="upload" />
        </Box>
      </Box>
      <Box className='flex justify-center'>
        <Box ml='4'>
          <Box>
            <Text color='#4F4F4F'>Contact</Text>
            <Input width='444px' bg='white' type='number' placeholder='+994' />
          </Box>
          <Box marginTop='16px'>
            <Text color='#4F4F4F'>User Name</Text>
            <Input width='444px' bg='white' type='text' placeholder='aliyevAli' />
          </Box>
          <Box marginTop='16px'>
            <Text color='#4F4F4F'>Full Name</Text>
            <Input width='444px' bg='white' type='text' placeholder='Aliyev Ali' />
          </Box>
        </Box>
        <Box ml='4'>
          <Box>
            <Text color='#4F4F4F'>Email</Text>
            <Input width='444px' bg='white' type='email' placeholder='aliyev@gmail.com' />
          </Box>
          <Box marginTop='16px'>
            <Text color='#4F4F4F'>Address</Text>
            <Input width='444px' bg='white' type='text' placeholder='Yasamal 104, Baku' />
          </Box>
          <Button marginTop='40px' width='444px' bg='#6FCF97'>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
