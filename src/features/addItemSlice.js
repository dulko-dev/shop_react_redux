import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addItem: [],
};

const addItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {
        addItem: [...state.addItem, action.payload],
      };
    },
    removeItem: (state, action) => {
      return state.addItem.filter(({ id }) => id !== action.data);
    },
  },
});

export const { addItem, removeItem } = addItemSlice.actions;
export const addItemState = (state) => state.addItem.addItem;
export default addItemSlice.reducer;
