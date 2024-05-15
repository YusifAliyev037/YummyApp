import { Box, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

function OfferInputs() {
  return (
    <Box backgroundColor={"#43445A"}  className='w-[60%]   rounded-[14px] flex flex-col  ' >


    <Box className='p-[23px] flex flex-col gap-[16px]'>
      <Text  color={"#C7C7C7"}  className="font-roboto text-lg font-medium leading-6 tracking-tighter text-left" >
        Tittle
      </Text>
      <Input _placeholder={{color:"#F2F2F2",fontFamily:"Roboto",fontWeight:"500",bgSize:"26px"}} background={"#5A5B70"} border={"none"} borderRadius={"18px"} height={"46px"} placeholder='Do you like Pizza at Papa John’s? '   />
    </Box>



    <Box className='p-[23px] flex flex-col gap-[16px] ' >
    <Text color={"#C7C7C7"} className="font-roboto text-lg font-medium leading-6 tracking-tighter text-left" >
    Description
      </Text>
      <Textarea background={"#5A5B70"} border={"none"} _placeholder={{color:"#F2F2F2",fontFamily:"Roboto",fontWeight:"500",bgSize:"26px"}} borderRadius={"24px"} height={"108px"} placeholder='Yes you like pizza,Yummy '  />

    </Box>
    


   </Box>
  )
}

export default OfferInputs
