import React, { useState } from 'react';
import { Box, Button, Flex, Image, Input, Text, Textarea } from '@chakra-ui/react';

function AdminModal() {





  return (
<Box
 
  width="66%"
  backgroundColor="#38394E"
  className={`h-full z-20  flex flex-col gap-[20px] container mx-auto px-8 fixed`}
  justifyContent={"space-between"}
  
  style={{ right: 0 }}
>

<Box className=' gap-[78px] flex flex-col container mx-auto px-8'>
<Box className='  pt-[28px]'>
    <Text color={"#C7C7C7"} className="font-roboto text-2xl font-medium leading-6 tracking-tighter text-left" >
      Add Offer

    </Text>
  </Box>


  <Box justifyContent={"space-between"} className='flex  '>
    <Text color={"#C7C7C7"} className="font-roboto text-lg font-medium leading-6 tracking-tighter text-left">
    Upload  image
    </Text>
    <Box backgroundColor={"#43445A"}  className='w-[60%] h-[122px] rounded-[14px] flex justify-center items-center  '>
     <Box className='flex flex-col'>
     <Image src='/upload.svg' />
      <Text color={"#C7C7C7"} className="font-roboto text-lg font-medium leading-6 tracking-tighter text-left"  >
      upload
      </Text>
     </Box>
    </Box>

  </Box>



  
  <Box  justifyContent={"space-between"} className='flex  ' >
    <Text color={"#C7C7C7"} className="font-roboto text-lg font-medium leading-6 tracking-tighter text-left" >
Add your Offer information
    </Text>

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

  </Box>



</Box>

 
  <Box display={"flex"} justifyContent={"center"} gap={"42px"} borderTop={"2px"} color={"#43445A"} padding={"16px"}  >
      <Button width={"400px"} height={"50px"} borderRadius={"14px"} color={"#FFFFFF"} background={"#43445A"} >
      Cancel

      </Button>


      <Button width={"400px"} height={"50px"} borderRadius={"14px"} color={"#FFFFFF"} background={"#C035A2"}  >
      Create  Offer
        
      </Button>
    </Box>

</Box>
  );
}

export default AdminModal;