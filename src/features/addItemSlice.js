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
        ...state,
        addItem: [...state.addItem, action.payload],
      };
    },
  },
});

export const { addItem } = addItemSlice.actions;
export const addItemState = (state) => state.addItem.addItem;
export default addItemSlice.reducer;
