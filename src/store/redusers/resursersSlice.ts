import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    money: 0,
    people: 0,
    warPower: 0,
    economicPower: 0,
    supportCivilServants: 0,
  },
  reducers: {
    setMoney: (store, actions) => {
      store.money += actions.payload;
    },
    setNum: (store, actions) => {
      store.people += actions.payload;
    },
    setWarPower: (store, actions) => {
      store.warPower += actions.payload;

      if (store.warPower > 100) {
        store.warPower = 100;
      }
    },
    setEconomicPower: (store, actions) => {
      store.warPower += actions.payload;
    },
    setSupportCivilServants: (store, actions) => {
      store.warPower += actions.payload;

      if (store.warPower > 100) {
        store.warPower = 100;
      }
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const {
  setMoney,
  setNum,
  setWarPower,
  setEconomicPower,
  setSupportCivilServants,
} = settingsSlice.actions;
export default settingsSlice.reducer;
