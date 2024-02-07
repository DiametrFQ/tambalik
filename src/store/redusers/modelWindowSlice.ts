import { createSlice } from "@reduxjs/toolkit";
import store from "..";

export type TChange = "plus" | "nothing" | "minus";

const modelWindowSlice = createSlice({
  name: "modelWindowSlice",
  initialState: {
    map: false,
    polsit: false,
    econom: false,
    quest: false,
    trend: false,
  },
  reducers: {
    setActiveMap(state, actions) {
      state.map = actions.payload;
    },
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
  setActiveMap,
  setActivePolsit,
  setActiveEconom,
  setActiveQuest,
  setActiveTrend,
} = modelWindowSlice.actions;
export default modelWindowSlice.reducer;
