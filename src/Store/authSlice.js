import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name : "authentication",
  initialState : {
    iserror : false,
    login : false
  },
  reducers :
  {
    function1(state,action)
    {
      return {iserror : true}
    },
    function2(state,action)
    {
      return {login : true}
    }
  }
})

export const actions = authSlice.actions;

export default authSlice;

