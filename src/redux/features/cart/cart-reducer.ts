import { Product } from '@/data/products';
import { createSlice } from '@reduxjs/toolkit';

interface CardState {
  cart: Product[];
}

const initialState: CardState = {
  cart: [],
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id,
      );
      state.cart = cartFiltered;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

