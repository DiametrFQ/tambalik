import {combineReducers} from 'redux';
import settingsSlice from './settingsSlice';

const rootReducer = combineReducers({
    settings: settingsSlice,
  // Add more reducers here if needed
});

export default rootReducer;