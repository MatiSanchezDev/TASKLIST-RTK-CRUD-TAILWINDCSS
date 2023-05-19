import { TaskForm } from "./Components";
import { TaskList } from "./Components/TaskList";

export const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <hr />
      <TaskForm />
      <TaskList />
    </div>
  );
};
