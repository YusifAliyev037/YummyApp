import { Restaurant } from '@/shared/AdminComponents/Services/axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryItem {
  name: string | undefined;
  slug: string | undefined;
  img_url: string | undefined;
}

interface CategoryState {
  category: CategoryItem[];
  restaurant: Restaurant[];
  isDeleteModalOpen: boolean;
  restaurantToDelete: Restaurant | null;
  hidden: boolean;
  editRestaurantModalHidden: boolean;
 
}

const initialState: CategoryState = {
  category: [],
  restaurant: [],
  isDeleteModalOpen: false,
  restaurantToDelete: null,
  hidden: true,
  editRestaurantModalHidden: true,
  
};

console.log(initialState);

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fillCategory: (state, action: PayloadAction<CategoryItem[]>) => {
      state.category = [...action.payload];
    },
    setRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurant = [...action.payload];
    },
    addRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant.push(action.payload);
    },
    setIsDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDeleteModalOpen = action.payload;
    },
    setRestaurantToDelete: (
      state,
      action: PayloadAction<Restaurant | null>
    ) => {
      state.restaurantToDelete = action.payload;
    },
    Sethidden: (state, action: PayloadAction<boolean>) => {
      state.hidden = action.payload;
    },
    setEditRestaurantModalHidden: (state, action: PayloadAction<boolean>) => {
      state.editRestaurantModalHidden = action.payload;
    },
    updateRestaurant: (state, action: PayloadAction<Restaurant>) => {
      const index = state.restaurant.findIndex(
        (r) => r.id === action.payload.id
      );
      if (index !== -1) {
        state.restaurant[index] = action.payload;
      }
    },
    removeRestaurant: (state, action: PayloadAction<string>) => {
      state.restaurant = state.restaurant.filter(
        (r) => r.id !== action.payload
      );
    },
  },
});

export const {
  fillCategory,
  setRestaurants,
  addRestaurant,
  updateRestaurant,
  removeRestaurant,
  setIsDeleteModalOpen,
  setRestaurantToDelete,
  Sethidden,

  setEditRestaurantModalHidden,
} = globalSlice.actions;

export default globalSlice.reducer;
