import { useTasks } from "../Hooks/useTasks";
import { Link } from "react-router-dom";

export const TaskList = () => {
  const { task, handleDelete } = useTasks();
  return (
    <div>
      <header>
        <h1>Task Pending: {task.length}</h1>
        <Link to="/create-task">Add Task</Link>
      </header>

      {task.map((tarea) => (
        <div key={tarea.uid}>
          <h3>{tarea.title}</h3>
          <p>{tarea.description}</p>
          <Link to={`/edit-task/${tarea.uid}`}>Edit</Link>
          <button onClick={() => handleDelete(tarea.uid)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};
