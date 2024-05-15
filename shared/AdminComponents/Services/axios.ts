import axios from 'axios';

const baseURL = '/api';

const instanceAxios = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export type Form = {
  name: string | undefined;
  slug: string | undefined;
  img_url: string | undefined;
};

export type FormRegister = {
  email: string | undefined;
  password: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
};

//! LOGIN

export const completeLogin = async (form: FormRegister) => {
  try {
    const response = await instanceAxios.post('/auth/signin', form);
    return response;
  } catch (error) {
    alert('Chek your infomation!');

    console.log(error);
  }
};

 //!category
export async function getCategories() {
    try {
      const response = await instanceAxios.get('/category');
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  
  
export type Restaurant = {
  id?: number;
  name?: string;
};

export async function getRestaurants() {
  try {
    const response = await instanceAxios.get('/restaurants');
    return response
  } catch (error) {
    console.error('Error while fetching restaurants:', error);
    throw new Error('Failed to fetch restaurants!');
  }
}
