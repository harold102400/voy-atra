import { Outlet } from 'react-router-dom';
import { UserAuth } from 'context/authContext';

const ProtectedRoutes = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <div>Forbidden.</div>;
};

export default ProtectedRoutes;
