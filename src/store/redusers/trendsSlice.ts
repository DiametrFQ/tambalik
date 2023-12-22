import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import { partysNames } from "../../Services/types/TParty";
import { setActiveTrend } from "./modelWindowSlice";

const trendsSlice = createSlice({
  name: "trendsSlice",
  initialState: {
    politicalParty: "monarchist" as partysNames | "none",
    title: "Монархизм" as string | "none",
    radicalism: 0,
    Num: 0,
  },
  reducers: {
    setPoliticalParty: (state, actions) => {
      state.politicalParty = actions.payload;
    },
    setPoliticalTitle: (state, actions) => {
      state.title = actions.payload;
    },
    setRadicalism: (state, actions) => {
      state.radicalism += actions.payload;

      if (state.radicalism > 100) {
        state.radicalism = 100;
      } else if (state.radicalism < 0) {
        state.radicalism = 0;
      } else {
        setActiveTrend(true);
      }
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setPoliticalParty, setPoliticalTitle, setRadicalism } = trendsSlice.actions;
export default trendsSlice.reducer;
