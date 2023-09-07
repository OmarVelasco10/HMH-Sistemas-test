import { Route, Routes } from "react-router-dom";

import { PublicRoute } from "./PublicRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import { TasksRoutes } from "../tasks/routes/TasksRoutes";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <Routes>
      <Route 
        path="/auth/*"
        element={
            <PublicRoute status={authStatus}>
                <AuthRoutes />
            </PublicRoute>
        }
      />
      <Route 
        path="/*"
        element={
            <PrivateRoute status={authStatus}>
                <TasksRoutes />
            </PrivateRoute>
        }
      />
    </Routes>
  );
};
