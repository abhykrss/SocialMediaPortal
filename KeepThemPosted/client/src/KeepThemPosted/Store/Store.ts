//Crucial Imports
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./Redux/CombineReducers";

//Configuring store and reducers
export const Store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;
