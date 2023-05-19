import { Navigate, Route, Routes } from "react-router-dom";
import { TaskForm, TaskList } from "../Components";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create-task" element={<TaskForm />} />
        <Route path="/edit-task/:uid" element={<TaskForm />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
