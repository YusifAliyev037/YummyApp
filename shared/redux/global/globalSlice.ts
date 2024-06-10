import { FormRegister, FormRegisterGet, OfferValues, Products, Restaurant } from '@/shared/AdminComponents/Services/axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CategoryItem {
  name?: string;
  slug?: string;
  img_url?: string;
}

export interface UserOrder {
  id?: string;
  amount?: number;
  delivery_address?: string;
  created?: number;
  contact?: string;
  payment_method?: string;
  products?: [];
}

interface BasketItem {
  id: string | number;
  name: string;
  amount: number;
  count: number;
  img_url: string;
  price: string;
}

interface Basket {
  total_item: number;
  items: BasketItem[];
  id: string | number;
  total_amount: number;
}

interface CategoryState {
  category: CategoryItem[];
  restaurant: Restaurant[];
  product: Products[];
  offer: OfferValues[];
  login: FormRegisterGet;
  chatLogin: FormRegisterGet;
  isDeleteModalOpen: boolean;
  restaurantToDelete: Restaurant | null;
  hidden: boolean;
  editRestaurantModalHidden: boolean;
  basket: Basket;
  userOrder: UserOrder[];
}

const initialBasket: Basket = {
  total_item: 0,
  items: [],
  id: '',
  total_amount: 0,
};

const initialState: CategoryState = {
  category: [],
  restaurant: [],
  product: [],
  offer: [],
  login: {} as FormRegisterGet,
  chatLogin: {} as FormRegisterGet,
  userOrder: [],
  isDeleteModalOpen: false,
  restaurantToDelete: null,
  hidden: true,
  editRestaurantModalHidden: true,
  basket: initialBasket,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    fillCategory: (state, action: PayloadAction<CategoryItem[]>) => {
      state.category = action.payload;
    },
    filluserOrder: (state, action: PayloadAction<UserOrder[]>) => {
      state.userOrder = action.payload;
    },
    fillRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurant = action.payload;
    },
    fillProducts: (state, action: PayloadAction<Products[]>) => {
      state.product = action.payload;
    },
    fillOffer: (state, action: PayloadAction<OfferValues[]>) => {
      state.offer = action.payload;
    },
    addlogin: (state, action: PayloadAction<FormRegisterGet>) => {
      state.login = action.payload;
    },
    fillLogin: (state, action: PayloadAction<FormRegisterGet>) => {
      state.chatLogin = action.payload;
    },
    updateLogin: (state, action: PayloadAction<FormRegisterGet>) => {
      state.login = {
        ...state.login,
        ...action.payload,
      };
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
    fillBasket: (state, action: PayloadAction<Basket>) => {
      state.basket = action.payload;
    },
    clearBasket: (state) => {
      state.basket = initialBasket;
    },
    addItemToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.basket.items.push(action.payload);
      state.basket.total_item += 1;
      state.basket.total_amount += action.payload.amount;
    },
    removeItemFromBasket: (state, action: PayloadAction<string | number>) => {
      const itemIndex = state.basket.items.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.basket.total_amount -= state.basket.items[itemIndex].amount;
        state.basket.items.splice(itemIndex, 1);
        state.basket.total_item -= 1;
      }
    },
  },
});

export const {
  fillCategory,
  filluserOrder,
  fillRestaurants,
  fillProducts,
  fillOffer,
  addRestaurant,
  updateRestaurant,
  removeRestaurant,
  setIsDeleteModalOpen,
  setRestaurantToDelete,
  setHidden,
  setEditRestaurantModalHidden,
  addlogin,
  updateLogin,
  fillLogin,
  fillBasket,
  clearBasket,
  addItemToBasket,
  removeItemFromBasket,
} = globalSlice.actions;

export default globalSlice.reducer;
