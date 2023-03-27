// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     itemsList: []
//   },
//   reducers: {
//     function4(state, action) {
//       let newItem = action.payload;
//       console.log(newItem);

//       return {itemsList : state.itemsList && state.itemsList.push({
//         id : 10,
//         price : 200,
//       })}
//     }
//   }
// });

// export const actions = cartSlice.actions;

// export default cartSlice;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {

// items: [],

// total: 0,

// };

// export const cartSlice = createSlice({

// name: 'cart',

// initialState,

// reducers: {

// addToCart: (state, action) => {

// state.items.push(action.payload);

// state.total += action.payload.price;

// },

// removeFromCart: (state, action) => {

// state.items = state.items.filter(item => item.id !== action.payload.id);

// state.total -= action.payload.price;

// },

// clearCart: state => {

// state.items = [];

// state.total = 0;

// },

// },

// });

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    function4(state, action) {
      state.changed = true;
      const newItem = action.payload;
      // to check if item is already available
      // const existingItem = state.itemsList && state.itemsList.find(
      //   (item) => item.id === newItem.id
      // );
      const existingItem = false;

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        console.log("eswar");
        // state.itemsList && state.itemsList.push({
        //   id: newItem.id,
        //   price: newItem.price,
        //   quantity: 1,
        //   totalPrice: newItem.price,
        //   name: newItem.name,
        // });
        // console.log(state.itemsList);
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
