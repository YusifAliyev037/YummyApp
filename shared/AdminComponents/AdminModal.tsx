import React, { useEffect, useState } from 'react';
import { Box, Button,  Image, Input, Text, Textarea } from '@chakra-ui/react';


interface Props{
  hidden:boolean;
  Sethidden: React.Dispatch<React.SetStateAction<boolean>>;
  addName:String;
  imgName:String;
  informationName:String;
  component: JSX.Element;


}
const AdminModal: React.FC<Props> = ({ hidden, Sethidden,addName,imgName,informationName,component }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.getElementById('admin-modal');
      if (modal && !modal.contains(event.target as Node)) {
        Sethidden(true);
      }
    };

    if (!hidden) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [hidden, Sethidden]);
  





  return (
<Box
  id="admin-modal"
  width="66%"
  backgroundColor="#38394E"
  className={`h-full z-20  flex flex-col gap-[20px] container mx-auto px-8 ${hidden?"hidden":"fixed"}`}
  justifyContent={"space-between"}
  
  style={{ right: 0 }}
>

<Box className=' gap-[78px] flex flex-col container mx-auto px-8'>
<Box className='  pt-[28px]'>
    <Text color={"#C7C7C7"} className="font-roboto text-2xl font-medium leading-6 tracking-tighter text-left" >
      {addName}

    </Text>
  </Box>


  <Box justifyContent={"space-between"} className='flex  '>
    <Text color={"#C7C7C7"} className="font-roboto text-lg font-medium leading-6 tracking-tighter text-left">
    {imgName}
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
{informationName}
    </Text>

{component}

  </Box>



</Box>

 
  <Box display={"flex"} justifyContent={"center"} gap={"41px"} borderTop={"2px"} color={"#43445A"} padding={"16px"}  >
      <Button width={"400px"} height={"50px"} borderRadius={"14px"} color={"#FFFFFF"} background={"#43445A"} onClick={()=>Sethidden((prev)=>!prev)} >
      Cancel

      </Button>


      <Button width={"400px"} height={"50px"} borderRadius={"14px"} color={"#FFFFFF"} background={"#C035A2"} onClick={()=>Sethidden((prev)=>!prev)}   >
      Create  Offer
        
      </Button>
    </Box>

</Box>
  );
}

export default AdminModal;