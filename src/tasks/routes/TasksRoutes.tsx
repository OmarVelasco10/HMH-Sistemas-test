import { Route, Routes, Navigate } from "react-router-dom";
import { Panel } from "../pages/";
import { GitProfile, Timer, TodoPage } from "../pages";

export const TasksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
      <Route path="todo" element={<TodoPage />} />
      <Route path="timer" element={<Timer />} />
      <Route path="git-profile" element={<GitProfile />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
