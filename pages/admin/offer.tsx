import { Box, Button, InputGroup, Text, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import OfferTable from '@/shared/AdminComponents/OfferTable';
import { OfferValues, createOffer } from '@/shared/AdminComponents/Services/axios';
import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1';
import { useRouter } from 'next/router';
import { translate } from '@/public/lang/translate';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))

const Offer: React.FC = () => {

  const toast = useToast();

  const offerNameRef = useRef<HTMLInputElement>(null);
  const offerDescRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>("");

  const[hidden,setHidden]=useState(true);

  function changeHidden(): void {
    setHidden((prev: boolean) => !prev);
  }

  function getImgUrl(url: string): void {
    
    setImgUrl(url);
  }

  async function addOffer(){
    const offerName = offerNameRef?.current?.value;
    const offerDesc = offerDescRef?.current?.value;
    const img = imgUrl;

    if( !isInputValid(offerName, offerDesc, img)){
      toast({
        title: "Please fill all the inputs!",
        status:"warning",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });
    }

    const form: OfferValues = {
      name:offerName,
      description:offerDesc,
      img_url:imgUrl
    }

    try{
      
      const res = await createOffer(form);

      if(res?.status === 201){            
        if(offerNameRef.current && offerDescRef.current){
          offerNameRef.current.value = '';
          offerDescRef.current.value = ''
        }

        setTimeout(() =>{
          changeHidden()
        }, 500);

        toast({
          title: "Offer created successfully!",
          status:"success",
          duration:2000,
          position:"top-right",
          variant:"subtle"
        });

      }
    }catch(error){
      toast({
        title: "Something get wrong",
        status:"success",
        duration:2000,
        position:"top-right",
        variant:"subtle"
      });
      
    }
  }

  
  function isInputValid(
    offerName: string | undefined,
    offerDesc: string | undefined,
    img: string | undefined
  ): boolean {
    return !!offerName && !!offerDesc && !!img;
  }
  

  const handleAddOffer = () =>(
    setHidden(false)
  )
  const router=useRouter()

  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';
  return (
    <Box className=' bg-darkBlue10 h-screen  z-5'>
      <Box as='header'>
        <Head>
          <title>{translate("Offer",locale)}</title>
          <MetaSeo title="Offer" desc="Offer Page" />
          <link rel="icon" href="/adminn.ico" />
        </Head>
        <Header />
        <AdminModal1
        onClickClose={changeHidden}
        mod="4"
        p="Add Offer"
        p1="Upload  image"
        p2="Add your Offer information"
        btn='Create Offer'
        hidden={hidden}
        ButtonOnClick={addOffer}
        offerNameRef={offerNameRef}
        offerDescRef={offerDescRef}
        imgRef={imgRef}
        getImgUrl={getImgUrl}
        />
      </Box>
      <Box as='main' className='flex'>
        <PushModul />
        <Box as='section' className='w-full'>
          <Box
            bg='#27283C'
            className='flex items-center mb-12 w-5/5 px-8 mt-20 mr-8'
            borderRadius={16}
            height={73}
          >
            
            <Text color='white'>{translate("Offers",locale)}</Text>
            <InputGroup className='flex justify-end items-center gap-7'>
              <Box>
                <Button
                  borderRadius={14}
                  colorScheme='pink'
                  onClick={handleAddOffer}
                >
                  {translate("+ ADD OFFER",locale)}
              
                </Button>
              </Box>
            </InputGroup>
          </Box>
          <Box height={"464px"} overflow={"auto"} className='mr-8'>
              <OfferTable
              />

          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;
