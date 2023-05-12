import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todoList: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todoList.push(payload);

    },
    delTodo: (state, { payload }) => {
      state.todoList.splice(payload, 1);
    }
  }
})

// reducer
export default todoSlice.reducer;

// action creators
export const { addTodo, delTodo } = todoSlice.actions;