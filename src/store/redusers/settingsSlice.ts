import { createSlice } from "@reduxjs/toolkit";
import store from "..";
import events from "../../Data/events";

const resursesSlice = createSlice({
  name: "resursesSlice",
  initialState: {
    Check: false,
    Count: 0,
    Num: 0,
  },
  reducers: {
    plusCount: (store) => {
      store.Count++;
    },
    changeNum: (store) => {
      store.Num =
        store.Count === 0
          ? 0
          : Math.floor(1 + Math.random() * (events.length - 1));
    },
    changeCheck: (store) => {
      store.Check = !store.Check;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { plusCount, changeNum, changeCheck } = resursesSlice.actions;
export default resursesSlice.reducer;
