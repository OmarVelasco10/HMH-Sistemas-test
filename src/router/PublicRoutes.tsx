import { ReactElement } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface RoutesProps {
    children: ReactElement;
    status: string;
}

export const PublicRoute = ({ children, status }: RoutesProps) => {

  return status === "not-authenticated" ? children : <Navigate to="/" />;
};
