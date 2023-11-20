import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import events from "../../Data/events";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    random: 0,
    level: 1,
    canSolutionBeOpen: true,
    canMenuBeOpen: true,
  },
  reducers: {
    setRandom(state) {
      state.random = Math.round(Math.random() * (events.length - 1));
    },
    levelIncrement(state) {
      state.level++;
    },
    setSolutionBeOpen(state) {
      state.canSolutionBeOpen = !state.canSolutionBeOpen;
    },
    setMenuBeOpen(state) {
      state.canMenuBeOpen = !state.canMenuBeOpen;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setRandom, levelIncrement, setSolutionBeOpen, setMenuBeOpen } =
  settingsSlice.actions;
export default settingsSlice.reducer;
