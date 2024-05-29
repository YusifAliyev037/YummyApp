import { FormRegister, FormRegisterGet, Products, Restaurant } from '@/shared/AdminComponents/Services/axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryItem {
  id: string | undefined;
  name: string | undefined;
  slug: string | undefined;
  img_url: string | undefined;
}

interface CategoryState {
  category: CategoryItem[];
  restaurant: Restaurant[];
  product: Products[];
  login:FormRegisterGet;
  isDeleteModalOpen: boolean;
  restaurantToDelete: Restaurant | null;
  hidden: boolean;
  editRestaurantModalHidden: boolean;
}


  

const initialState: CategoryState = {
  category: [],
  restaurant: [],
  product:[],
  login:{},
  isDeleteModalOpen: false,
  restaurantToDelete: null,
  hidden: true,
  editRestaurantModalHidden: true,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fillCategory: (state, action: PayloadAction<CategoryItem[]>) => {
      const newData = action.payload.filter(item => !state.category.some(existingItem => existingItem.id === item.id));
      state.category = [...state.category, ...newData];
    },
    

  
    fillRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurant = action.payload;
    },

    fillProducts:(state, action: PayloadAction<Restaurant[]>) => {
      const newData = action.payload.filter(item => !state.product.some(existingItem => existingItem.id === item.id));
      state.product = [...state.category, ...newData];
    },

    
    addlogin: (state, action: PayloadAction<FormRegisterGet>) => {
      state.login = action.payload;
    },
  
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant.push(action.payload);
    },
    setIsDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDeleteModalOpen = action.payload;
    },
    setRestaurantToDelete: (state, action: PayloadAction<Restaurant | null>) => {
      state.restaurantToDelete = action.payload;
    },
    setHidden: (state, action: PayloadAction<boolean>) => {
      state.hidden = action.payload;
    },
    setEditRestaurantModalHidden: (state, action: PayloadAction<boolean>) => {
      state.editRestaurantModalHidden = action.payload;
    },
    updateRestaurant: (state, action: PayloadAction<Restaurant>) => {
      const index = state.restaurant.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.restaurant[index] = action.payload;
      }
    },
    removeRestaurant: (state, action: PayloadAction<string>) => {
      state.restaurant = state.restaurant.filter((r) => r.id !== action.payload);
    },
  },
});

export const {
  fillCategory,
  fillRestaurants,
  fillProducts,
  addRestaurant,
  updateRestaurant,
  removeRestaurant,
  setIsDeleteModalOpen,
  setRestaurantToDelete,
  setHidden,
  setEditRestaurantModalHidden,
  addlogin
} = globalSlice.actions;

export default globalSlice.reducer;
