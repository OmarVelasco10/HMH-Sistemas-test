import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface RoutesProps {
    children: ReactElement;
    status: boolean;
}

export const PublicRoute = ({ children, status }: RoutesProps) => {

  return !status  ? children : <Navigate to="/" />;
};
