import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import store from '..';
import events from '../../Data/events';

const settingsSlice = createSlice({
  name: 'settingsSlice',
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
        store.Num += (store.Count === 0 ? 0 : Math.floor(Math.random() * events.length));
    },
    changeCheck: (store) => {
      store.Check = !store.Check;
  },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const {plusCount, changeNum, changeCheck} = settingsSlice.actions;
export default settingsSlice.reducer;