import { combineReducers } from "redux";
import settingsSlice from "./settingsSlice";
import resursersSlice from "./resursersSlice";
import trendsSlice from "./trendsSlice";
import inputsStateSlice from "./inputsStateSlice";

const rootReducer = combineReducers({
  settings: settingsSlice,
  resurses: resursersSlice,
  trends: trendsSlice,
  inputsState: inputsStateSlice,
});

export default rootReducer;
