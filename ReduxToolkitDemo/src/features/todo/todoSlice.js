import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add the task to do the todos array
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // to generate a random id
        task: action.payload,
        isDone: false,
      };

      state.todos.push(newTodo);
    },

    // remove the task from the todos array
    deleteTodo: (state, action) => {
      // action.payload;
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },

    // mark the task as done in the todos array
    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
