// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { [productId]: { product, quantity } }
  totalItems: 0,
  totalPrice: 0,
};

const recalc = (items) => {
  let totalItems = 0;
  let totalPrice = 0;
  Object.values(items).forEach(({ product, quantity }) => {
    totalItems += quantity;
    totalPrice += product.price * quantity;
  });
  return { totalItems, totalPrice };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const id = product.id;
      if (!state.items[id]) {
        state.items[id] = { product, quantity: 0 };
      }
      state.items[id].quantity += 1;
      const totals = recalc(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    increment(state, action) {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity += 1;
      const totals = recalc(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    decrement(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
      const totals = recalc(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    removeItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
      }
      const totals = recalc(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
    clearCart(state) {
      state.items = {};
      state.totalItems = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addItem, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
