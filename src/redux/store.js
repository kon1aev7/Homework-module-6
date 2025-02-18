import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/CounterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
