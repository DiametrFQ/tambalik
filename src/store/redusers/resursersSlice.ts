import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import { setActiveEconom } from "./modelWindowSlice";

const resursersSlice = createSlice({
  name: "resursersSlice",
  initialState: {
    money: 100,
    people: 1000,
    warPower: 0,
    economicPower: 2,
  },
  reducers: {
    setMoney: (state, actions) => {
      state.money += actions.payload;
      setActiveEconom(true);
    },
    setPeople: (state, actions) => {
      state.people += actions.payload;
      setActiveEconom(true);
    },
    setWarPower: (state, actions) => {
      state.warPower += actions.payload;

      if (state.warPower > 100) {
        state.warPower = 100;
      } else if (state.warPower < 0) {
        state.warPower = 0;
      } else {
        setActiveEconom(true);
      }
    },
    setEconomicPower: (state, actions) => {
      state.economicPower += actions.payload;
      setActiveEconom(true);
    },
    setSupportCivilServants: (state, actions) => {
      state.warPower += actions.payload;

      if (state.warPower > 100) {
        state.warPower = 100;
      } else if (state.warPower < 0) {
        state.warPower = 0;
      } else {
        setActiveEconom(true);
      }
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const {
  setMoney,
  setPeople,
  setWarPower,
  setEconomicPower,
  setSupportCivilServants,
} = resursersSlice.actions;
export default resursersSlice.reducer;
