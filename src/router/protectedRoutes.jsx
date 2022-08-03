import { Outlet } from 'react-router-dom';
import { UserAuth } from 'context/userContext';
import { useParams, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { user } = UserAuth();
  const params = useParams();
  const navigate = useNavigate();

  return user ? <Outlet /> : navigate(`/auth/${params.site}`);
};

export default ProtectedRoutes;
