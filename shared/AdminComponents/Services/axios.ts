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
  slug?: string | undefined;
  img_url: string | undefined;
};

export type FormRegister = {
  
  email?: string | undefined;
  password?: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
  img_url?: string | undefined;
  phone?: string | undefined;
  access_token?:string | undefined;
};

export type FormRegisterGet = {
  email?: string | undefined;
  fullname?: string | undefined;
  username?: string | undefined;
  id?:string | undefined;
  refresh_token?:string | undefined;
  access_token?:string | undefined;
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

// updateProfile



export const updateProfile = async (form: FormRegister, token: string) => {
  try {
    const response = await instanceAxios.put("/auth/user", form, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    alert('Check your information');

  }
}


// getProfileData
export const getProfileData = async()=>{
  try {
    const response=await instanceAxios.get("/auth/user")
    return response;
  } catch (error) {
    alert ('Check your information')
    console.log(error)
  }
}

export type Category = {
  id?: string;
  name?: string;
  img_url?: string;
  slug?: string;
  created?: number;
};

export async function getCategories() {
  try {
    const response = await instanceAxios.get('/category');
    return response;
  } catch (error) {
    console.error(error);
  }
}

//!catergoryDelete

export async function delCategories(id: string) {
  try {
    const response = await instanceAxios.delete(`/category/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//*editCategory

export async function getEditCategies(id: string) {
  try {
    const response = await instanceAxios.get(`/category/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//* categoryUpdate
export async function updateCategories(id: string, form: Form) {
  try {
    const response = await instanceAxios.put(`/category/${id}`, form);
    return response;
  } catch (error) {
    console.error('Error updating category:', error);
  }
}

//* categoryPost

export async function postCategory(form: Form) {
  try {
    const response = await instanceAxios.post('/category', form);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//! Restaurant

export type Restaurant = {
  name: string | any;
  category_id: string | number | undefined;
  img_url: string | undefined;
  cuisine: string | undefined;
  address: string | undefined;
  delivery_min: string | number | undefined;
  delivery_price: number | any;
  id?: string | any;
};

export async function getRestaurants() {
  try {
    const response = await instanceAxios.get('/restuarants');
    return response;
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
    console.error(
      `Error while deleting restaurant with ID ${restaurantId}:`,
      error
    );
    throw new Error('Failed to delete restaurant!');
  }
}

export async function AddRestaurant(form: Form) {
  try {
    const response = await instanceAxios.post(`/restuarants`, form);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//* editRestaurant

export async function getEditRestaurant(id: string) {
  try {
    const response = await instanceAxios.get(`/restuarants/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//* updateRestaurants

export async function updateRestaurant(id: string, form: Form) {
  try {
    const response = await instanceAxios.put(`/restuarants/${id}`, form);
    return response;
  } catch (error) {
    console.log(error);
  }
}




export type Products = {
  id?: string;
  img_url?: string;
  price?: number;
  name?: string;
  description?: string;
  rest_id?: string;
};
export async function getProducts() {
  try {
    const response = await instanceAxios.get('/products');
    return response;
  } catch (error) {
    console.error('Error while fetching restaurants:', error);
    throw new Error('Failed to fetch products!');
  }
}

export async function deleteProducts(id: string) {
  try {
    const response = await instanceAxios.delete(`/products/${id}`);
    return response;
  } catch (error) {
    console.error(`Error while deleting product with ID ${id}:`, error);
    throw new Error('Failed to delete product!');
  }
}

export const postRegisterData = async (form: FormRegister) => {
  try {
    const response = await instanceAxios.post('/auth/signup', form);

    return response;
  } catch (error) {
    return false;
  }
};

//* createProduct

export async function addProducts(form: Products) {
  try {
    const response = await instanceAxios.post(`/products`, form);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//* editproduct

export async function updateProduct(id: string, form: Products) {
  try {
    const response = await instanceAxios.put(`/products/${id}`, form);
    return response;
  } catch (error) {
    console.log(error);
  }
}


//* userBasket

// get 
export async function getBasket() {
  try {
    const response = await instanceAxios.get('/basket');
    return response.data;
  } catch (error) {
    console.error('Error while fetching basket:', error);
    throw new Error('Failed to fetch basket!');
  }
}


// post 


export type BasketItemProps = {
  imageSrc: string;
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  // onRemove: () => void;
}


export async function addBasket(form: BasketItemProps) {
  try {
    const response = await instanceAxios.post(`/basket/add`, form);
    return response.data;
  } catch (error) {
    console.log(error);
    // console.error('Error while adding to basket:', error);
    // throw new Error('Failed to add to basket!');
  }
}



// delete 

export async function deleteBasket(itemId: string) {
  try {
    // const response = await instanceAxios.delete(`/basket/delete/${itemId}`);
    const response = await instanceAxios.delete(`/basket/delete`);
    return response.data;
  } catch (error) {
    console.error(
      `Error while deleting basket item:`,
      error
    );
    throw new Error('Failed to delete basket item!');
  }
}

// clear

export async function clearBasket() {
  try {
    const response = await instanceAxios.delete(`/basket/clear`);
    return response.data;
  } catch (error) {
    console.error(
      `Error while clearing basket :`,
      error
    );
    throw new Error('Failed to clear basket!');
  }
}

// !offer

export type OfferValues = {
  titleOffer?: string | undefined;
  descOffer?: string | undefined;

  id?:string | undefined
  name?: string | undefined;
  description?: string | undefined;

  img_url?: string | undefined;
};

export async function getOffer(){
  try{
    const response = await instanceAxios.get("/offer");
    return response
  }catch(error){
    console.log(error);
    
  }
}

export async function createOffer (OfferValues:OfferValues){
  try{
    const response =  instanceAxios.post("/offer", OfferValues);
    return response
  }catch(error){
    console.log(error);
    
  }
}

export async function getEditOffer (id:string){
  try{
    const response = instanceAxios.get(`/offer/${id}`);
    return response
  }catch(error){
    console.log(error);
    
  }
}


export async function updateOffer (id:any, OfferValues:OfferValues){
  try{
    const response = instanceAxios.put(`/offer/${id}`, OfferValues);
    return response
  }catch(error){
    console.log(error);
    
  }
}


export async function delOffer(id:string){
  try{
    const response = instanceAxios.delete(`/offer/${id}`);
    return response
  }catch(error){
    console.log(error);
    
  }
}

