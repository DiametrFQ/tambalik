import { createSlice } from "@reduxjs/toolkit";
import store from "..";

export type TChange = "plus" | "nothing" | "minus";

const modelWindowSlice = createSlice({
  name: "modelWindowSlice",
  initialState: {
    polsit: false,
    econom: false,
    quest: false,
    trend: false,
  },
  reducers: {
    setActivePolsit(state, actions) {
      state.polsit = actions.payload;
    },
    setActiveEconom(state, actions) {
      state.econom = actions.payload;
    },
    setActiveQuest(state, actions) {
      state.quest = actions.payload;
    },
    setActiveTrend(state, actions) {
      state.trend = actions.payload;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const {
  setActivePolsit,
  setActiveEconom,
  setActiveQuest,
  setActiveTrend,
} = modelWindowSlice.actions;
export default modelWindowSlice.reducer;
