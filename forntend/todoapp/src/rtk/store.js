import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./slice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
