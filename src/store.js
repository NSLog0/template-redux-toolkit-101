import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './libs/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
