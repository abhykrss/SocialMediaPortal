//Crucial Imports.
import { combineReducers } from "@reduxjs/toolkit";
import { linkedinTokenReducer, MetaTokenReducer } from "./ReduxReducers";

//Combining all reducers for the ease of access in store.
export const reducers = combineReducers({
  linkedinLoginData: linkedinTokenReducer,
  MetaLoginData: MetaTokenReducer,
});
