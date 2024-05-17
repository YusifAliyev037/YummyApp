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

 //?category
export async function getCategories() {
    try {
      const response = await instanceAxios.get('/category');
      return response
    } catch (error) {
      console.error(error);
    }
  }


   //!catergoryDelete

 export async function delCategories(id:string){
  try{
    const response = await instanceAxios.delete(`/category/${id}`);
    return response
  }catch(error){
    console.log(error);
    
  }
}

//* categoryUpdate
  export async function updateCategories(id:string, form:Form){
    try{
      const response = await instanceAxios.post(`/category/${id}`, form)
      return response 
    }catch(error){
      console.log(error);
      
    }
  }


// Restaurant

export type Restaurant = {

  


  id: string;
  name?: string;
  img_url?:string;
  cuisine?:string;
  delivery_price:number

};


export async function getRestaurants() {
  try {
    const response = await instanceAxios.get('/restuarants');
    return response
  } catch (error) {
    console.error('Error while fetching restaurants:', error);
    throw new Error('Failed to fetch restaurants!');
  }
}


export async function deleteRestaurant(restaurantId: string) {
  try {
    const response = await instanceAxios.delete(`/restuarants/${restaurantId}`);
    return response;
  } catch (error) {
    console.error(`Error while deleting restaurant with ID ${restaurantId}:`, error);
    throw new Error('Failed to delete restaurant!');
  }
}




