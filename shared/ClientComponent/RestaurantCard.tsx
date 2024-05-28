import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'

function RestaurantCard() {
  return (
    <Box className=' flex gap-10 flex-wrap'>

<Card className=' mt-6 h-80 w-52 cursor-pointer'>
    <CardBody>
               <Image src='https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg' alt='item.name' className=' object-cover' borderRadius='sm' height={"160px"} width={"160px"} />
        <Stack  height="100%">
               <Text className=' mt-2 text-gray600 font-medium text-xl'  fontFamily={"Roboto"} lineHeight={"20px"}>Coffe Mania</Text>
               <Text className=' font-medium text-sm text-gray300 mb-2'   fontFamily={"Roboto"} >chinese, sea-food, thai, lebanese, caribbean</Text>
            <Box className="flex items-center gap-3 ">
              <Text className=' text-gray600 font-medium text-base'  fontFamily={"Roboto"}>$5 Delivery</Text>
              <Text className=' bg-red400 py-1 px-3 rounded-30 text-white text-base font-medium'>
               09 Min
              </Text>                        
            </Box>
        </Stack>
    </CardBody>
</Card>
<Card className=' mt-6 h-80 w-52 cursor-pointer'>
    <CardBody>
               <Image src='https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg' alt='item.name' className=' object-cover' borderRadius='sm' height={"160px"} width={"160px"} />
        <Stack  height="100%">
               <Text className=' mt-2 text-gray600 font-medium text-xl'  fontFamily={"Roboto"} lineHeight={"20px"}>Coffe Mania</Text>
               <Text className=' font-medium text-sm text-gray300 mb-2'   fontFamily={"Roboto"} >chinese, sea-food, thai, lebanese, caribbean</Text>
            <Box className="flex items-center gap-3 ">
              <Text className=' text-gray600 font-medium text-base'  fontFamily={"Roboto"}>$5 Delivery</Text>
              <Text className=' bg-red400 py-1 px-3 rounded-30 text-white text-base font-medium'>
               09 Min
              </Text>                        
            </Box>
        </Stack>
    </CardBody>
</Card>

    </Box>
  )
}

export default RestaurantCard