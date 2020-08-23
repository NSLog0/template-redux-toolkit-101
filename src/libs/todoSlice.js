import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.todo.push(action.payload)
    },
    setComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const {
  addItem,
  setComplete,
} = todoSlice.actions

export const getTodos = (state) => state.todos.items

export default todoSlice.reducer;
