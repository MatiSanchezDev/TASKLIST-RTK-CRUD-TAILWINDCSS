import { useTasks } from "../Hooks/useTasks";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const { task, handleDelete } = useTasks();
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center p-4">
        <h1>Task Pending: {task.length}</h1>
        <Link
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          to="/create-task"
        >
          Add Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {task.map((tarea) => (
          <div key={tarea.uid} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{tarea.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  to={`/edit-task/${tarea.uid}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md "
                  onClick={() => handleDelete(tarea.uid)}
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{tarea.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
