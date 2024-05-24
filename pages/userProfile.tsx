import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import User from './user'
import UserModul from '@/shared/ClientComponent/UserModul'
import ClientHeader from '@/shared/ClientComponent/ClientHeader'

const UserProfile = () => {
  return (
    <Box>
        <ClientHeader/>
      <UserModul/>
      <Text>salam</Text>
    </Box>
  )
}

export default UserProfile
