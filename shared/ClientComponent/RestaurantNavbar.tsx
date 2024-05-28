import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CategoryType } from '../AdminComponents/TableCategory';
import { getCategories } from '../AdminComponents/Services/axios';

function RestaurantNavbar() {
    const { asPath } = useRouter();
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const isActive = (path: string) => (asPath === path ? '#FFB5A5' : 'none');
  
    const fetchCategories = async () => {
        try {
            const res = await getCategories();
            const categoryArr = res?.data.result.data;
            setCategories(categoryArr);
        } catch (err) {
            console.error(err);
        }
    };
    
    useEffect(() => {
        fetchCategories();
    }, []);
    
    return (
        <Box
            as='section'
            bg='whiteAlpha.40'
            borderRadius='xl'
            p={5}
            m={7}
            mt={4}
            width='250px'
            height='650px'
        >
            <Box as='ul' mt={8} display='flex' flexDirection='column'>
                {categories?.map((item, index) => (
                    <Button
                        key={index}
                        className='flex gap-4 w-52 text-black300 cursor-pointer hover:bg-redUserModul10 hover:w-52'
                        color='text-redUserModul'
                        style={{
                            justifyContent: 'flex-start',
                            backgroundColor: isActive('/user'),
                            marginBottom: '26px',
                        }}
                        as='li'
                    >
                        <Image width={18} alt='profile' height={18} src='/rest.svg' />
                        {item.name}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}

export default RestaurantNavbar;
