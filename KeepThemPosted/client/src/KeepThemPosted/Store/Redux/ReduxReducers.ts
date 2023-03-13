//Crucial Imports
import { AnyAction } from "@reduxjs/toolkit";

//LinkedinToken Reducer for storing/deleting token
export const linkedinTokenReducer = (state = "", action: AnyAction) => {
  switch (action.type) {
    case "storeLinkedinTokenAction":
      return action.payload;
    case "deleteLinkedinTokenAction":
      return "";
    default:
      return state;
  }
};

//MetaToken Reducer for storing/deleting token
export const MetaTokenReducer = (state = "", action: AnyAction) => {
  switch (action.type) {
    case "storeMetaTokenAction":
      return action.payload;
    case "deleteMetaTokenAction":
      return "";
    default:
      return state;
  }
};
