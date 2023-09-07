import { Route, Routes } from "react-router-dom";

import { PublicRoute } from "./PublicRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { PrivateRoute } from "./PrivateRoutes";
import { TasksRoutes } from "../tasks/routes/TasksRoutes";
import { useAppSelector } from "../hooks";

export const AppRouter = () => {
  const { loginSuccess } = useAppSelector( (state ) => state.auth);


  return (
    <Routes>
      <Route 
        path="/auth/*"
        element={
            <PublicRoute status={loginSuccess}>
                <AuthRoutes />
            </PublicRoute>
        }
      />
      <Route 
        path="/*"
        element={
            <PrivateRoute status={loginSuccess}>
                <TasksRoutes />
            </PrivateRoute>
        }
      />
    </Routes>
  );
};
