import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface RoutesProps {
    children: ReactElement;
    status: boolean;
}

export const PrivateRoute = ({ children, status }: RoutesProps) => {
  return status ? children : <Navigate to="/auth/login" />;
};
