import { ReactElement } from "react";
import { Navigate, Route } from "react-router-dom";

interface RoutesProps {
    children: ReactElement;
    status: string;
}

export const PrivateRoute = ({ children, status }: RoutesProps) => {
  return status === "authenticated" ? children : <Navigate to="/auth/login" />;
};
