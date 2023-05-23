import { Navigate, Route, Routes } from "react-router-dom";
import { TaskForm, TaskList } from "../Components";

export const AppRouter = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:uid" element={<TaskForm />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
