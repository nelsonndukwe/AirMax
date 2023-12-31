import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const AirmaxSlice = createSlice({
  name: "airmax",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (slection) => slection._id === action.payload._id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetItems: (state, action) => {
      state.productData = [];
    },

    incrementQuanitity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item) {
        item.quantity++;
      }
    },

    decreaseQuanitity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );

      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state, action) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  incrementQuanitity,
  decreaseQuanitity,
  resetItems,
  addUser,
  removeUser,
} = AirmaxSlice.actions;

export default AirmaxSlice.reducer;
