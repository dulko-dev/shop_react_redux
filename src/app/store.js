import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "../features/amountSlice";
import addItemReducer from "../features/addItemSlice";
import caruselaReducer from "../features/caruselaSlice";
import premierReducer from "../features/premierSlice";
export const store = configureStore({
  reducer: {
    amount: amountReducer,
    addItem: addItemReducer,
    carusela: caruselaReducer,
    premier: premierReducer,
  },
});
