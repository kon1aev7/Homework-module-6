import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ id: 1, todo: "Learn redux", isCompleted: false }],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const todoReducer = slice.reducer;
export const { deleteTodo } = slice.actions;
