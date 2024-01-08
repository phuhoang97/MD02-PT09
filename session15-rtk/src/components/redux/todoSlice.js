import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    count: 10,
    newTask: "",
    tasks: [],
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // Todolist
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },

    addTodo: (state, action) => {
      state.tasks.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((e) => e.id !== action.payload);
    },

    toggleComplete: (state, action) => {
      const todoComplete = state.tasks.find((e) => e.id === action.payload);
      todoComplete.complete = !todoComplete.complete;
    },

    updateTodo: (state, action) => {
      state.tasks = state.tasks.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
  },
});

export const {
  increment,
  decrement,
  addTodo,
  setNewTask,
  deleteTodo,
  toggleComplete,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
