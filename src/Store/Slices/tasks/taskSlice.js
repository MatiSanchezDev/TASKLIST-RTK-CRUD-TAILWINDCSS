import { createSlice } from "@reduxjs/toolkit";

const taskList = {
  uid: new Date().getTime(),
  title: "Terminar este curso",
  description: "Entre hoy y mañana",
  completed: false,
};

export const tasksSlice = createSlice({
  name: "task",
  initialState: {
    activeTask: null,
    task: [taskList],
  },
  reducers: {
    addTasks: (state, { payload }) => {
      state.task.push(payload);
    },
    deleteTasks: (state, { payload }) => {
      const taskFound = state.task.find((tasks) => tasks.uid === payload);
      if (taskFound) {
        state.task.splice(state.task.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTasks, deleteTasks } = tasksSlice.actions;
