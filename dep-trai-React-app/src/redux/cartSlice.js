import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {   // ✅ cần có cái này
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // nếu muốn xóa khi quantity = 0 thì:
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions; // ✅ phải export đúng tên
export default cartSlice.reducer;
