import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const inputsStateSlice = createSlice({
  name: "inputsStateSlice",
  initialState: {
    tax: 0,
    discipline: 0,
  },
  reducers: {
    setTax(state, actions) {
      state.tax = actions.payload;
    },
    setDiscipline(state, actions) {
      state.discipline = actions.payload;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setTax, setDiscipline } = inputsStateSlice.actions;
export default inputsStateSlice.reducer;
