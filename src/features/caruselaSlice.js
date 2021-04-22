import { createSlice } from "@reduxjs/toolkit";
import firstImage from "../assets/last_add/bond.jpg";
import secondImage from "../assets/last_add/fitness.jpg";
import thirdImage from "../assets/last_add/hunter.jpg";
import fourthImage from "../assets/last_add/mittopia.jpg";
import fivethImage from "../assets/last_add/nightmares2.jpg";
import sixthImage from "../assets/last_add/ratchet.jpg";
import seventhImage from "../assets/last_add/ride4.jpg";
import eighthImage from "../assets/last_add/yakuza.jpg";

const initialState = [
  {
    img: eighthImage,
    txt: "Yakuza Like a Dragon",
    price: 200,
    amount: 8,
  },
  {
    id: 1,
    img: firstImage,
    txt: "007 Quantum of Solace ",
    price: 9.99,
    amount: 1,
  },
  { id: 2, img: secondImage, txt: "Fitness Boxing", price: 35.5, amount: 2 },
  {
    id: 3,
    img: thirdImage,
    txt: "Monster Hunter Rise",
    price: 120,
    amount: 3,
  },
  { id: 4, img: fourthImage, txt: "Miitopia", price: 159.99, amount: 4 },
  {
    id: 5,
    img: fivethImage,
    txt: "Little Nightmares II ",
    price: 200.59,
    amount: 5,
  },
  {
    id: 6,
    img: sixthImage,
    txt: " Ratchet & Clank: Rift Apart",
    price: 210,
    amount: 6,
  },
  { id: 7, img: seventhImage, txt: "Ride 4", price: 40, amount: 7 },
  {
    id: 8,
    img: eighthImage,
    txt: "Yakuza Like a Dragon",
    price: 200,
    amount: 8,
  },
  {
    img: firstImage,
    txt: "007 Quantum of Solace",
    price: 9.99,
    amount: 3,
  },
];

const caruselaSlice = createSlice({
  name: "carusela",
  initialState,
  reducers: {
    removeAmount: (state, action) => {
      return state.map((el) => {
        if (el.id === action.payload.id) {
          if (el.amount === 0) {
            return el;
          } else {
            return { ...el, amount: el.amount - 1 };
          }
        }
        console.log(el.amount);
        return el;
      });
    },
  },
});

export const { removeAmount } = caruselaSlice.actions;
export const caruselaState = (state) => state.carusela;
export default caruselaSlice.reducer;
