import { createSlice } from "@reduxjs/toolkit";


export const tasksSlice = createSlice({
  name: "task",
  initialState: {
    activeTask: null,
    task: [],
  },
  reducers: {
    addTasks: (state, { payload }) => {
      state.task.push(payload);
    },
    editTasks: (state, { payload }) => {
      const { uid, title, description } = payload;
      const foundTask = state.task.find((task) => task.uid === uid);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTasks: (state, { payload }) => {
      const taskFound = state.task.find((tasks) => tasks.uid === payload);
      if (taskFound) {
        state.task.splice(state.task.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTasks, deleteTasks, editTasks } = tasksSlice.actions;
