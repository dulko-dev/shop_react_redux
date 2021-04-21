import { createSlice } from "@reduxjs/toolkit";

import gear from "../assets/before_premier/gear.jpg";
import judgement from "../assets/before_premier/judgement.jpg";
import oddworld from "../assets/before_premier/oddworld.jpg";
import terminator from "../assets/before_premier/terminator.jpg";

import cris from "../assets/before_premier/cris-tales.jpg";
import dark from "../assets/before_premier/dark.jpg";
import far from "../assets/before_premier/far-cry.jpg";
import strange from "../assets/before_premier/life-strange.jpg";

import football from "../assets/before_premier/football.png";
import rome from "../assets/before_premier/rome.jpg";
import surviving from "../assets/before_premier/surviving.jpg";
import biomutant from "../assets/before_premier/biomutant.jpg";

const initialState = {
  playstation: [
    {
      id: 100,
      img: gear,
      txt: "Guilty Gear Strive",
      price: 219,
      amount: 1,
      row: "2/3",
    },
    {
      id: 101,
      img: judgement,
      txt: "Judgment",
      price: 159.9,
      amount: 1,
      row: "3/4",
    },
    {
      id: 102,
      img: oddworld,
      txt: "Oddworld Soulstorm Day One Edition",
      price: 179,
      amount: 1,
      row: "4/5",
    },
    {
      id: 103,
      img: terminator,
      txt: "Terminator Resistance Enhanced",
      price: 199.9,
      amount: 1,
      row: "5/6",
    },
  ],
  xbox: [
    {
      id: 104,
      img: cris,
      txt: "Cris Tales",
      price: 159,
      amount: 1,
      row: "2/3",
    },
    {
      id: 105,
      img: dark,
      txt: "Dungeons & Dragons Dark Alliance Steelbook Edition",
      price: 229.9,
      amount: 1,
      row: "3/4",
    },
    {
      id: 106,
      img: far,
      txt: "Far Cry 6 Gold Edition",
      price: 349,
      amount: 1,
      row: "4/5",
    },
    {
      id: 107,
      img: strange,
      txt: "Life Is Strange True Colors",
      price: 199.9,
      amount: 1,
      row: "5/6",
    },
  ],
  windows: [
    {
      id: 108,
      img: football,
      txt: "We Are Football",
      price: 139,
      amount: 1,
      row: "2/3",
    },
    {
      id: 109,
      img: rome,
      txt: "Imperator Rome Premium Edition",
      price: 169.9,
      amount: 1,
      row: "3/4",
    },
    {
      id: 110,
      img: surviving,
      txt: "TSurviving the Aftermath",
      price: 119.9,
      amount: 1,
      row: "4/5",
    },
    {
      id: 111,
      img: biomutant,
      txt: "Biomutant",
      price: 229.9,
      amount: 1,
      row: "5/6",
    },
  ],
};

const premierSlice = createSlice({
  name: "premier",
  initialState,
  reducers: {
    removePlay: (state, action) => {
      return state.playstation.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, amount: el.amount - 1 };
        }
        return el;
      });
    },
    removeXbox: (state, action) => {
      return state.xbox.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, amount: el.amount - 1 };
        }
        return el;
      });
    },
    removeWindows: (state, action) => {
      return state.windows.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, amount: el.amount - 1 };
        }
        return el;
      });
    },
  },
});

export const {removePlay, removeXbox, removeWindows} = premierSlice.actions;
export const playstationState = (state) => state.premier.playstation;
export const xboxState = (state) => state.premier.xbox;
export const windowsState = (state) => state.premier.windows;
export default premierSlice.reducer;
