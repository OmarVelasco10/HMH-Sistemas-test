import { Route, Routes } from "react-router-dom";
import { Panel } from "../pages/";
import { Navigate } from "react-router-dom";
import { GitPage, TimerPage, Todo } from "../pages";

export const TasksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Panel />} />
      <Route path="todo" element={<Todo />} />
      <Route path="timer" element={<TimerPage />} />
      <Route path="git-profile" element={<GitPage />} />


      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};





