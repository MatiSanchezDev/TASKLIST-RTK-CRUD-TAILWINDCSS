import { useEffect, useState } from "react";
import { useTasks } from "../Hooks/useTasks";
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {
  const { addTask, task, handleEdit } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  const [tasks, setTasks] = useState({
    title: "",
    description: "",
  });

  const onInputChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (params.uid) {
      handleEdit(tasks);
    } else {
      addTask(tasks);
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.uid) {
      setTasks(task.find((tasks) => tasks.uid === params.uid));
    }
  }, []);

  return (
    <form onSubmit={onSubmit} className="bg-zinc-800 max-w-s p-4 rounded-md">
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={onInputChange}
        value={tasks.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Description:
      </label>
      <textarea
        name="description"
        placeholder="Description"
        onChange={onInputChange}
        value={tasks.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="w-full bg-indigo-600 rounded-md p-1 pt-2 pb-2">
        Save
      </button>
    </form>
  );
};
