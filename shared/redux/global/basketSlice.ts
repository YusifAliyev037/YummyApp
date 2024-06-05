// redux/global/globalSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface BasketItem {
  id: string | number;
  name: string;
  amount: number;
  count: number;
  img_url: string;
}

interface Basket {
  total_item: number;
  items: BasketItem[];
  id: string | number;
  total_amount: number;
}

const initialBasket: Basket = {
  total_item: 0,
  items: [],
  id: '',
  total_amount: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    basket: initialBasket,
  },
  reducers: {
    fillBasket(state, action) {
      state.basket = action.payload;
    },
    
  },
});

export const { fillBasket } = globalSlice.actions;
export default globalSlice.reducer;
