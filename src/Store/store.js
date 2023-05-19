import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./Slices/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
