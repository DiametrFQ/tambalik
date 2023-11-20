import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import events from "../../Data/events";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    random: 0,
    level: 1,
  },
  reducers: {
    setRandom(state) {
      state.random = Math.round(Math.random() * (events.length - 1));
    },
    levelIncrement(state) {
      state.level++;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setRandom, levelIncrement } = settingsSlice.actions;
export default settingsSlice.reducer;
