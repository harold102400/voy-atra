import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/authContext';

const ProtectedRoutes = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoutes;
