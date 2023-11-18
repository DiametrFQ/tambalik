import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const trendsSlice = createSlice({
  name: "trendsSlice",
  initialState: {
    politicalParty: "none",
    inclinationForWar: 0,
    Num: 0,
  },
  reducers: {
    setPoliticalParty: (store, actions) => {
      store.politicalParty = actions.payload;
    },
    setInclinationForWar: (store, actions) => {
      store.inclinationForWar = actions.payload;

      if (store.inclinationForWar > 100) {
        store.inclinationForWar = 100;
      }
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setPoliticalParty, setInclinationForWar } = trendsSlice.actions;
export default trendsSlice.reducer;
