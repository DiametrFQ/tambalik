import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    random: 0,
    level: 1,
    canSolutionBeOpen: true,
    canMenuBeOpen: true,
    menuIsOpen: true,
  },
  reducers: {
    setMenuIsOpen(state, actions) {
      state.menuIsOpen = actions.payload;
    },
    setRandom(state, actions) {
      // console.log(actions.payload);
      state.random = Math.round(Math.random() * (actions.payload - 1));
    },
    levelIncrement(state) {
      ++state.level;
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
export const {
  setMenuIsOpen,
  levelIncrement,
  setRandom,
  setSolutionBeOpen,
  setMenuBeOpen,
} = settingsSlice.actions;
export default settingsSlice.reducer;
