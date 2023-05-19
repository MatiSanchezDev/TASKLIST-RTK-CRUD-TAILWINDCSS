import { useDispatch, useSelector } from "react-redux";
import {
  addTasks,
  deleteTasks,
  editTasks,
} from "../Store/Slices/tasks/taskSlice";
import { v4 as uuid } from "uuid";

export const useTasks = () => {
  const dispatch = useDispatch();
  const { task, isActive } = useSelector((state) => state.tasks);

  const addTask = (action) => {
    dispatch(
      addTasks({
        uid: uuid(),
        ...action,
        completed: false,
      })
    );
  };

  const handleEdit = (action) => {
    dispatch(editTasks(action));
  };

  const handleDelete = (id) => {
    dispatch(deleteTasks(id));
  };

  return {
    task,
    isActive,
    addTask,
    handleEdit,
    handleDelete,
  };
};
