import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import langRedcer from "./language/languageSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  language: langRedcer,
});

export default rootReducer;
