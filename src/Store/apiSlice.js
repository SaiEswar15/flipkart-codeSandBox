import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    apiData: []
  },
  reducers: {
    function2(state, action) {
      return { apiData: action.payload };
    }
  }
});

export const actions = apiSlice.actions;

export default apiSlice;
