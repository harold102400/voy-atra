import { UserAuth } from 'context/userContext';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const { userSite } = UserAuth();
  const navigate = useNavigate();

  return userSite ? navigate(`/admin-panel/${userSite}`) : <p>Pagina no encontrada.</p>;
};

export default NotFound;
