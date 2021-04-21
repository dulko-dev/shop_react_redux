import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  amount: 0,
  price: 0,
};

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    add: (state) => {
      state.amount = state.amount + 1;
    },
    addprice: (state, action) => {
      return {
        ...state,
        price: state.price + action.payload,
      };
    },
    
  },
});

export const { add, addprice } = amountSlice.actions;
export const amountState = (state) => state.amount.amount;
export const priceState = (state) => state.amount.price.toFixed(2);
export default amountSlice.reducer;
