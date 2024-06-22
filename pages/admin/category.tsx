import { AdminModal1 } from '@/shared/AdminComponents/AdminModal1';
import { Form, postCategory } from '@/shared/AdminComponents/Services/axios';
import { Box, Button, InputGroup, Text, useToast } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { translate } from '@/public/lang/translate';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("@/shared/AdminComponents/Header"))
const MetaSeo = dynamic(() => import("@/shared/MetaSeo"))
const PushModul = dynamic(() => import("@/shared/AdminComponents/PushModul"))
const TableCategory = dynamic(() => import("@/shared/AdminComponents/TableCategory"))

function Category() {
 
  const customIds = Array.from({ length: 10 }, (_, i) => i);


  const toast = useToast() 

  const categoryRef = useRef<HTMLInputElement>(null);

  const slugRef = useRef<HTMLInputElement>(null);
  
  const imgRef = useRef<HTMLInputElement>(null);

  const [imgUrl, setImgUrl] = useState<string>("");

  const[hidden,setHidden]=useState(true)

  function changeHidden(): void {
    setHidden((prev: boolean) => !prev);
  }

  function getImgUrl(url: string): void {
    
    setImgUrl(url);
  }

  async function addCategory (){
        const category = categoryRef?.current?.value;
        const slug = slugRef?.current?.value;
        const img = imgUrl;
        
        
        

        if( !isInputValid(category, slug, img)){
                toast({
                  title: "Please fill all the inputs!",
                  status:"warning",
                  duration:2000,
                  position:"top-right",
                  variant:"subtle"
                });
              }
        const form: Form = {
              name:category,
              slug,
              img_url: imgUrl
              };

        try{

          const res = await postCategory(form)

          if(res?.status === 201){            
            if(categoryRef.current && slugRef.current){
              categoryRef.current.value = '';
              slugRef.current.value = ''
            }

            setTimeout(() =>{
              changeHidden()
            }, 500);

            toast({
              title: "Category created successfully!",
              status:"success",
              duration:2000,
              position:"top-right",
              variant:"subtle"
            });

          }
          

        }catch(error){
          toast({
            title: "Category created successfully!",
            status:"success",
            duration:2000,
            position:"top-right",
            variant:"subtle"
          });
        }      
              
  }


  function isInputValid(
    category: string | undefined,
    slug: string | undefined,
    img: string | undefined
  ): boolean {
    return !!category && !!slug && !!img;
  }


  const handleAddCategory = () =>(
    setHidden(false)
  )
const router=useRouter()
  useEffect(() => {
    const locale = localStorage.getItem('lang') || 'en';
    router.push(router.pathname, router.asPath, { locale });
  }, []);
  const locale = router.locale || 'en';

  return (
    <Box className='bg-darkBlue10 h-screen '>
      <Head>
        <title>{translate("Category",locale)}</title>
        <MetaSeo
          title='Category'
          desc='Category Page'
        />
        <link
          rel='icon'
          href="/adminn.ico"
        />
      </Head>
      <Header />
      <AdminModal1
      onClickClose={changeHidden}
      mod="1"
      p="Add Category  "
      p1="Upload  image"
      p2="Add your Category information"
      btn='Create Category'
      hidden={hidden}
      ButtonOnClick={addCategory}
      categoryRef={categoryRef}
      imgRef={imgRef}
      slugRef={slugRef}
      getImgUrl={getImgUrl}
      />
      <Box as='main' className='flex'>
        <PushModul />
        <Box className='w-full mr-8'>
          <Box
            bg='#27283C'
            className='flex items-center mb-12  w-full px-8 mt-20 rounded-lg h-16 xxl:ml-0  xs:ml-4   '
          >
            <Text color='white'>{translate("Category",locale)}</Text>
            <InputGroup className='flex justify-end  items-center gap-7'>
              <Button borderRadius={14} colorScheme='pink' onClick={handleAddCategory}>
                {translate("+ ADD CATEGORY",locale)}
               
              </Button>
            </InputGroup>
          </Box>
          <Box height={'464px'} overflow={'auto'} >
            <TableCategory customIds={customIds}  />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Category;
