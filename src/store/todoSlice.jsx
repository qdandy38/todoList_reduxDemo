import { createSlice } from "@reduxjs/toolkit";

const initState = {
  todoList: []
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {
    addTodo(state, item) {
      state.todoList.push(item);
    },
    delTodo(state, index) {
      state.todoList.splice(index, 1);
    }
  }
})

// reducer
export default todoSlice.reducer;

// action creators
export const { addTodo, delTodo } = todoSlice.actions;