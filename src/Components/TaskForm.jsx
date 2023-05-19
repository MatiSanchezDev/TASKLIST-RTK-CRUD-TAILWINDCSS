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
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={onInputChange}
        value={tasks.title}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={onInputChange}
        value={tasks.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
};
