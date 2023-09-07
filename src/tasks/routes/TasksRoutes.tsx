import { Route, Routes } from "react-router-dom";
import { PanelPage } from "../pages/PanelPage";
import { Navigate } from "react-router-dom";
import { GitPage, TimerPage, TodoPage } from "../pages";

export const TasksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PanelPage />} />
      <Route path="todo" element={<TodoPage />} />
      <Route path="timer" element={<TimerPage />} />
      <Route path="git" element={<GitPage />} />


      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};





