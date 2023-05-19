import { useTasks } from "../Hooks/useTasks";

export const TaskList = () => {
  const { task, handleEdit, handleDelete } = useTasks();
  return (
    <div>
      {task.map((tarea) => (
        <div key={tarea.uid}>
          <h3>{tarea.title}</h3>
          <p>{tarea.description}</p>
          <button onClick={() => handleEdit(tarea.uid)}>Edit</button>
          <button onClick={() => handleDelete(tarea.uid)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};
