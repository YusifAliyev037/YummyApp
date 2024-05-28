import { Products, Restaurant } from '@/shared/AdminComponents/Services/axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryItem {
  name: string | undefined;
  slug: string | undefined;
  img_url: string | undefined;
}

interface CategoryState {
  category: CategoryItem[];
  restaurant: Restaurant[];
  product: Products[];
  isDeleteModalOpen: boolean;
  restaurantToDelete: Restaurant | null;
  hidden: boolean;
  editRestaurantModalHidden: boolean;
}


  

const initialState: CategoryState = {
  category: [],
  restaurant: [],
  product:[],
  isDeleteModalOpen: false,
  restaurantToDelete: null,
  hidden: true,
  editRestaurantModalHidden: true,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fillCategory: (state, action:PayloadAction<CategoryItem[]>) => {
      state.category = [...action.payload]
  },
    fillRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurant = action.payload;
    },

    fillProducts: (state, action: PayloadAction<Restaurant[]>) => {
      state.product = action.payload;
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
} = globalSlice.actions;

export default globalSlice.reducer;
