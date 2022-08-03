import { Outlet } from 'react-router-dom';
import { UserAuth } from 'context/userContext';

const ProtectedRoutes = () => {
  const { user } = UserAuth();

  return user ? <Outlet /> : <p>Forbidden.</p>;
};

export default ProtectedRoutes;
