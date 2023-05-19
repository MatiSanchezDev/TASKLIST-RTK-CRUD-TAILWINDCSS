import { useDispatch, useSelector } from "react-redux";
import { addTasks, deleteTasks } from "../Store/Slices/tasks/taskSlice";

export const useTasks = () => {
  const dispatch = useDispatch();
  const { task, isActive } = useSelector((state) => state.tasks);

  const addTask = (action) => {
    dispatch(
      addTasks({
        uid: new Date().getTime(),
        ...action,
        completed: false,
      })
    );
  };

  const handleEdit = (action) => {
    console.log("Editado");
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
