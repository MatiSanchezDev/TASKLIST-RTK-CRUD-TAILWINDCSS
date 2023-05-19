import { useState } from "react";
import { useTasks } from "../Hooks/useTasks";

export const TaskForm = () => {
  const { addTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const onInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={onInputChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={onInputChange}
      ></textarea>
      <button>Save</button>
    </form>
  );
};
