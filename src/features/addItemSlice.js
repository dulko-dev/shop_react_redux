import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addItem: [],
  counter: 0,
};

const addItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        addItem:
          state.addItem.findIndex((game) => game.id === action.payload.id) >= 0
            ? state.addItem
            : [...state.addItem, action.payload],
      };
    },
    counter: (state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    },
  },
});

export const { addItem, counter } = addItemSlice.actions;
export const addItemState = (state) => state.addItem.addItem;
export const counterState = (state) => state.addItem.counter;
export default addItemSlice.reducer;
