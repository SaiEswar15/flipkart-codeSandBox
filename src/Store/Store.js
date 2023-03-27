import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    api: apiSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';

// import { cartSlice } from './cartSlice';

// export const store = configureStore({

// reducer: {

// cart: cartSlice.reducer,

// },

// });
